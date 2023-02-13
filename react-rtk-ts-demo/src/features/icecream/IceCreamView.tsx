import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { ordered, restocked } from '../icecream/iceCreamSlice';

export const IcecreamView = () => {
  const [value, setValue] = useState(1);
  const icecream = useAppSelector(state => state.icecream);
  const dispatch = useAppDispatch();
  
  return (
    <div>
        <h2>Number of ice creams - {icecream.numOfIcecreams}</h2>
        <button onClick={() => dispatch(ordered())}>Order ice creams</button>
        <input 
          type="number"
          value={value}
          onChange={(e) => setValue(+(e.target.value))}/>
        <button onClick={() => dispatch(restocked(value))}>Restock ice creams</button>
    </div>
  )
}