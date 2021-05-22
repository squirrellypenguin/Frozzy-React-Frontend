import React from "react";
import {Link} from "react-router-dom"

const Main = (props) => {

  const { shops } = props

  
  return (
   <div>
      <h1>Frizzy</h1>
      <Link to="/shops">
      <button>See Shops</button>
      </Link>
   </div> 
  
  )
};

export default Main;