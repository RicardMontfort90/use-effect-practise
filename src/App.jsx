import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';

function App() {

  const [showCounter, setShowCounter] = useState(true)

// Iteration 4 

  const handleCounter = () => {
    setShowCounter(prev => !prev)
  }


  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={handleCounter}>{showCounter ? 'Hide' : 'Counter'}</button> 
      {showCounter && <Counter />}
    </div>
  );
}

export default App;