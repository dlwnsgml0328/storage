import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from '../../reducers/counter/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const cover = useCallback(() => {
    console.log(typeof value);
    dispatch(incrementByAmount(Number(value)));
    setValue(0);
  }, [dispatch, value]);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <span>{count}</span>
      </div>

      <div>
        <button
          onClick={() => {
            throw new Error('Error in counter');
          }}
        >
          make Error
        </button>
      </div>

      <div>
        <br />

        <input type='number' value={value} onChange={(e) => setValue(e.target.value)} />
        <button type='button' onClick={cover}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Counter;
