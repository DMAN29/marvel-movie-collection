import React from 'react'

const Error = (props) => {
  return <>
    <div className='error'>
        <img src="./Image/404.png" alt="Error"  className='error'/>
        <button onClick={()=>props.onClick()} className='btn'>Go Back</button>
    </div>
  </>
}

export default Error