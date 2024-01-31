import React from 'react'
import Feed from './Feed'

const Home = ({posts}) => {
  return (
    <div className='container1'>
      {posts.length ? (<Feed posts={posts}/>):(<p >No posts to display.</p>)}
    </div>
  )
}

export default Home