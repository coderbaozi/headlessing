import React from "react";
import "./App.css";
import CountDown from "./components/CountDown";
import FirstCountdownUI from "./ui/FirstCountdownUI";
import useCountdown from "./hooks/useCountDown";
function App() {
  const date = new Date("2024-01-01");
  const { timeLeft, isValidDate, isValidFutureDate } = useCountdown(date);
  return (
    <div>
      <CountDown date={date}>
        {(renderProps) => {
          return <FirstCountdownUI {...renderProps} />;
        }}
      </CountDown>
      <hr />
    </div>
  );
}

export default App;
