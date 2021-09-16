import { useState, useRef } from 'react';

export const CountUp = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const handleOnClick = () => setCount(count + 1);
  const handleOnClick2 = () => countRef.current++;

  console.log('再描写');

  return (
    <div style={{ margin: '2em' }}>
      <div>{count}</div>
      <button onClick={handleOnClick}>Countアップ</button>
      <div>{countRef.current}</div>
      <button onClick={handleOnClick2}>Count2アップ</button>
    </div>
  );
};
