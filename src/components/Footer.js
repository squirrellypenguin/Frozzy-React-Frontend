import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div>
        <nav>
            <div id='footer-container'>
            <section class='footer-buttons'>
                <Link to='/checkout'>
                    <button class='footer-icon'><img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621613063/Frozzy%20Project/Shpping_Cart_RED_Icon-01_tfsykv.png'/></button>
                </Link>
                    <p class='footer-copy'>Cart</p>
            </section>
            <section id='footer-home-button-container'>
                <Link to='/'>
                        <button id='home-button'><img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617903/Frozzy%20Project/Home_Icon-01-01_hxgeqd.png'/></button>
                </Link>
            </section>
            <section class='footer-buttons'>
                <Link to='/user'>
                    <button class='footer-icon'><img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621613021/Frozzy%20Project/Profile_RED_Icon-01_zitgel.png'/></button>
                </Link>
                    <p class='footer-copy'>Profile</p>
            </section>
            </div>
        </nav>
        </div>
        
    )
}

export default Footer




