import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

const Register = () => {

  const router = useNavigate();
  return (
    <>
    <div className='register'>
        <div className='register1'>
            <div className='register2'>
            <h2>Create a Google Account</h2>
            <p>Enter your name</p>
            <form>
            <input className='register3' placeholder='First name'/> <br/>
            <input className='register4' placeholder='Last name (Optional)'/> <br/>
            <input className='register5' placeholder='Email or phone'/> <br/>
            <input className='register6' placeholder='Password'/> <br/>
            <button className='register10' onClick={ () => router(`/login`)}>Create</button>
            </form>
            </div>
        </div>

        <div className='register7'>
            <div className='register8'>
                <p>English (United States)</p>
                <p><i class="fa-solid fa-caret-down"></i></p>
            </div>
            <div className='register9'>
                <p>Help</p>
                <p>Privacy</p>
                <p>Terms</p>
            </div>
        </div>
    </div>    
    </>
  )
}

export default Register
