import React, { useEffect, useState } from "react";
import axios from 'axios';
import './Users.scss'
import {NavLink} from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then((response) => setUsers(response.data))
    .catch((error)=> console.log(error))
  }, []);
  return (
    <>
    <div className="users">
      <div className="container">
        <div className="users__wrapper">
            <h2>Users</h2>
            <div className="users__cards">
                    {
                        users.map((item, index)=>
                        <div className="users__item" key={index}>
                            <h1>{item.name}</h1>
                            <h3>{item.username}</h3>
                            <p>Email: {item.email}</p>
                            <p>Website: {item.website}</p>
                            <p>Address: {item.address.street}</p>
                            <p>Phone: {item.phone}</p>
                            <div className="users__btns">
                              <NavLink to='/todos'>Todos</NavLink>
                              <NavLink to='/posts'>Posts</NavLink>
                              <NavLink to='/gallery'>Gallery</NavLink>
                            </div>
                          </div>
                        )
                    }
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Users;
