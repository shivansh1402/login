import React from 'react'
import classes from './Header.module.css'
import logo from './images.jpg'


const Header = props => {

    return(
        <div className={classes.container} >
            <img src={logo}  width='50px' height='50px' />
            <h1> Login!! </h1>
            {props.isLogedIn && <button> Logout </button>}
        </div>
    )
}

export default Header