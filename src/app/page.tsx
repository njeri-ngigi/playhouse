"use client";

import { Introduction } from "./components/intro/Introduction";
import { Games } from "./components/games/Games";
import { useUsername } from "./hooks/useUsername";

// check state
// - show games page
//    - the last game played
//    - or default to rock paper scissors (rps)

export default function Home() {
  const username = useUsername();

  return username ? <Games /> : <Introduction />;
}
