import React, {useState} from 'react';

export default function NavBar(){

    const [selected, setSelected] = useState('Home');

    function setActive(item) {
        document.getElementById(selected).classList.remove("active");
        document.getElementById(item).classList.add("active");
        setSelected(item);
    } 

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top white-font shadow">
            <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="#home">LandingPage</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-link" aria-current="page" href="#home" onClick={() => setActive("Home")} id="Home">Home</a>
                <a className="nav-link" href="#about" onClick={() => setActive("About")} id="About">About</a>
                <a className="nav-link" href="#products" onClick={() => setActive("Products")} id="Products">Products</a>
                <a className="nav-link" href="#testimonials" onClick={() => setActive("Testimonials")} id="Testimonials">Testimonials</a>
                <a className="nav-link" href="#services" onClick={() => setActive("Services")} id="Services">Services</a>
                <a className="nav-link" href="#contact" onClick={() => setActive("Contact")} id="Contact">Contact</a>
                </div>
            </div>
            </div>
        </nav>
    );
}