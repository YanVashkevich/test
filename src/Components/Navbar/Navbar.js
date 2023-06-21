import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
    <h1 className="title">ToDo</h1>
    <div className="links">
       <a className="home" href="/">Home</a>
       <a className="about" href = "/shop">Shop</a>
       <a className="contact" href="/contact">Contact Us</a>
    </div>
 </nav>  
  );
}

export default Navbar;
