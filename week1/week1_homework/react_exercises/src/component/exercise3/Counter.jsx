import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

function Counter() {
  const [count, setCount] = useState(0);
  const feedBack = count > 10 ? "It's higher than 10!" : 'Keep counting...';

  return (
    <div>
      <h1>{feedBack}</h1>
      <Count count={count} />
      <Button setCount={() => setCount(count + 1)} />
    </div>
  );
}
export default Counter;
