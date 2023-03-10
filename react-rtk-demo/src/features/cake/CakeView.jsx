import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice';

export const CakeView = () => {
  const cake = useSelector(state => state.cake);
  const dispatch = useDispatch();

  return (
    <div>
        <h2>Number of cakes - {cake.numOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order cake</button>
        <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
    </div>
  )
}
