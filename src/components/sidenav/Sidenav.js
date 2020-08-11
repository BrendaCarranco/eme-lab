import React from 'react'
import './sidenav.css'


const Sidenav = props => (
   <nav className="sidenav">
    <ul>
      <label>Manuel Lujano</label>
      <li>
        <a href="/">Nueva Cotización</a>
      </li>
      <li>
        <a href="/">Historial</a>
      </li>
      <li>
        <a href="/">Membresías</a>
      </li>
    </ul>
   </nav>
)


export default Sidenav
