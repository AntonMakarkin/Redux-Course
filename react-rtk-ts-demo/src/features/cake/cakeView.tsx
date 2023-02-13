import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { ordered, restocked } from './cakeSlice';

export const CakeView = () => {
  const cake = useAppSelector(state => state.cake);
  const dispatch = useAppDispatch();

  return (
    <div>
        <h2>Number of cakes - {cake.numOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order cake</button>
        <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
    </div>
  )
}
