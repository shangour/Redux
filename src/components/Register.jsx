import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addStudent } from '../store/reducer/CounterSlice';

const Register = () => {

    const dispatch = useDispatch();

    const [data,setData] = useState({
        name:'',
        email:'',
        contact:'',
        id:'',
    });

    useEffect(()=> {
        console.log(data);
    },[data]);

    const handleSubmitClick = () =>{
        const nan = nanoid();
        data.id = nan;
        dispatch(addStudent(data));
        setData({ name:'',
        email:'',
        contact:'',
        id:'',});
        alert('data submitted sucsessfully');
    }

  return (
    <div>
      <h1>Student form</h1>
            <input type="text" placeholder='name' value={data.name} onChange={(e) => setData((prev) => ({...prev,name:e.target.value}))} />
            <input type="email" placeholder='email' value={data.email} onChange={(e) => setData((prev) => ({...prev,email:e.target.value}))} />
            <input type="number" placeholder='contact' value={data.contact} onChange={(e) => setData((prev) => ({...prev,contact:e.target.value}))} /><br />
            <button onClick={handleSubmitClick}>Submit</button>
    </div>
  )
}

export default Register
