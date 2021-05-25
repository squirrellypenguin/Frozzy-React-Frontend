import { props } from 'bluebird'
import React from 'react'

const Checkout = (props) => {

    const { cart, removeFromCart } = props
    let foo = for (cost of cart) {
        console.log(`${cart[cost]}`)
    }

const loaded = () => (

    <div style={{textAlign: "center"}}>
        {cart.map((flavor, index) => (
            <article key={flavor.id}>
                <h1>{flavor.name}</h1>
                <img src={flavor.img}/>
                <h3>{flavor.cost}</h3> 
                <button onClick={() =>{
                    removeFromCart(index)
                }}>Remove</button>   
            </article>
        ))}

    </div>
)

const loading = () => <h1>Add your favorite flavors</h1>

return cart.length > 0 ? loaded() : loading()
  

}

export default Checkout


