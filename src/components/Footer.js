import React from 'react';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div>
        <nav>
            <div id='footer-container'>
            <section class='footer-buttons'>
                <Link>
                    <button to='/menu' class='footer-icon'><img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621611905/Frozzy%20Project/Menu_Icon-01_ofz7cq.png'/></button>
                    <p class='footer-copy'>Menu</p>
                </Link>
            </section>



            <section id='footer-home-button-container'>
                <Link>
                    <button to='/' id='home-button'><img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617903/Frozzy%20Project/Home_Icon-01-01_hxgeqd.png'/></button>
                </Link>
            </section>



            <section class='footer-buttons'>
                <Link>
                    <button to='/menu' class='footer-icon'><img src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621613021/Frozzy%20Project/Profile_Icon-01_a7n7yr.png'/></button>
                    <p class='footer-copy'>Profile</p>
                </Link>
            </section>
            </div>
        </nav>
        </div>
        
    )
}

export default Footer




