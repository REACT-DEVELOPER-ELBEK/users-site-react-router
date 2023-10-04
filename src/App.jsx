import { React } from 'react'
import {Route, Routes} from 'react-router-dom'
import Users from './routes/users/Users'
import Todos from './routes/todos/Todos'
import Posts from './routes/posts/Posts'
import Comments from './routes/comments/Comments'
import Gallery from './routes/gallery/Gallery'
import './Normalize.scss'
import Error404 from './pages/Error404'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Users />}/>
        <Route path='/todos/:userId' element={<Todos/>}/>
        <Route path='/posts/:postId' element={<Posts/>} />
        <Route path='/comments/:commentID' element={<Comments/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/*' element={<Error404/>} />
      </Routes>
    </>
  )
}

export default App
