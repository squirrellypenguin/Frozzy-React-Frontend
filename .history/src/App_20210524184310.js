import { Switch,Route } from 'react-router-dom';
import './App.css';
import Checkout from './pages/checkout'
import Main from './pages/main'
import Creem from './pages/icecream'

import Shop from './pages/shop'
import Nav from './components/nav'
import React from 'react';


function App() {
  const url = "https://frozzybe.herokuapp.com"

  // State that will hold shops 
  const [shops, setShops] = React.useState([])
  // State to hold ice cream flavors 
  const [creems, setCreems] = React.useState([])

  //state to hold ratings
  const [ratings, setRatings] = React.useState([])

  // variable to hold to Empty flavor 
  const emptyCreem = {
    rating: [],
    name: "",
    img:  "",
    story: "",
    cost: 0,
  }


  //empty rating variable 
  const emptyRating = {
    rating: 0
  }
  // state that represents selected flavor 
  const [selectedCreem, setSelectedCreem] = React.useState(emptyCreem)

  // state for rating 
  const [selectedRating, setselectedRating] = React.useState(emptyRating)


  // function that will get all the flavors
  const getCreems = () => {
    fetch(url + "/creem/")
    .then((response) => response.json())
    .then((data) => {
      setCreems(data)
    })
  }

  // function that will get all the flavors
  const getRatings = () => {
    fetch(url + "/creem/rating")
    .then((response) => response.json())
    .then((data) => {
      setRatings(data)
    })
  }

  // function to get all shops 
  const getShops = () => {
    fetch(url + "/store/")
    .then((response) => response.json())
    .then((data) => {
      setShops(data)
    })
  }

  // function to get ratings
  const getRating = () => {
    fetch(url + "/creem/" + "/rating/")
    .then((response) => response.json())
    .then((data) => {
      setRatings(data)
      console.log("ratings", setRatings)
    })
  }

  //useEffect to get shop data 
  React.useEffect(() =>{
    getShops()
  }, [])

  //useEffect to get the flavor data right away
  React.useEffect(() => {
    getCreems()
  }, [])

  // handleCreate function for form submission of 
 const handleCreate = (newCreem) => {
    fetch(url + "/creem/", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newCreem)
    })
    .then(() => getCreems())
  }

  // handleUpdate function for when edit form is sumbitted 
  const handleUpdate = (creem) => {
    fetch(url + "/creem/" + creem._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(creem)
    })
    .then(() => getCreems())
  }


  // handleUpdate function for form submission on rating
  const handleRatingUpdate = (id) => {
    fetch(url + "/creem/rating/" + id, {
      method: "PUT",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify("4")
    })
    .then(() => getRating())
  }

  // function to specifiy the flavor being updated 
  const selectCreem = (creem) => {
    setSelectedCreem(creem)
  }


  //function to specify which rating is being updated
  const selectRating = (id, rating) => {
    console.log("lifted State")
    console.log(id, rating)
   handleRatingUpdate(id)
  }
 
  // function to delete individual flavors
  const deleteCreem = (creem) => {
    fetch(url + "/creem/" + creem._id, {
      method: "delete"
    })
    .then(() => {
      getCreems()
    })
  }

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" render={(rp) =>
          <Main
          {...rp}
          shops={shops}
           />} />
        <Route exact path="/shop" render={(rp) => 
          <Shop
          {...rp}
          shops={shops} 
          />} />
        <Route path="/checkout" render={(rp) =>
          <Checkout 
          {...rp}
          creem={creems}
          selectedCreem={selectedCreem}
          handleSubmit={handleUpdate}
          deleteCreem={deleteCreem}
          selectCreem={selectCreem}
          />} />

         <Route exact path="/icecream" render={(rp) => 
          <Creem
          {...rp}
          handleRatingSubmit={handleRatingUpdate}
          selectRating={selectRating}
          creems={creems} 
          // selectedRating={selectedRating}
          handleSubmit={handleUpdate}
          // selectRating={selectRating}

          />} />
      </Switch>
    </div>
  );
}

export default App;
