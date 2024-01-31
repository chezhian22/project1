import React from 'react'

const Button = (props) => {
  return (
    <div>
        <div className='btnContainer'>
        <button className='btn' onClick={props.users}>Users</button>
        <button className='btn' onClick={props.posts}>Posts</button>
        <button className='btn' onClick={props.contents}>Contents</button>
        </div>
    </div>
  )
}

export default Button