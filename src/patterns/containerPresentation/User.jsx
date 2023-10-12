import React from 'react'

export default function User({id,name,age}) {
  return (
    <div>
      <h2>User Id {id}</h2>
      <p>name: {name}</p>
      <p>age: {age}</p>
    </div>
  )
}
