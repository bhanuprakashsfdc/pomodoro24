import React, { useEffect, useState } from 'react';
import './Clock.css'
import { WEBSITE_NAME } from '../../constants/constants'; 

const Clock = () => {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
      const tick = () => {
          const now = new Date();
          const hours = String(now.getHours()).padStart(2, '0');
          const minutes = String(now.getMinutes()).padStart(2, '0');
          const seconds = String(now.getSeconds()).padStart(2, '0');
          const milliseconds = String(now.getMilliseconds()).padStart(3, '0');
          const amPm = hours >= 12 ? 'PM' : 'AM';
          setTimeString(`${hours}:${minutes}:${seconds} ${amPm}`);
          /* To display info in Title Tag */
          const clockdisplay = `${hours}:${minutes}:${seconds} ${amPm}`;
          document.title = "Time is " + clockdisplay +" - "+ WEBSITE_NAME;
      };

      const timerID = setInterval(tick, 50); // Update every 50ms for smooth updating
      return () => clearInterval(timerID); // Cleanup the interval on component unmount
  }, []);

  return (
      <div className="clock-ui">
          <div className="clock-display">
              <div className="clock">{timeString}</div>
          </div>
      </div>
  );
};

export default Clock
