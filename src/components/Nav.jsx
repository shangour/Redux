import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/register" >Register</NavLink>
        <NavLink to="/show" >Show</NavLink>
    </div>
  )
}

export default Nav
