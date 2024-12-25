// this is the repeat part

import React from 'react'

export default function User(props) {
    const { firstName, secondName} = props.user;
  return (
  
    <div>
       
      <h1> Users List</h1>
      <br></br>
      
      <h1>First Name:{firstName}</h1>
      <h1>Second Name:{secondName}</h1>
      <button>AA</button>

    </div>
  )
}
