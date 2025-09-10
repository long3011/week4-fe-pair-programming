import React from 'react'

function Registration() {
  return (
    <div className='registration'>
        <input type="text" placeholder='Username'/>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <button>Register</button>
    </div>
  )
}

export default Registration