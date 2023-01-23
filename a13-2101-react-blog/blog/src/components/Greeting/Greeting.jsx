import React from 'react'

const Greeting = (props) =>{
   return (
  <div>
      <p>Hello {props.name} {props.surname} {props.age ? (
        <div>
          {props.age}
        </div>
      ) : ""}</p>
    </div>
  )
}
export default Greeting;
