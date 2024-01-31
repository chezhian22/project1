import React, { useState } from 'react'
import Header from './Header'
import Nav from './Nav'
import PostPage from './PostPage'
import Missing from './Missing'
import Footer from './Footer'
import About from './About'
import Home from './Home'
import {Routes, Route} from 'react-router-dom'

const App1 = () => {

const [name, setName] = useState('')

const [description,setDescription] = useState('')

 const [search, setSearch] = useState('')

 const handleSearch =()=>{
  console.log(search)
  setSearch('')
 }

 const [posts, setPosts] = useState([
  {
    id:1,
    name:"semmoa",
    description:"Hi mann.."
  },
  {
    id:2,
    name:"aswin",
    description:"Hi mann.."
  },
  {
    id:3,
    name:"akash",
    description:"Hi mann.."
  },
  {
    id:4,
    name:"raahath",
    description:"Hi mann how are you man hiiii"
  }
])
  return (
    <div>
          <Header title="My react"/>
          <Nav
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
          />
          <Routes>
            <Route path="/" element={<Home posts={posts.filter(item => (item.name.toLowerCase()).includes(search.toLowerCase()))}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/post" element={<PostPage 
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription} />}/>
            {/* <Route path="/postpage" element={<PostLayout/>}>
              <Route index element={<PostPage/>}/>
              <Route path=":id" element={<Post/>}/>
              <Route path="newpost" element={<NewPost/>}/>
            </Route> */}
            <Route path='*' element={<Missing/>}/>

          </Routes>
    </div>
  )
}

export default App1