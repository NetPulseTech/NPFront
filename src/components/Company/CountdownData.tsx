import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";

const CountdownData = () => {
  const Completionist = () => <span>{"You are good to go!"}</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div>
          <ul>
            <li>
              <span id="days" className="time digits">{days}</span>
              <span className="title">{"days"}</span>
            </li>
            <li>
              <span>{hours}</span>
              <span className="title">{"Hours"}</span>
            </li>
            <li>
              <span>{minutes}</span>
              <span className="title">{"Minutes"}</span>
            </li>
            <li>
              <span>{seconds}</span>
              <span className="title">{"Seconds"}</span>
            </li>
          </ul>
        </div>
      );
    }
  };

  const [countdownDate, setCountdownDate] = useState<number | null>(null);

  useEffect(() => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    const countdown = new Date(year, month, day + 10).getTime();
    setCountdownDate(countdown);
  }, []);

  if (countdownDate === null) {
    return null;
  }

  return <Countdown date={countdownDate} renderer={renderer} />;
};

export default CountdownData;
