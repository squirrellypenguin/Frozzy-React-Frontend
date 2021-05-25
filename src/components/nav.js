import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return(
        <div>
            <Link to="/">
                <div>Main</div>
            </Link>
            <Link to="/shop">
                <div>Shops</div>
            </Link>
            <Link to="/checkout">
                <div>Checkout</div>
            </Link>
            <Link to="/icecream">
                <div>Ice Cream</div>
            </Link>
            <Link to="/user">
                <div>User</div>
            </Link>
        </div>
    )
}

export default Nav