import React from "react";
import {useEffect} from "react"
import {useState} from "react"
import Edituser from './edituser'
import { Switch,Route } from 'react-router-dom';

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
  // handleUpdate function for when edit form is sumbitted 


  let user = users.map((user, index) => {
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
            props.selectTodo(todo)
            props.history.push("/edit")
          }}>
            
        <button>Delete</button>
        </div>
      </div>
    );
  });
  return (
    <div>
<Edituser />
   {user} </div>
  )
};

export default User;