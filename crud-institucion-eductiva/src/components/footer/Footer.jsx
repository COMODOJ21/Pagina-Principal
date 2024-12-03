import React from "react";
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>© {currentYear} INVENTARIO. LO MEJOR PARA SU SERVICIO.</p>
        </footer>
    );
};

export default Footer;
