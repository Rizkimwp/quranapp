import React, { useEffect, useRef, useState } from 'react';
import "../css/Home.css";
import { getSurat } from "../Api";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
const ListSurat = () => {
  const [suratList, setSuratList] = useState([]);
  const loadBox = useRef("")
  const navigate = useNavigate("")
  useEffect(() => {
    getSurat().then((result) => {
      setSuratList(result);
    });
    loadBox.current.classList.add("hide")
  }, []);

  const Surat = () => {
    return suratList.map((surat, i) => (
      <button className="card-surat" onClick={() => navigate(`/surat/${surat.nomor}`)} key={i}>
        <p className='judul-latin'>{surat.namaLatin}</p>
        <p className='judul-arab'>{surat.nama}</p>
        <p className='deskripsi'>{surat.tempatTurun} . {surat.arti}</p>
      </button>
    ));
  };

  const searchData = async (keyword) => {
    const response = await axios.get("https://equran.id/api/v2/surat")
    const jsonData = response.data.data
    const results = jsonData.filter((item) => {
      return item.namaLatin.toLowerCase().includes(keyword.toLowerCase())
    })
    setSuratList(results)
  }
  return (
    <div>
      <div ref={loadBox} >
        <Loader />
      </div>
      <div className='container'>
        <div className="form-search">
          <div>
            <input type="text" onKeyDown={(e) => searchData(e.target.value)} placeholder='🔍Cari surat...' />
          </div>
        </div>
        <div className="container-surat">
          <Surat />
        </div>
      </div>
    </div>
  );
};

export default ListSurat;
