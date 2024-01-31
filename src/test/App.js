import { useEffect, useState } from "react";
import Button from "./Button";
import Content from "./Content"
import './index.css'

function App() {
  
  const [object, setObject] = useState('')
  const [post, setPost] = useState('')

  const API_URL =`https://jsonplaceholder.typicode.com/${object}`

  const users =() =>{
    setObject("users")
    
  }

  const posts =() =>{
    setObject("posts") 
   
  }

  const contents =() =>{
    setObject("comments")
  }


  useEffect(()=>{
  const fetchItems = async() =>{ 
  const response = await fetch(API_URL)
  console.log(typeof(response))
  const post = await response.json()
  setPost(post)
  }
  fetchItems();

  },[object])

  
  return (
    <div className="App">
      <Button
       users = {users}
       posts = {posts}
       contents = {contents}
      />
      <Content post = {post}/>
    </div>
  );
}

export default App;
