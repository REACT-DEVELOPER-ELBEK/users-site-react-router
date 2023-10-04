import { React, useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import './Gallery.scss'

const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
      axios(`https://jsonplaceholder.typicode.com/albums`)
      .then((response) => setGallery(response.data))
      .catch((error)=> console.log(error))
    }, []);
    const params = useParams()
    console.log(params);
  return (
    <>
    <div className="albums">
        <div className="container">
          <div className="albums__wrapper">
            <h2>Albums</h2>
            <div className="albums__cards">
              {
              gallery.map((item, index) => (
                <div className="albums__item" key={index}>
                  <h1>{item.title}</h1>
                  <Link to='/404'><button>Photos</button></Link>
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

export default Gallery