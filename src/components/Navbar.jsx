import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg z-3 ">
        <div className="container-fluid">
          <div className="logo">
            <Link className="navbar-brand d-flex" style={{ color: "white", fontWeight: "500", fontSize: "60px", marginLeft: "10px" }} to="/">
              AliBABA
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ fontSize: "20px", fontWeight: "500", color: "white" }}>
                <Link className="nav-link active " style={{ color: "white" }} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item " style={{ fontSize: "20px", fontWeight: "500", color: "white" }}>
                <Link className="nav-link active" style={{ color: "white" }} to="/about">
                  About
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mx-5">
              <li className="nav-item " style={{ fontSize: "20px", fontWeight: "500", color: "white" }}>
                <Link className="nav-link active" style={{ color: "white", fontFamily: "fantasy", fontSize: "25px" }} aria-current="page" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item navcart ">
                <Link className="nav-link active " style={{ color: "yellow" }} to="/cart">
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;
