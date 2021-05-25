// import { props } from 'bluebird'
import React from 'react'
import {useState} from "react"

const Checkout = (props) => {

    const [totalCost, setTotalCost] = useState([null])

    const { cart, removeFromCart } = props
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let cost
    let value1 = 0
    let value = [] 
    
    if (cart !== [])
    {for (cost in cart) {
        value1 = cart[cost].cost
        value.push(cart[cost].cost)
        console.log(value)   
    }
    setTotalCost(value.reduce(reducer))
}
    // console.log(value.reduce(reducer))

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
   {/* {if (value.length > 0) {
{value.reduce(reducer)} 
   } else {console.log("empty")}} */}
    </div>
)

const loading = () => <h1>Add your favorite flavors</h1>

return cart.length > 0 ? loaded() : loading()


}

export default Checkout


