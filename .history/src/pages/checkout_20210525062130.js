import { props } from 'bluebird'
import React from 'react'

const Checkout = (props) => {

    const { cart, removeFromCart } = props
    let cost
    let value = 0 
    for (cost in cart) {
        value = cart[cost].cost
        value =+ value
        console.log(value)
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


