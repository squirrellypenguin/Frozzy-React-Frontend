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
    setUsers(data)
  };
  useEffect(() => {
    getUsers(url);
  }, []);

//   let shops =props.shops


  let user = users.map((user, index) => {
     console.log(user.lastname);
     
    return (
      <div  key={index}>
        {/* <img src={hero.images.sm} alt="small-profile-picture" /> */}
        <div className="small-container">
          <img src={shop.img} />
          <h2>{user.lastname}</h2>
        </div>
      </div>
    );
  });
  return (
   
   <div>{shop} </div>
  )
};

export default Shop;