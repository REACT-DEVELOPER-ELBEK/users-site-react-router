import { React, useEffect, useState } from "react";
import axios from "axios";
import "./Todos.scss";
import { useParams } from "react-router-dom";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/todos?userId=${params.userId}`)
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  }, []);
  const params = useParams()
  console.log(params);
  return (
    <>
      <div className="todos">
        <div className="container">
          <div className="todos__wrapper">
            <h2>Todos</h2>
            <div className="todos__cards">
              {
              todos.map((item, index) => (
                <div className="todos__item" key={index}>
                  <h1>{item.title}</h1>
                  <p>{item.completed ? "✅" : "❌"}</p>
                </div>
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
