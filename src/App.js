import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counter/counterSlice';
import { getCountry } from './redux/features/ccountry/countrySlice';

function App() {
  const dispatch = useDispatch()

  const { counter } = useSelector(state => state.counter)
  const { country } = useSelector(state => state.country)
  console.log(country)

  useEffect(() => {
    dispatch(getCountry())
  })

  return (
    <div className="App">
      <div className='appWraper'>
         <div className='title'>SAYAÇ</div>
         <div className='eksiContainer' onClick={() => { dispatch(increment()) }}>EKSİLT</div>
        <div className='sayıContainer'>{counter}</div>
        <div className='artıContainer' onClick={() => { dispatch(decrement()) }}>ARTTIR</div>
      </div>
    </div>
  );
}

export default App;
