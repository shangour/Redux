import React from 'react'
import { useSelector } from 'react-redux'

const Show = () => {
    const x= useSelector(state => state.counterReducer.studentData);
    console.log(x);
  return (
    <div>
        <table border={2}>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
            </tr>
            {x.map((e) => {
                return (
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.contact}</td>
                    </tr>
                )
            })}
        </table>
    </div>
  )
}

export default Show
