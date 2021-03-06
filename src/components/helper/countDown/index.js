import React,{useState,useEffect} from "react";
import Button from "../../helper/button"
import "./style.css"

/*const CountDown = () => {
  const [countdownDate, setCountdownDate] = useState(new Date('2022-03-14T00:44:00').getTime())*/

const CountDown = ({date}) => {
  const [countdownDate, setCountdownDate] = useState(new Date(date).getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <>
    {/* { 0 < state.days && 0 < state.hours && 0 < state.minutes && 0 < state.seconds ?   */}
      <div className="countDownItIs">
        <h4 className="title">PRESALE END IN</h4>
        <div className='countdown-wrapper'>
          <div className='time-section'>
            <div className='time'>{state.days || '0'}</div>
            <small className="time-text">Days</small>
          </div>
          <div className='time-section'>
            <div className='time'>{state.hours || '00'}</div>
            <small className="time-text">Hours</small>
          </div>
          <div className='time-section'>
            <div className='time'>{state.minutes || '00'}</div>
            <small className="time-text">Minutes</small>
          </div>
          <div className='time-section'>
            <div className='time'>{state.seconds || '00'}</div>
            <small className="time-text">Seconds</small>
          </div>
        </div>
          <a href="https://www.pinksale.finance/#/launchpad/0x51bB7a53F354a5f0a8f935ab70E867e595c60852?chain=BSC" classes={"theme-btn"} target="_blank" rel="noopener noreferrer">
            <Button classes={"theme-btn"} text="Buy Presale" />
          </a>
      </div>
    {/* : ""}  */}
    </>
  );
};

export default CountDown;
