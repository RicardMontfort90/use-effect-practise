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

  // Third iteration

  return (
    <div>
      <p>Counter: <span className={dynamicClass}>{count}</span></p>
      <button onClick={handleIncrease}>+ Increase</button>
      <button onClick={handleDecrease}>- Decrease</button>
    </div>
  )
}
