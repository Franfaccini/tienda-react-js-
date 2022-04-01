import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand textMarket" href="#">SMP</a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 itemsMarket">
      <li className="nav-item active">
        <a className="nav-link" href="#">INICIO <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#">PRODUCTOS <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#"> NOSOTROS <span className="sr-only"></span></a>
      </li>


      <li className="nav-item probandoCarrito">
      <CartWidget/>
      </li>

    </ul>
    
    
  </div>
</nav>
    );
}


export default NavBar;