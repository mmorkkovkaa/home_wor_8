import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer-links">
                <a href="https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D1%8B">Mountains</a>
                <a href="https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D1%81">Forest</a>
                <a href="https://ru.wikipedia.org/wiki/%D0%9E%D0%B7%D0%B5%D1%80%D0%BE">Lakes</a>
            </div>
            <div className="social-icons">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
            </div>
            <p>you can read more about lakes, forest and mountains!!!!</p>
        </footer>
    );
}

export default Footer;