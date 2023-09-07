import React, { useState } from 'react'

const Nav = (props) => {
  const[input,setInput] = useState("");

  return <>
  <div className="heading">
    <h1> Marval's  Collection </h1>
    <div className='search-box'>
    <input className='search' type="text" placeholder='Search' 
      value={input}
      onChange={e=>{setInput(e.target.value)}}
    />
    <button className='search-btn' onClick={()=> {props.onClick(input)}}>🔍</button>
    </div>
  </div>
  </>
}

export default Nav;