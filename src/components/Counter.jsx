import React, { useState } from 'react';

 const Counter = function() {
  const [count, setCount] = useState(0);

  function plus() {
    setCount(count + 1);
  }

  function minus() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
};

export default Counter;
