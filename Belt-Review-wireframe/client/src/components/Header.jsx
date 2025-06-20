import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { MyContext } from '../storContext'

const Header = () => {
   const {title} = useContext(MyContext)
  return (
    <div className='container mt-2'>

       <div className='d-flex justify-content-between align-items-center'>
        <h1 className='fs-1 text-start'>{title}</h1>
        <div className="d-flex justify-content-center align-items-center gap-4" >
            <Link to="/" className='btn btn-info' > Home </Link>
            <Link to="/notes/create" className='btn btn-info'> Creat </Link>
        </div>

       </div>
        
    
    </div>
  )
}

export default Header