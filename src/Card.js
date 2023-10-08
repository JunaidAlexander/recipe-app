import React from 'react'
import './Card.css'

 const Card = () => {
  return (
    <div className='card'>
      <div className="myCard">
    <div className="innerCard">
        <div className="frontSide">
            <p className="title-front">FRONT SIDE</p>
            <p className="title-back">Hover Me</p>
        </div>
        <div className="backSide">
            <p className="title">BACK SIDE</p>
            <p>Leave Me</p>
        </div>
    </div>
    </div></div>
  )
}

export default Card