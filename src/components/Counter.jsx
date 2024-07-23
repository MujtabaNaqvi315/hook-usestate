function Counter ({ count, increment, decrement }) {
    return (
        <div className="container">
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
} 

export default Counter;