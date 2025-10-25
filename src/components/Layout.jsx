// src/components/Layout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Home.css';
import { FaShoppingCart } from 'react-icons/fa';

function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Cartsy</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link active" to="/">Home</Link></li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Women</a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/WClothingPage">Clothing</Link></li>
                  <li><Link className="dropdown-item" to="/WFootwearPage">Footwear</Link></li>
                  <li><Link className="dropdown-item" to="/handbags">Handbags</Link></li>
                  <li><Link className="dropdown-item" to="/WJewelleryPage">Jewellery</Link></li>
                  <li><Link className="dropdown-item" to="/WWatchesPage">Watches</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Men</a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/MClothingPage">Clothing</Link></li>
                  <li><Link className="dropdown-item" to="/men/shoes">Shoes</Link></li>
                  <li><Link className="dropdown-item" to="/men/wallets">Wallets</Link></li>
                  <li><Link className="dropdown-item" to="/men/jewellery">Jewellery</Link></li>
                  <li><Link className="dropdown-item" to="/MWatchesPage">Watches</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Kids</a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/kids/clothing">Clothing</Link></li>
                  <li><Link className="dropdown-item" to="/kids/footwear">Footwear</Link></li>
                  <li><Link className="dropdown-item" to="/kids/accessories">Accessories</Link></li>
                  <li><Link className="dropdown-item" to="/kids/books">Story Books</Link></li>
                  <li><Link className="dropdown-item" to="/kids/toys">Toys</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Electronics</a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/electronics/mobiles">Mobiles</Link></li>
                  <li><Link className="dropdown-item" to="/electronics/laptops">Laptops</Link></li>
                  <li><Link className="dropdown-item" to="/electronics/cameras">Cameras</Link></li>
                  <li><Link className="dropdown-item" to="/electronics/tvs">TVs</Link></li>
                  <li><Link className="dropdown-item" to="/electronics/instruments">Music Systems</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Home & Kitchen</a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/home-kitchen/furniture">Furniture</Link></li>
                  <li><Link className="dropdown-item" to="/home-kitchen/decor">Decor</Link></li>
                  <li><Link className="dropdown-item" to="/home-kitchen/cookware">Cookware</Link></li>
                  <li><Link className="dropdown-item" to="/home-kitchen/garden">Garden</Link></li>
                </ul>
              </li>
            </ul>

           
            <div className="d-flex align-items-center">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>

              <Link to="/register" className="btn btn-outline-success ms-3">Register</Link>

              
              <Link to="/cart" className="btn btn-outline-dark ms-3">
  <FaShoppingCart size={20} />
</Link>

            </div>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>


      
    </>
  );
}

export default Layout;
