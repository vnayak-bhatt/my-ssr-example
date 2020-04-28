import React from 'react';

export default () => {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        console.log('increment', count);
        setCount(count + 1);
    };

    const decrement = () => {
        console.log('increment', count);
        setCount(count - 1);
    };

    return <><p>{count}</p>
        <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button></>
};