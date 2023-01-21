import React from 'react'
import image from "./img/obi-wan.png"


const Error = () => {
  return (
    <div className='error'>
        <h3>These aren't the droids you are looking for</h3>
        <img className="obi-wan" src={image} alt="obi-wan" />
    </div>
  )
}

export default Error