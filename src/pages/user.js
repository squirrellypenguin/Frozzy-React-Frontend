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
     let red = {
       color: '#EE4540'
     }
    return (
    
       
        <div className="small-container" key={index}>
        <img src={user.img} className="profile-picture" alt="Profile Picture" />
        <div className="card inner outer">
        <h2 className="small" style={red} >User: {user.user}</h2>
        <h2>{user.first} {user.last}</h2>
        
          <p>Telephone: {user.phone}</p>
          <p>Email: {user.email}</p>
          <p>{user.address} {user.city}</p>
          <p>{user.state} {user.zip}</p>
          <div className="button-grid">
          <button id="edit" onClick={() => {
            props.selectedEdit(user)
            props.history.push("/edit")
          }}>Edit</button>

        <button id="delete"onClick={() => {
            props.deleteUser(user)
          }}>
            Delete
          </button>
          </div>
          </div>
          <br />
          <br />
        </div>
    
     
    );
  });
  return (
    <div>
        <button id="edit" onClick={() => {
           
            props.history.push("/create")
          }}>Add</button> <br /><br />
    <div className="userGrid">
   {user} 
   </div>
   </div>
  )
};

export default User;