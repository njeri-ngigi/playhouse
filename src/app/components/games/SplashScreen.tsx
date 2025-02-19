"use client";

import { useUsername } from "@/app/hooks/useUsername";
import { useEffect, useState } from "react";

export function SplashScreen() {
  const username = useUsername();
  const [showPrompt, setShowPrompt] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPrompt(true);
    }, 1500);

    setTimeout(() => {
      setShowCursor(true);
    }, 1000);
  }, []);

  return (
    <div className="h-[100vh] font-kode flex items-center justify-center animate-fade-out animation-delay-4000 flex md:flex-row flex-col">
      <h1 className="top-8 fixed text-xl">PLAY HOUSE</h1>
      <div className="animate-username md:mr-2 mb-4">Hi {username}</div>
      <div className="flex h-[40px] w-[270px]">
        {showPrompt && (
          <div className="animate-typewriter overflow-hidden whitespace-nowrap">
            ... Let&apos;s play some games
          </div>
        )}
        {showCursor && (
          <div className="w-[10px] h-[20px] bg-black animate-pulse transition ease-in duration-500 ml-2"></div>
        )}
      </div>
    </div>
  );
}
