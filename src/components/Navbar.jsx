import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">VzDeco</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Mesas</a></li>
            <li><a className="dropdown-item" href="#">Sillas</a></li>
            <li><a className="dropdown-item" href="#">Deco</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget/>
</nav>
    </div>
  )
}

export default Navbar