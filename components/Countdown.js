import React, { useState, useEffect } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from '../styles/Countdown.module.css'
import { addZero } from "../utils/addZero";


const getRemainingTime = () => {
  const targetDate = new Date("2023-04-14T12:00:00Z");
  const now = new Date();
  return (targetDate.getTime() - now.getTime()) / 1000;
};


const Countdown = () => {
  const [remainingTime, setRemainingTime] = useState("00");

  //useEffect to update DOM every second
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const totalSeconds = Math.max(remainingTime, 0);
  
  const days = addZero(Math.floor(totalSeconds / (3600 * 24)));
  const hours = addZero(Math.floor((totalSeconds % (3600 * 24)) / 3600));
  const minutes = addZero(Math.floor((totalSeconds % 3600) / 60));
  const seconds = addZero(Math.floor(totalSeconds % 60));
  let percentage = 0
  if (remainingTime > 0) {
     percentage = Math.floor((seconds / 60) * 100);
  }
  else {
    percentage = 100
 }

  return (
    <div className={styles.countdown}>
      
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={4}
        styles={{
          path: {
            stroke: "#10131e",
            strokeLinecap: "round",
          },
          text: {
            fontFamily: "Open Sans",
            fontSize: "16px",
          },
        }}
      >
        <p className={styles.launchdate}>We are launching in: </p>
        <p className={styles.launchdate}>{`${hours} : ${minutes} : ${seconds}`}</p>
      </CircularProgressbarWithChildren>
    </div>
  );
};



export default Countdown;
