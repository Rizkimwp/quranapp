import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import "../css/Doa.css"
import axios from 'axios'
const ReadDoa = () => {
    const [doa, setDoa] = useState([])

    useEffect(() => {
        const url = window.location.href;
        const id = url.split('/doa/')[1];
        getDetailDoa(id)
    }, [])

    const getDetailDoa = async (id) => {
        const response = await axios.get(`https://equran.id/_next/data/kxkUjfH9JP-fYvtf4Vn41/doa/${id}.json?doa=${id}`);
        const result = response.data.pageProps.data1;
        setDoa(result)
        document.title = `QuranApp | ${result.nama}`;
    }
    return (
        <div>
            <header>
                <nav>
                    <Navigation />
                </nav>
            </header>
            <main>
                <div className="container">
                    <div className="head-doa">
                        <div className="title-doa">
                            <h1>{doa.nama}</h1>
                        </div>
                        <div className="bismillah">
                            <h1>بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ</h1>
                        </div>
                    </div>
                    <div className="body-doa">
                        <h1 className='doa-arab'>{doa.ar}</h1>
                        <h1 className='doa-latin'>{doa.tr}</h1>
                        <br />
                        <hr />
                        <br />
                        <h4>Arti:</h4>
                        <p className='arti'>"{doa.idn}"</p>
                        <h4>Tentang Doa:</h4>
                        <p className='tentang'>"{doa.tentang}"</p>
                    </div>
                </div>
            </main>
            <br /><br /><br />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default ReadDoa
