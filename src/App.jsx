import { React } from 'react'
import './Normalize.scss'
import {Route, Routes} from 'react-router-dom'
import Users from './routes/users/Users'
import Todos from './routes/todos/Todos'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Users />}/>
        <Route path='/todos' element={<Todos/>}/>
      </Routes>
    </>
  )
}

export default App
