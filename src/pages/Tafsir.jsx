import React, { useEffect, useState } from 'react'
import "../css/Tafsir.css"
import Navigation from '../components/Navigation'
import { getTafsir } from "../Api"
import { useNavigate } from 'react-router-dom'
import Footer from "../components/Footer"
const Tafsir = () => {
    const [detailSurat, setDetailSurat] = useState("")
    const [tafsir, setTafsir] = useState([])
    const navigate = useNavigate("")
    useEffect(() => {
        const url = new URL(window.location.href);
        const id = url.searchParams.get('id');
        if (!url.searchParams.get('id')) {
            navigate("/")
        }

        getTafsir(id).then((result) => {
            setDetailSurat(result)
            setTafsir(result.tafsir)
            document.title = `QuranApp | Tafsir - ${result.namaLatin}`
        })
    }, [])


    const ShowTafsir = () => {
        return tafsir.map((item, i) => {
            let subject = "ayat" + item.ayat
            return (
                <div className="card" id={subject} key={i}>
                    <h5>{item.ayat}</h5>
                    <p>{item.teks}</p>
                </div>
            )
        })
    }

    const ShowSelectAyat = () => {
        return tafsir.map((item, i) => {
            let subject = "ayat" + item.ayat
            return (
                <option value={subject} key={i}>
                    Ayat {item.ayat}
                </option>
            )
        })
    }


    const handleAyatChange = (e) => {
        const ayatElement = document.getElementById(`${e}`);
        if (ayatElement) {
            ayatElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <div>
            <header>
                <nav>
                    <Navigation />
                </nav>
            </header>
            <main>
                <div className="container">
                    <div className="tafsir">
                        <div className="head-tafsir">
                            <h2>{detailSurat.namaLatin} • {detailSurat.nama}</h2>
                            <p>{detailSurat.tempatTurun} • {detailSurat.arti} • {detailSurat.jumlahAyat} Ayat</p>
                            <button onClick={() => navigate(`/surat?id=${detailSurat.nomor}`)}>📃Surat</button>
                        </div>
                        <div className="select-ayat">
                            <select onChange={(e) => {
                                handleAyatChange(e.target.value)
                            }}>
                                <ShowSelectAyat />
                            </select>
                        </div>
                        <div className="body-tafsir">
                            <ShowTafsir />
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Tafsir
