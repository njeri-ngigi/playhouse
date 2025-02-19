"use client";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { Introduction } from "./components/intro/Introduction";
import { Games } from "./components/Games";

// check state
// - if user not onboarded, show intro page
// - else, show games page
//    - the last game played
//    - or default to rock paper scissors (rps)

export default function Home() {
  const username = useSelector((state: RootState) => state.user.name);

  return username ? <Games username={username} /> : <Introduction />;
}
