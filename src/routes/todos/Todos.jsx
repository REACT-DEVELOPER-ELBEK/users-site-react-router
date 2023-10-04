import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import './Todos.scss'
    const Todos = () => {
        const [users, setUsers] = useState([]);
        useEffect(() => {
          axios("https://jsonplaceholder.typicode.com/todos")
          .then((response) => setUsers(response.data))
          .catch((error)=> console.log(error))
        }, []);
  return (
    <>
    <div className="todos">
      <div className="container">
        <div className="todos__wrapper">
            <h2>Todos</h2>
            <div className="todos__cards">
                    {
                        users.map((item, index)=>
                        <div className="todos__item" key={index}>
                            <h1>{item.title}</h1>
                            <p>{item.completed ? '✅' : '❌'}</p>
                          </div>
                        )
                    }
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Todos