import React, { useEffect, useState } from "react";

export default function Timer({ duration }) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time <= 0) return;

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    if (milliseconds <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    let total_seconds = Math.floor(milliseconds / 1000);
    let hours = Math.floor(total_seconds / 3600);
    let minutes = Math.floor((total_seconds % 3600) / 60);
    let seconds = total_seconds % 60;

    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = getFormattedTime(time);

  return (
    <div className="flex items-center justify-center gap-4 text-white">
      <span className="w-12 h-13 flex flex-col items-center justify-center font-bold text-xl bg-Primary border border-white/45 rounded-md text-white">
        {String(seconds).padStart(2, "0")}
        <span className="text-sm font-medium text-white">ثانیه</span>
      </span>
      :
      <span className="w-12 h-13 flex flex-col items-center justify-center font-bold text-xl bg-Primary border border-white/45 rounded-md text-white">
        {String(minutes).padStart(2, "0")}
        <span className="text-sm font-medium text-white">دقیقه</span>
      </span>
      :
      <span className="w-12 h-13 flex flex-col items-center justify-center font-bold text-xl bg-Primary border border-white/45 rounded-md text-white">
        {String(hours).padStart(2, "0")}
        <span className="text-sm font-medium text-white">ساعت</span>
      </span>
    </div>
  );
}
