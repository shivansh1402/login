import React , { useState} from 'react'
import classes from './Form.module.css'

const Form = props => {

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const [isLoggedin , setIsLogedIn] = useState(false)

    const LoginDetails = [

        {name: 'shivansh shrivastava',
         username: 'shivansh18',
         password: 'shivansh18'},

         {name: 'honey shrivastava',
         username: 'honey18',
         password: 'shivansh18'},

         {name: 'tanu shrivastava',
         username: 'tanu18',
         password: 'shivansh18'},

         {name: 'rajesh shrivastava',
         username: 'rajesh18',
         password: 'shivansh18'},
           
    ]

    const userHandler = e => {

        setUsername(e.target.value)
    }

    const passwordHandler = e => {

        setPassword(e.target.value)
    }

    const submitHandler = e => {

        e.preventDefault()

        const user = LoginDetails.filter( item => {

            if( username === item.username){
                return item
            } else { return;}
        })

        if( user.password = password) {

            setIsLogedIn(true)
        }

        localStorage.setItem( "login" , 1)
    }

    return (
        <div className={classes.wrapper}>

            <h2> Please enter login credentials</h2>

            <form onSubmit={submitHandler}>
                <input onChange={userHandler} type='text' className={classes.input} placeholder='username' value={username} ></input>
                <input onChange={passwordHandler} type='password' className={classes.input} placeholder='password' value={password} ></input>
                <button className={classes.button}> Login </button>
            </form>

        </div>
    )
}

export default Form