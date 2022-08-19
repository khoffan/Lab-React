import React,{useState} from 'react';
import WordCard from './WordCard';
import './App.css';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer';
function App() {
  const [view, setView] = useState("เริ่มนับเวลา")


  return (
    <div className='container'>
      <div className='box'>
        <div className='time-button' onClick={() =>{
          setView("เริ่มนับเวลา")
        }}>
          {view}
        </div>
        
        {
          <WordCard value="hello"/>
        }
        <div className='box-time'>
          {
            <CountdownTimer countdownTimestampMs={1643673600000}/>
          }

        </div>
        
      </div>
    </div>
  );
}
export default App;