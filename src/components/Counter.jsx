import React, { useState, useEffect } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0);
  const [dynamicClass, setDynamicClass] = useState('text');

  // First iteration
const handleIncrease = () => {
  setCount(prev => prev + 1)
  
}

const handleDecrease = () => {
  setCount(prev => prev -1)
}
  // Second and Fourth iteration

  useEffect(() => {
    setCount(Math.floor(Math.random()*10));

    return () => {
      setCount(0);
      setDynamicClass('text');
      console.log('All clean here. Count:', count, 'Class:', dynamicClass);
    }
  }, []);

  // Third iteration

  useEffect(() => {
    if (count > 5) {
      setDynamicClass('green');
    } else if (count > 0) {
      setDynamicClass('orange');
    } else {
      setDynamicClass('red')
    }
  }, [count])


  return (
    <div>
      <p>Counter: <span className={dynamicClass}>{count}</span></p>
      <button onClick={handleIncrease}>+ Increase</button>
      <button onClick={handleDecrease}>- Decrease</button>
    </div>
  )
}
