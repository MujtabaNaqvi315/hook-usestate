function Timer({  time, currentTime }) {
    return (
        <div className="container">
            <h1>{time}</h1>
            <button className="timer-btn" onClick={currentTime}>Get Time</button>
        </div>
    );
}

export default Timer;