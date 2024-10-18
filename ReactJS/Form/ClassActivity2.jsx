import React, { useState, useEffect } from 'react';

const ClassActivity2 = ({ watchedProp }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Component re-rendered due to watchedProp or counter change');
  }, [watchedProp, counter]);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Functional Component Lifecycle (Hooks) Task</h2>
      <p>Watched Prop: {watchedProp}</p>
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increment Counter</button>
    </div>
  );
};

export default ClassActivity2;