import React from 'react'
import { Link } from 'react-router-dom'

const PostPage = ({name, setName, description, setDescription}) => {
  return (
    <main className='formContainer'>
        <h1>Create Your Post</h1>
        <form className='postForm'>
          <label>Name</label>
          <input
          type='text' 
          placeholder='enter name'
          value={name}
          onChange={(e) => setName(e.target.value)}/>
          <label>Description</label>
          <input 
          type='text'
          placeholder='enter description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}/>
        </form>
    </main>
  )
}

export default PostPage