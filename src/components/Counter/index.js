import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/actions/counterActions';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count); // Получение состояния через useSelector

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>✚</button>
      <button onClick={() => dispatch(decrement())}>−</button>
    </div>
  );
};

export default Counter;