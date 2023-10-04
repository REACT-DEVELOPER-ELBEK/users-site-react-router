import { React, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './Comments.scss'

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
      axios(`https://jsonplaceholder.typicode.com/comments?postId=${params.commentID}`)
      .then((response) => setComments(response.data))
      .catch((error)=> console.log(error))
    }, []);
    const params = useParams()
    console.log(params);
  return (
    <>
    <div className="comments">
        <div className="container">
          <div className="comments__wrapper">
            <h2>Comments</h2>
            <div className="comments__cards">
              {
              comments.map((item, index) => (
                <div className="comments__item" key={index}>
                  <h1>{item.email}</h1>
                  <h3>{item.name}</h3>
                  <p>{item.body}</p>
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

export default Comments