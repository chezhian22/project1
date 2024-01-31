import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FaSistrix } from "react-icons/fa";

const Nav = ({search, setSearch, handleSearch}) => {

  const inputRef =useRef()
  return (
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e) =>{
        e.preventDefault()
        handleSearch()
      }}>
        <label htmlFor='Search'>Search Posts</label>
        <input
        id="search"
        type="text"
        placeholder='Enter text here'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button className='searchIcon' 
        type ="submit"
        aria-label = "search"
        // onClick={()=>inputRef.current.focus()}
        >
          <FaSistrix/>
        </button>
      </form>
      
      <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/post">Post</Link></li>
         <li><Link to="/about">About</Link></li>
      </ul>
        
    </nav>
  )

}

export default Nav