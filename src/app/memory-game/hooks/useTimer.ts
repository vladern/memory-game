import { useState, useEffect } from 'react';

export default function useTimer(isRunning: boolean) {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [timeInSeconds, setTimeInSeconds] = useState<number | undefined>();

  useEffect(() => {
    if (isRunning) {
      setStartDate(new Date());
    } else {
      const endDate = new Date();
      const differenceInSeconds = (endDate.getTime() - startDate.getTime()) / 1000;
      setTimeInSeconds(Math.floor(differenceInSeconds));
    }
  }, [isRunning]);



  return {timeInSeconds};
}
