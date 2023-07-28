import React from 'react'

const Die = ({ id, value, held, holdDice }) => {
  return (
    <div className={`die ${held ? "held" : ""}` } onClick={holdDice}>
      {value}
    </div>
  )
}

export default Die
