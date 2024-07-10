"use client"

import React, { useEffect, useState } from "react";
import { Card, CardDescription, CardHeader } from "./ui/card";
import { TimerIcon } from "lucide-react";

const RewardTimerCard = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-07-31T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const intervalId = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Card id="reward-timer" className="bg-neutral-900 p-2">
      <CardHeader className="flex pl-1 pt-1 flex-row items-center border-b border-gray-700 border-dashed">
        <TimerIcon color="orange" size={15} />
        <p className="text-gray-500 px-2 text-sm self-start">
          Reward unlocks in
        </p>
      </CardHeader>
      <CardDescription className="flex bg-neutral-950 rounded-lg mt-4 mb-2 mx-1 justify-around p-5 px-2">
        <div className="px-4">
          <h4 className="text-2xl text-gray-100">
            {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
          </h4>
          <p>Days</p>
        </div>
        <div className="px-4">
          <h4 className="text-2xl text-gray-100">
            {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
          </h4>
          <p>Hrs</p>
        </div>
        <div className="px-4">
          <h4 className="text-2xl text-gray-100">
            {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
          </h4>
          <p>Mins</p>
        </div>
        <div className="px-4">
          <h4 className="text-2xl text-gray-100">
            {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
          </h4>
          <p>Sec</p>
        </div>
      </CardDescription>
    </Card>
  );
};

export default RewardTimerCard;
