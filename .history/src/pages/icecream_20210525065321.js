import React from "react";
import {useEffect} from "react"
import {useState} from "react"


const Creem = (props) => {
  let [creems, setCreems] = useState([])
  // console.log(props)
  let url = "https://frozzybe.herokuapp.com/creem/"
  const getCreems = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    // setHeroes(data.data);
    setCreems(data)
  };
  useEffect(() => {
    getCreems(url);
  }, []);




  let creem = creems.map((creem, index) => {

    //  console.log(creem.name);
    //  var average = shop.rating.reduce(function (average, value, _, array){
    //  console.log(average, value,)

    //   var array_length = array.length;
    //   return Math.floor(average + value / array_length);
    // });
    //Take a b in array and add starting with 0 then deivide by array.length

    let average = creem.rating.reduce(function (sum, value) {
      // console.log(sum, value )
      return sum + value;
  }, 0) / creem.rating.length;

// console.log(average);

    return (
      <div  key={index}>
        {/* <img src={hero.images.sm} alt="small-profile-picture" /> */}
        <div id='page-container'>
        <div id='ic-image-container'>
          <img src={creem.img} id='ic-photo'/>
          <div>
            <img src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617894/Frozzy%20Project/Favorite_Icon-01-01_wqwwih.png" className='fav-icon'/>
          </div>
        </div>
        <article id='ic-name'>
          <h2>{creem.name}</h2>
        </article>
        <div id='ic-stars-container'>
          <div id='ic-stars'>
          <h3 id='ic-description-heading'>Users Score: {Math.floor(average)}</h3>
          <h3>Submit your score</h3>
            <img onClick={() => props.selectRating(1, creem._id)} src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617727/Frozzy%20Project/Star_Icon-01-01_mzyxnw.png'/>
            <img onClick={() => props.selectRating(2, creem._id)}  src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617727/Frozzy%20Project/Star_Icon-01-01_mzyxnw.png'/>
            <img  onClick={() => props.selectRating(3, creem._id)}  src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617727/Frozzy%20Project/Star_Icon-01-01_mzyxnw.png'/>
            <img  onClick={() => props.selectRating(4, creem._id)} src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617727/Frozzy%20Project/Star_Icon-01-01_mzyxnw.png'/>
            <img  onClick={() => props.selectRating(5, creem._id)} src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617727/Frozzy%20Project/Star_Icon-01-01_mzyxnw.png'/>
           
            <div>
              <h1 id='ic-price'>${creem.cost}</h1>
            </div>
          </div>
          <article id= 'ic-description-container'>
            <h3 id='ic-description-heading'>Description</h3>
            <p id='ic-description-copy'>{creem.description}</p>
          </article>
          <section id='ic-customize-container'>
            <h3 id='ic-customize-heading'>Customize your Order</h3>
            <div id='ic-customize-dropdown-container'>
              <select className='ic-customize-dropdown'>
                <option value='main'>- Select the size of Tub - </option>
                <option value='one'>Small Tub</option>
                <option value='two'>Medium Tub</option>
                <option value='three'>Large Tub</option>
              </select>
            </div>
            <div id='ic-customize-dropdown-container'>
              <select className='ic-customize-dropdown'>
                <option value='main'>Select the Ingredients</option>
                <option value='one'>Peanuts</option>
                <option value='two'>Sprinkles</option>
                <option value='three'>Pecans</option>
                <option value='four'>Banana</option>
                <option value='four'>Chocolate Chunks</option>
                <option value='four'>Malt Pieces</option>
              </select>
            </div>
          </section>
          <button onClick={() => props.selectCart(creem, index)} >Maybe</button>
        </div>
      </div>
        </div>
      // <div  key={index}>
      //   {/* <img src={hero.images.sm} alt="small-profile-picture" /> */}
      //   <div className="small-container">
      //     <img src={creem.img} />
      //     <h2>{creem.name}</h2>
      //     <h2>{creem.story}</h2>
      //     <h2>{creem.description}</h2>
      //     <h2>{creem.cost}</h2>
      //     <h2>Rating: {Math.ceil(average)}</h2>
      //   </div>
      // </div>
    );
  });
  return (
   
   <div>{creem} </div>
  )
};

export default Creem;