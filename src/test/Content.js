import React from 'react'

const Content = (post) => {

    const post1 = JSON.stringify({post})

  return (
    <div className='conContainer'>
        <ul>
            {post1}
        </ul>
     
    </div>
  )
}

export default Content