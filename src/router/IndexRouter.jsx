import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Nav from '../components/Nav' 
import Home from '../components/Home'
import Register from '../components/Register'
import Show from '../components/Show'

const IndexRouter = () => {
  return (
    <div>
      <Nav/>
      <Routes>
            <Route path="/"  element={<Home/>}></Route>
            <Route path="/register"  element={<Register/>}></Route>
            <Route path="/show"  element={<Show/>}></Route>
      </Routes>
    </div>
  )
}

export default IndexRouter
