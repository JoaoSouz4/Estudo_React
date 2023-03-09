import { useEffect, useState, useRef } from 'react';

const useMyHook = (cb, delay = 1000) => {
  const saveCb = useRef();

  useEffect(()=>{
    saveCb.current = cb;
  }, [cb]);

    useEffect(()=>{
    const interval = setInterval(()=>{
      saveCb.current();
    }, delay);
    return () => clearInterval(interval)
  }, [delay]);
};

function App() {

  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);
  useMyHook(()=> setCounter( c => c+1 ), delay)
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <h3>Current Delay: {delay}</h3>
      <button onClick={()=> setDelay( delay => delay + incrementor)}>+ {incrementor} Delay </button>
      <button onClick={()=> setDelay( delay => delay - incrementor)}>- {incrementor} Delay </button>

      <input type = "number" value={incrementor} onChange = {(e)=>setIncrementor(Number(e.target.value))}></input>
    </div>
  );
}

export default App;
