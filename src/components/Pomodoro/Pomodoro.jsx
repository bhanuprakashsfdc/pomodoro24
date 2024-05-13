import React, { useState, useEffect, useRef } from 'react';
import '../Pomodoro/Pomodoro.css';
import timeticker from '../../../public/assets/audio/alarm.wav'
function Pomodoro(){
    const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes
    const [isActive, setIsActive] = useState(false);
    const [timerType, setTimerType] = useState('focus');
    const bodyRef = useRef(null); // Create a ref for the body element
    
    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.style.backgroundColor = getBackgroundColor(timerType);
          }
      }, [timerType]);
    
    useEffect(() => {
        // Sound effects
        const timerTickSound = new Audio('../../assets/audio/timer.wav');
        const alarmSound = new Audio('../../assets/audio/alarm.wav');
        let interval = null;
    
        if (isActive && timeLeft > 0) {
          interval = setInterval(() => {
            timerTickSound.play();
            setTimeLeft(timeLeft => timeLeft - 1);
          }, 1000);
        } else if (timeLeft === 0) {
          alarmSound.play();
          setIsActive(false);
        }
    
        return () => {
            clearInterval(interval);
            timerTickSound.pause();  // Pause the ticking sound when the timer is not active
          };
        }, [isActive, timeLeft, timerTickSound, alarmSound]);
    
     
        function resetTimer(type) {
            setIsActive(false); // Stop the current timer if running
            setTimerType(type); // Update the timer type
        
            switch (type) {
              case 'focus':
                setTimeLeft(25 * 60); // 25 minutes
                break;
              case 'shortbreak':
                setTimeLeft(5 * 60); // 5 minutes
                break;
              case 'longbreak':
                setTimeLeft(15 * 60); // 15 minutes
                break;
              default:
                setTimeLeft(25 * 60); // Default to 25 minutes
            }
          }

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  function getBackgroundColor(type) {
    switch (type) {
      case 'focus':
        return '#BB4949';  // Red
      case 'shortbreak':
        return '#39848A';  // Blue
      case 'longbreak':
        return '#397097';  // Dark Blue
      default:
        return '#BB4949';  // Default Red
    }
  }

    
  return (
    <div className="pomo-body body-content">
        <div className="pomo-container" ref={bodyRef}>
            <div className="section-container">
            <button className={`pomo-btn ${timerType === 'focus' ? 'btn-focus' : ''}`}
                    onClick={() => resetTimer('focus')}>
            Pomodoro
            </button>
            <button className={`pomo-btn ${timerType === 'shortbreak' ? 'btn-focus' : ''}`}
                    onClick={() => resetTimer('shortbreak')}>
            Short Break
            </button>
            <button className={`pomo-btn ${timerType === 'longbreak' ? 'btn-focus' : ''}`}
                    onClick={() => resetTimer('longbreak')}>
            Long Break
            </button>
        </div>
        <div className="time-btn-container">
            <span id="time">{formatTime()}</span>
            <div className="btn-container">
            <button onClick={() => setIsActive(!isActive)}>
                {isActive ? 'Pause' : 'Start'}
            </button>
            <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    </div>
  </div>
);
}

export default Pomodoro