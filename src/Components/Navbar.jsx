import React from 'react'
import Logo from "../Components/Logo.png"
import { Link } from 'react-router-dom'
import * as Icons from "react-icons/fa";
import "./Cric.css";

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand">
  <div className="container-fluid">
    <Link className="nav-logo" to="/"><img className="Logo" src={Logo} alt="Logo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Live Score
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
          
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Series
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
          
        </li><li className="nav-item dropdown">
          <Link className="nav-link " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Teams
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
          
        </li><li className="nav-item dropdown">
          <Link className="nav-link " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            News
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
          
        </li><li className="nav-item dropdown">
          <Link className="nav-link " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Features
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
          
        </li><li className="nav-item dropdown">
          <Link className="nav-link " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Videos
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
          
        </li><li className="nav-item dropdown">
          <Link className="nav-link " to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Stats
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
         
        </li>
         
        <li className="nav-item" style={{}}>
          <Link className="nav-link active" aria-current="page" to="/"><Icons.FaMoon/></Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><Icons.FaBell/></Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><Icons.FaTh/></Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><Icons.FaSearch/></Link>
        </li>
      
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}