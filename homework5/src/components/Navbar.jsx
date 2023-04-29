import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='main-box'>
      <div className="koding-box">
        <h1>Koding Made Simple</h1>
      </div>
      <div className="list-box">
        <div className="box" style={{backgroundColor:"rgb(230,0,0)"}}><h2>Bootstrap</h2></div>
        <div className="box"><h2>Themes</h2></div>
        <div className="box"><h2>Blog</h2></div>
      </div>
    </div>
  )
}
