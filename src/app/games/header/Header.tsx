"use client";

import { usePathname } from "next/navigation";
import { HeaderLarge } from "./Header.large";
import { HeaderSmall } from "./Header.small";
import { Games } from "./types";

export function Header() {
  const games: Games[] = [
    {
      route: "rock-paper-scissors",
      text: "ROCK PAPER SCISSORS",
    },
    {
      route: "tic-tac-toe",
      text: "TIC TAC TOE",
    },
    {
      route: "memory-game",
      text: "MEMORY game",
    },
    {
      route: "2048",
      text: "2048",
    },
  ];

  const pathname = usePathname();
  const activeTab = pathname.split("/")[2];

  return (
    <div className="flex md:border-b pl-4 items-center justify-center">
      <HeaderSmall games={games} activeTab={activeTab} />
      <HeaderLarge games={games} activeTab={activeTab} />
    </div>
  );
}
