"use client";

import { useEffect, useMemo, useState } from "react";

export function Footer() {
  const [shouldUse12Hours, setShouldUse12Hours] = useState(true);
  const [now, setNow] = useState(new Date());

  const timeRightNow = useMemo(
    () =>
      now.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: shouldUse12Hours,
      }),
    [now, shouldUse12Hours]
  );
  const dateToday = useMemo(
    () =>
      now.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
    [now]
  );

  useEffect(() => {
    const timerID = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <footer className="fixed bottom-4 left-6 md:left-8 right-6 md:right-8 text-sm md:text-base font-kode font-medium">
      <div className="flex justify-between items-center flex-row">
        <button
          title={`Show ${shouldUse12Hours ? 24 : 12} hour clock`}
          onClick={() => setShouldUse12Hours(!shouldUse12Hours)}
        >
          {timeRightNow}
        </button>
        <div>{dateToday}</div>
      </div>
    </footer>
  );
}
