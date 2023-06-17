import React, { useEffect, useRef, useState } from 'react'
import Navigation from '../components/Navigation';
import { getOneSurat } from "../Api"
import "../css/Surat.css"
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Footer from "../components/Footer"
import { useParams } from 'react-router-dom';

const Surat = () => {
    const { id } = useParams();
    const [detailSurat, setDetailSurat] = useState([])
    const [ayat, setAyat] = useState([])
    const [audio, setAudio] = useState("")
    const navigate = useNavigate("")
    const loadBox = useRef("")
    const audioRef = useRef("")
    const [isPlaying, setIsPlaying] = useState(false);
    useEffect(() => {
        if (!id) {
            navigate("/")
        }
        getOneSurat(id).then((result) => {
            setDetailSurat(result)
            setAyat(result.ayat)
            setAudio(result.audioFull['05'])
            loadBox.current.classList.add("hide")
        })
    }, [])


    const ShowAyat = () => {
        return ayat.map((item, i) => {
            let subject = "ayat" + item.nomorAyat
            return (<div className="card-ayat" id={subject} key={i}>
                <p className="no-ayat">{item.nomorAyat}</p>
                <p className="ayat">{item.teksArab}</p>
                <p className='ayat-latin'>{item.teksLatin}</p>
                <hr />
                <p className='arti'>{item.teksIndonesia}</p>
            </div>
            )
        })
    }

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };


    const ShowSelectAyat = () => {
        return ayat.map((item, i) => {
            let subject = "ayat" + item.nomorAyat
            return (
                <option value={subject} key={i}>
                    Ayat {item.nomorAyat}
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
                <div ref={loadBox} >
                    <Loader />
                </div>
                <nav>
                    <Navigation />
                </nav>
            </header>
            <main>
                <div className="container">
                    <div className="surat">
                        <div className="head-surat">
                            <h2 className="title">{detailSurat.namaLatin} • {detailSurat.nama}</h2>
                            <p>{detailSurat.tempatTurun} • {detailSurat.arti} • {detailSurat.jumlahAyat} Ayat</p>
                            <div className="aksi">
                                <button onClick={toggleAudio}>
                                    <audio ref={audioRef} src={audio} />
                                    <span>
                                        {isPlaying ? '⏸ Audio' : '▶️ Audio'}
                                    </span>
                                </button>
                                <button onClick={() => navigate(`/tafsir?id=${detailSurat.nomor}`)}>📃Tafsir</button>
                            </div>
                        </div>
                        <div className="select-ayat">
                            <select onChange={(e) => {
                                handleAyatChange(e.target.value)
                            }}>
                                <ShowSelectAyat />
                            </select>
                        </div>
                        <div className="body-surat">
                            <ShowAyat />
                        </div>
                    </div>
                </div>
            </main>
            <br /><br /><br />
            <footer>
                <div>
                    <Footer />
                </div>
            </footer>
        </div>
    )
}

export default Surat
