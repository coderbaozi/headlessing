import React, { ReactNode, useEffect, useRef, useState } from "react";
import { ITime } from "../types/date";
import { calculateTimeLeft } from "../utils";
interface IProps {
  children: any;
  date: string;
}

const CountDown: React.FC<IProps> = ({ date, children }) => {
  const initialTimeLeft = calculateTimeLeft(date);
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const timer = useRef<number>();
  useEffect(() => {
    timer.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date));
    }, 1000);
    return () => {
      if (timer.current !== undefined) {
        clearInterval(timer.current);
      }
    };
  }, [date]);
  let isValidDate = true;
  let isValidFutureDate = true;
  if (timeLeft === null) isValidDate = false;
  if (timeLeft && timeLeft.seconds === undefined) isValidFutureDate = false;
  return children({
    isValidDate,
    isValidFutureDate,
    timeLeft,
  });
};

export default CountDown;
