import './App.css';
import { CountUp } from './CountUp';

import React, { useState, useRef, useCallback, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const handleOnChange = (e) => setName(e.target.value);

  const ref = React.createRef();

  const scrollBottom = useCallback(() => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }, [ref]);

  useEffect(() => {
    scrollBottom();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>useRefで遊ぶ</h1>
      <button>ページ最下層に</button>
      {[...Array(100)].map((_, a) => {
        return (
          <>
            <div style={{ padding: '30px', border: '1px solid black' }}>
              div タグ　{a}
            </div>
          </>
        );
      })}
      <div ref={ref}>ここまで</div>
    </>
  );
}

export default App;
