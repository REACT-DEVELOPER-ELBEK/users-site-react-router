import React from 'react'
import notFound from '../assets/not-found.webp'
import './404.scss'

const Error404 = () => {
  return (
    <div className='error404'>
      <img src={notFound} alt="" />
    </div>
  )
}

export default Error404