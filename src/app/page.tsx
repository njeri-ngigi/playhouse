"use client";

import { useEffect } from "react";
import { Introduction } from "./Introduction";
import { useUsername } from "./hooks/useUsername";
import { SplashScreen } from "./games/SplashScreen";
import { useRouter } from "next/navigation";

// TODO:
// check state
// - show games page
//    - the last game played
//    - or default to rock paper scissors (rps)

export default function Home() {
  const username = useUsername();
  const router = useRouter();

  useEffect(() => {
    if (username) {
      setTimeout(() => {
        router.replace("/games");
      }, 5300);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return username ? <SplashScreen /> : <Introduction />;
}
