import React, { useEffect, useRef, useState } from 'react'
import "../css/Doa.css"
import { getDoa } from "../Api"
import axios from 'axios'
import Loader from './Loader'
import { useNavigate } from 'react-router-dom'
const DoaList = () => {
    const [daftarDoa, setDaftarDoa] = useState([])
    const loadBox = useRef("")
    const navigate = useNavigate("")
    useEffect(() => {
        getDoa().then((result) => {
            setDaftarDoa(result)
        })
        loadBox.current.classList.add("hide");
    }, [])

    const ShowDoaList = () => {
        return daftarDoa.map((doa, i) => {
            return (
                <button className="doa" onClick={() => navigate(`/doa/${doa.id}`)} key={i}>
                    <h1>{doa.id} . {doa.nama}</h1>
                </button>
            )
        })
    }

    const searchDoa = async (keyword) => {
        const response = await axios.get("https://equran.id/_next/data/kxkUjfH9JP-fYvtf4Vn41/doa.json")
        const jsonData = response.data.pageProps.doas
        const results = jsonData.filter((item) => {
            return item.nama.toLowerCase().includes(keyword.toLowerCase())
        })

        setDaftarDoa(results)
    }
    return (
        <div className='container'>
            <div ref={loadBox}>
                <Loader />
            </div>
            <div className='form-search'>
                <input onKeyDown={(e) => searchDoa(e.target.value)} type="text" placeholder='🔍Cari doa...' />
            </div>
            <div className="doa-list">
                <ShowDoaList />
            </div>
        </div>
    )
}

export default DoaList
