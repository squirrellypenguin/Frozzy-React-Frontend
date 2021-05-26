import { Switch,Route } from 'react-router-dom';
import './App.css';
import Checkout from './pages/checkout'
import Main from './pages/main'
import Creem from './pages/icecream'
import User from './pages/user'
import Shop from './pages/shop'
import Nav from './components/nav'
import React from 'react';
import Edituser from './pages/edituser'


function App() {
  const url = "https://frozzybe.herokuapp.com"

  // State that will hold shops 
  const [shops, setShops] = React.useState([])
  // State to hold ice cream flavors 
  const [creems, setCreems] = React.useState([])
  const [edit, setEdit] = React.useState()

  const selectedEdit = (user) => {
    setEdit(user)
  }
  

  let [users, setUsers] = React.useState([])
  const getUsers = async () => {
    const response = await fetch(url + "/user");
    console.log(response)
    const data = await response.json();
   console.log("read for this", data)
    setUsers(data)
  };


  const deleteUser = (user) => {
    fetch(url + "/user/" + user._id, {
      method: "delete"
    })
    .then(() => {
      getUsers()
    })
  }
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

  const emptyUser = {
    
    last: "",
    img:  ""
    
  }


  // state that represents selected flavor 
  const [selectedCreem, setSelectedCreem] = React.useState(emptyCreem)
const [cart, setCart] = React.useState([])
  // state for rating 
  const [selectedRating, setselectedRating] = React.useState(emptyRating)
  
  const [favorite, setFavorite] = React.useState([])




  const selectFavorite = (order) => {
    setTimeout(setFavorite([...favorite, order]), 2000)
    let body = { faves: order.name}
    console.log("WHAT DATS IS GETTING SENT???", order.name)
    fetch("https://frozzybe.herokuapp.com/user/faves/60ad54cf6630ed001517a19a", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(() => getUsers())
  }



  const selectCart = (creem, index) => {
    console.log("lifted State", creem)
    setCart([...cart, creem])
  //  handleRatingUpdate(rating, id)
  }

  const removeFromCart = (pos) => {
    console.log("pos",pos)
    const updatedCart = cart.filter((flavor, index) => index !== pos)
    setCart(updatedCart)
  }

  // function that will get all the flavors
  const getCreems = () => {
    fetch(url + "/creem/")
    .then((response) => response.json())
    .then((data) => {
      setCreems(data)
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

  // //function to get ratings
  const getRating = () => {
    fetch(url + "/creem" + "/rating")
    .then((response) => response.json())
    .then((data) => {
      setRatings(data)
      console.log("ratings", setRatings)
    })
  }

  //useEffect to get shop data 
  React.useEffect(() =>{
    getShops()
    getUsers();
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
  const handleUser = (newUser) => {
    console.log("state lifted")
    console.log(newUser)
    fetch(url + "/user/", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
    .then(() => getUsers())
  }
  // handleUpdate function for when edit form is sumbitted 
  const handleUpdate = (creem) => {
    fetch(url + "/creem/" + creem, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(creem)
    })
    .then(() => getCreems())
  }

  const handleEdit = (user) => {
    fetch(url + "/user/" + user._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(() => getUsers())
  }


  // handleUpdate function for form submission on rating
  const handleRatingUpdate = (rating, id) => {
    let body = { rating: rating}
    fetch(url + "/creem/rating/" + id, {
      method: "PUT",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(body)
    })
    .then(() => getRating())
  }

  // function to specifiy the flavor being updated 
  const selectCreem = (creem) => {
    setSelectedCreem(creem)
  }


  //function to specify which rating is being updated
  const selectRating = (rating, id) => {
    console.log("lifted State")
    console.log(id, rating)
   handleRatingUpdate(rating, id)
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
          favorite={favorite}
          cart={cart}
          creem={creems}
          selectedCreem={selectedCreem}
          removeFromCart={removeFromCart}
          handleSubmit={handleUpdate}
          deleteCreem={deleteCreem}
          selectCreem={selectCreem}
          />} />

         <Route exact path="/icecream" render={(rp) => 
          <Creem
          {...rp}
          selectFavorite={selectFavorite}
          handleRatingSubmit={handleRatingUpdate}
          selectRating={selectRating}
          selectCart={selectCart}
          creems={creems} 
          // selectedRating={selectedRating}
          handleSubmit={handleUpdate}
          // selectRating={selectRating}

          />} />

<Route exact path="/user" render={(rp) => 
          <User  {...rp} users={users}    orders={favorite} selectedEdit={selectedEdit}    deleteUser={deleteUser}   />

} />
    <Route
            exact
            path="/create"
            render={(rp) => (
              <Edituser 
              {...rp} 
              label="create" 
              user={emptyUser} 
           
              handleSubmit={handleUser} />
            )}
          />
    <Route
            exact
            path="/edit"
            render={(rp) => (
              <Edituser 
              {...rp} 
              label="update" 
              user={edit} 
           
              handleSubmit={handleEdit} />
            )}
          />
      </Switch>
    </div>
  )
}

export default App;
