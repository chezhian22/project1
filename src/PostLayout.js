import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const PostLayout = () => {
  return (
    <>
        <ul>
        <Link to='/postpage/1'>Post1</Link>
        <Link to='/postpage/2'>Post2</Link>
        <Link to='/postpage/hi man'>Post3</Link>
        </ul>
        <Link to='/postpage/newpost'>NewPost</Link>
        <Outlet/>
    </>
  )
}

export default PostLayout