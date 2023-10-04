import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import './Posts.scss'

const Posts = () => {
    const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts?userId=${params.postId}`)
    .then((response) => setPosts(response.data))
    .catch((error)=> console.log(error))
  }, []);
  const params = useParams()
  console.log(params);
  return (
    <>
    <div className="posts">
        <div className="container">
          <div className="posts__wrapper">
            <h2>Posts</h2>
            <div className="posts__cards">
              {
              posts.map((item, index) => (
                <div className="posts__item" key={index}>
                  <h1>{item.title}</h1>
                  <p>{item.body}</p>
                  <Link to={`/comments/${item.id}`}><button>Comments</button></Link>
                </div>
              ))
              }
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Posts