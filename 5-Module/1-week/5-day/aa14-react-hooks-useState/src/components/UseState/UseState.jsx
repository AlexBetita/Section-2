import {useState} from 'react'
import './UseState.css'


const UseState = () => {

  const [theme, setTheme] = useState('light')
  const [count, setCount] = useState(0)
  
  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={()=> setTheme('dark')}>Dark</button>
      <button onClick={()=> setTheme('light')}>Light</button>
      <h2>{count}</h2>
      <button onClick={()=> setCount((prev)=> ++prev)}>
        Increment
      </button>
      <button onClick={()=> setCount((prev)=> --prev)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
