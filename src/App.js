import './App.css';
import { useState } from 'react'; 
import Counter from './components/Counter';
import Timer from './components/Timer';

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  
  function increment () {
    setCount(count + 1);
  }

  function decrement () {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  function currentTime () {
    setTime(new Date().toLocaleTimeString());
    setInterval(currentTime, 1000);
  }

  

  return (
    <>
      <Counter 
        count={count}
        increment={increment}
        decrement={decrement}
      />

      <Timer 
        time={time}
        currentTime={currentTime}
      />

    </>
  );
}

export default App;
