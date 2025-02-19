"use client";

import { useEffect, useState } from "react";
import { GamesLayout } from "./GamesLayout";
import { SplashScreen } from "./SplashScreen";

export function Games() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 5300);
  }, []);

  return showSplashScreen ? <SplashScreen /> : <GamesLayout />;
}
