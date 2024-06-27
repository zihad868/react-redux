import { useSelector, useDispatch } from 'react-redux';
import './Counter.css'

const CounterComponent = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div class='counter'>
      <button class='btn' onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <span id='counter'>{count}</span>
      <button class='btn' onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
};

export default CounterComponent;
