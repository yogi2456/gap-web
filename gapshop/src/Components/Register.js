import React from 'react'

const Register = () => {
  return (
    <>
    <div className='register'>
        <div className='register1'>
            <div className='register2'>
            <h2>Create a Google Account</h2>
            <p>Enter your name</p>
            <form>
            <input className='register3' placeholder='First name'/>
            <input className='register4' placeholder='Last name (Optional)'/>
            <input className='register5' placeholder='Email or phone'/>
            <input className='register6' placeholder='Password'/>
            <button onClick={ () => router(`/login`)}>Create</button>
            </form>
            </div>
        </div>
    </div>    
    </>
  )
}

export default Register
