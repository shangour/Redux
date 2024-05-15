import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './store/reducer/CounterSlice';
import IndexRouter from './router/IndexRouter';


const App = () => {
  const dispatch = useDispatch();
  const handleClick = () => {

    dispatch(add());
  }
  const data = useSelector(state => state.counterReducer.value);
  console.log(data)
  return (
    
    <div>
      <IndexRouter/>
      <button onClick={handleClick}>hii</button>
    </div>
  )
}

export default App
