import React, { useState ,useEffect} from 'react'
import'./Stopwatch.css'

const StopWatch = () => {
    const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const displaySeconds = sec % 60;
    return `${String(minutes).padStart(2, '0')}:${String(displaySeconds).padStart(2, '0')}`;
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch">
        <div className="time">
          {formatTime(seconds)}
        </div>
        <div className="controls">
          <button onClick={toggle} className={isActive ? 'active' : ''}>
            {isActive ? 'Pause' : 'Start'}
          </button>
          <button onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch