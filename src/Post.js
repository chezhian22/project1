import { useParams } from 'react-router-dom'


// const Post = () => {
//     const {id} = useParams()
//   return (
//     <div>Post {id}</div>
//   )
// }

// export default Post

const Post = ({post} ) => {
  
  const stringPost = JSON.stringify({post})
return (
  <article className='content1'>
    <h1>{post.id}</h1>
    <h2>{post.name}</h2>
     <p>{
     (post.description).length <= 25 ? post.description : `${(post.description).slice(0,25)}...`}</p>
  </article>
)
  
 
}

export default Post

