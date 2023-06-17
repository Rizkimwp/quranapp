import React, { useRef } from 'react'
import "../css/Navigation.css"
import { useNavigate } from 'react-router-dom'
const Navigation = () => {
  const menu = useRef("")
  const navigate = useNavigate("")
  const Sidebar = (aksi) => {
    if (aksi === "open") {
      menu.current.classList.remove("d-none")
    } else {
      menu.current.classList.add("d-none")
    }
  }
  return (
    <div>
      <div className='navbar'>
        <p className="brand">QuranApp</p>
        <div className="menu d-none" ref={menu}>
          <button className='btn-close' onClick={() => Sidebar("close")}>X</button>
          <button onClick={() => navigate("/")}>🏠Beranda</button>
          <button onClick={() => navigate("/list-doa")}>📃Kumpulan doa</button>
          <button>Api Developer</button>
        </div>
        <button className='humberger' onClick={() => Sidebar("open")}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      <div className="backdrop"></div>
    </div>
  )
}

export default Navigation
