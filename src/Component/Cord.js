import React, { useState } from 'react'

function Cord() {
    const [city, setCity]= useState("null");
    const onHandle =()=>{
        console.log(city);
        
    }
  return (
    <div>
      <input type='text' name='cityA' onChange={(e)=>setCity(e.target.value)} placeholder='city'/>
      <button type='submit' onClick={onHandle}>submit</button>
    </div>
  )
}

export default Cord
