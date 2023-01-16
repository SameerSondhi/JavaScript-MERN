import React, {useState} from 'react';



function App() {
  const [time,setTime]= useState(0)
  const [timerOn, setTimerOn] = useState(false)

  React.useEffect(() => {
    let interval = null;
    if(timerOn){
      interval = setInterval(() =>{
        setTime(prevTime => prevTime+10)
      }, 10)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerOn]);
  
  return (
    <div className="App">
      <h2>StopWatch</h2>
      <div id="counter">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div id="buttons">
        {!timerOn && time === 0 && (
          <button className='start' onClick={() => setTimerOn(true)}>Start</button>
        )}
        
        {timerOn && <button className='stop' onClick={() => setTimerOn(false)}>Stop</button>}
        
        {!timerOn && time > 0 && (
          <button className='reset' onClick={() => setTime(0)}>Reset</button>
        )}
        
        {!timerOn && time > 0 && (
          <button className='resume' onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
    </div>
  );
}

export default App;
