import React from "react";
import {useEffect} from "react"
import {useState} from "react"


const User = (props) => {
  let [users, setUsers] = useState([])
  let url = "https://frozzybe.herokuapp.com/user/"
  const getUsers = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    // setHeroes(data.data);
    setShops(data)
  };
  useEffect(() => {
    getUsers(url);
  }, []);

//   let shops =props.shops


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

console.log(average);

    return (
      <div  key={index}>
        {/* <img src={hero.images.sm} alt="small-profile-picture" /> */}
        <div className="small-container">
          <img src={shop.img} />
          <h2>{shop.name}</h2>
          <h2>{shop.location}</h2>
          <h2>{shop.description}</h2>
          <h2>Rating: {average}</h2>
        </div>
      </div>
    );
  });
  return (
   
   <div>{shop} </div>
  )
};

export default Shop;