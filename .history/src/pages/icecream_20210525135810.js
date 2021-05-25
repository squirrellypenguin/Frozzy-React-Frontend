import React from "react";
import {useEffect} from "react"
import {useState} from "react"


const Creem = (props) => {
  // let [creems, setCreems] = useState([])
  // // console.log(props)
  // let url = "https://frozzybe.herokuapp.com/creem/"
  // const getCreems = async (url) => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setCreems(data)
  // };
  // useEffect(() => {
  //   getCreems(url);
  // }, []);

let creems = props.creems


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
          <h3 id='ic-description-heading'>Submit your score</h3>
          <fieldset class="rating">
    <input type="radio" id="star5" name="rating" value="5" onClick={() => props.selectRating(1, creem._id)} />
  <label class = "full" for="star5" title="Awesome - 5 stars"></label>
    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
    <input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>
    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>
    <input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>
    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
    <input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>
    <input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>
    <input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
</fieldset>
            {/* <img onClick={() => props.selectRating(1, creem._id)} src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617727/Frozzy%20Project/Star_Icon-01-01_mzyxnw.png'/>
            <img onClick={() => props.selectRating(2, creem._id)}  src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617727/Frozzy%20Project/Star_Icon-01-01_mzyxnw.png'/>
            <img  onClick={() => props.selectRating(3, creem._id)}  src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617727/Frozzy%20Project/Star_Icon-01-01_mzyxnw.png'/>
            <img  onClick={() => props.selectRating(4, creem._id)} src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617727/Frozzy%20Project/Star_Icon-01-01_mzyxnw.png'/>
            <img  onClick={() => props.selectRating(5, creem._id)} src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617727/Frozzy%20Project/Star_Icon-01-01_mzyxnw.png'/>
            */}
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