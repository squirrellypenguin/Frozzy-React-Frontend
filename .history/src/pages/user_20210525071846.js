import React from "react";
import {useEffect} from "react"
import {useState} from "react"


const User = (props) => {
  let [users, setUsers] = useState([])
  let url = "https://frozzybe.herokuapp.com/user/"
  const getUsers = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
   console.log(data)
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
        <h2>User {index} {user.first} {user.last}</h2>
          
        </div>
      </div>
    );
  });
  return (
   
   <div>{user} </div>
  )
};

export default User;