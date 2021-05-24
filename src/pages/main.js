import React from "react";
import {Link} from "react-router-dom"

const Main = (props) => {

  const { shops } = props

  
  return (
    <div id='black-background'>
      <section id='main-image-container'>
        <img id='main-background' src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621658976/Frozzy%20Project/HomePageBackgroundai-01-01_u6jqgs.png'/>
      </section>
      <div id='main-logo-container'>
        <img id='main-logo' src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621616748/Frozzy%20Project/Frozzy_Logo-01_mbjtw3.png'/>
      </div>
      <article id='main-greeting-container'>
        <p id='main-greeting'>Discover the best flavored ice-cream from over 1000 ice-cream parlours and fast delivery to your doorstep</p>
      </article>
      <div id='main-login-button-container'>
      
      <Link to='/shop'>
        <button id='main-login-button'>Check out some ice cream!</button>
      </Link>
      </div>
    </div>
  )
};

export default Main;