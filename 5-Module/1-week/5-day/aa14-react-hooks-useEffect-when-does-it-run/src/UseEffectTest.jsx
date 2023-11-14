import { useEffect, useState } from 'react';

const UseEffectTest = () => {

    const [toggleOne, setToggleOne] = useState(false);

    // useEffect(() => {
    //     console.log('UseEffect1 Ran');
    //   });
    
    useEffect(() => {
        console.log('UseEffect1 Ran');
      }, []);

    return (
      <div>
        <h1>UseEffectTest Component</h1>
        <button onClick={() => setToggleOne(!toggleOne)}>ToggleOne</button>
      </div>
    );
  };
  
  export default UseEffectTest;