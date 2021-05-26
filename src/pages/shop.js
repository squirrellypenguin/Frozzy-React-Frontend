import React from "react";
import {useEffect} from "react"
import {useState} from "react"
import Footer from '../components/Footer'


const Shop = (props) => {
  
  // let [shops, setShops] = useState([])
  // let url = "https://frozzybe.herokuapp.com/store/"
  // const getShops = async (url) => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   // setHeroes(data.data);
  //   setShops(data)
  // };
  // useEffect(() => {
  //   getShops(url);
  // }, []);
  let shops =props.shops


  let shop = shops.map((shop, index) => {
     console.log(shop.name);
    //  var average = shop.rating.reduce(function (average, value, _, array){
    //  console.log(average, value,)

    //   var array_length = array.length;
    //   return Math.floor(average + value / array_length);
    // });
    //Take a b in array and add starting with 0 then deivide by array.length

    let average = shop.rating.reduce(function (sum, value) {
      console.log(sum, value )
      return sum + value;
  }, 0) / shop.rating.length;


    return (
      <div  key={index}>
        <section>
          <div id='shop-image-container'>
            <div id='shop-image'>
              <img src={shop.img}/>
            </div>
          </div>
          <div id='shop-name'>
            <h3>{shop.name}</h3>
          </div>
          <div id='shop-rating-container'>
            <img id='shop-rating' src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617727/Frozzy%20Project/Star_RED_Icon-01-01_xqqell.png'/>
            <span>Rating: {average}</span>
            <span>{shop.location}</span>
          </div>
        </section>
      </div>
    );
  });

  return (
   <div id='shop-container'>
     <Footer/>   
     {shop} 
   </div>
  )
};

export default Shop;