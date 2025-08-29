import React from 'react'

function Card({username}) {
  console.log(username);
  return (
    <div>
      <h1 >{username}</h1>
      <h2>{username}</h2>
    </div>
  )
}

export default Card
