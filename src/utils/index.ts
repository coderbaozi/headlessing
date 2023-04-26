import isValid from "date-fns/isValid";
import { ITime } from "../types/date";

export const calculateTimeLeft = (date: string) => {
  if (!isValid(date)) return null;
  const difference = new Date(date).getTime() - new Date().getTime();
  let timeLeft = {} as ITime;
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60 * 24)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};
