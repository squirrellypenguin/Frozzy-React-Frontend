import React from "react";
import {useEffect} from "react"
import {useState} from "react"
import Edituser from './edituser'
import { Switch,Route } from 'react-router-dom';

const User = (props) => {

//   let shops =props.shops
  // handleUpdate function for when edit form is sumbitted 

console.log(props.users)
  let user = props.users.map((user, index) => {
     console.log(user.lastname);
     
    return (
      <div  key={index}>
        {/* <img src={hero.images.sm} alt="small-profile-picture" /> */}
        <div className="small-container">
        <h2>{user.user} User {index + 1} {user.first} {user.last}</h2>
        
          <h3>{user.phone}</h3>
          <h3>{user.email}</h3>
          <h3>{user.address} {user.city}</h3>
          <h3>{user.state} {user.zip}</h3>
          <button id="edit" onClick={() => {
            props.selectEdit(user)
            props.history.push("/edit")
          }}>Edit</button>

        <button>Delete</button>
        </div>
      </div>
    );
  });
  return (
    <div>

   {user} </div>
  )
};

export default User;