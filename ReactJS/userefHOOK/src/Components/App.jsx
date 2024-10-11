import React, { useCallback, useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);
    const [callback, setCallback] = useState(0);
    const [testState, setTestState] = useState(false);

    // Increment without useCallback
    const incrementWithoutCallback = () => {
        setCount(prevCount => prevCount + 1);
    };

    // Increment with useCallback
    const incrementWithCallback = useCallback(() => {
        setCallback(prevCallbackCount => prevCallbackCount + 1);
    }, []);

    console.log('Component render');

    return (
        <div>
            <h1>Without useCallback: {count}</h1>
            <button onClick={incrementWithoutCallback}>Increment without useCallback</button>

            <h1>With useCallback: {callback}</h1>
            <button onClick={incrementWithCallback}>Increment with useCallback</button>

            <button onClick={() => setTestState(!testState)}>Toggle Test State</button>
        </div>
    );
};

export default App;