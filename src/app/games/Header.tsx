"use client";

import Link from "next/link";
import { Logout } from "./logout";
import classnames from "classnames";
import { usePathname } from "next/navigation";

export function Header() {
  const links = [
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
    <div className="border-b flex pl-4 items-center">
      {links.map((link) => (
        <Link
          key={link.route}
          href={`/games/${link.route}`}
          className={classnames(
            "px-4 py-1 mx-2 my-4 border hover:border-black transition ease-in-out duration-200",
            activeTab === link.route
              ? "bg-black text-white hover:bg-black/80"
              : "border-cream"
          )}
        >
          {link.text}
        </Link>
      ))}
      <Logout />
    </div>
  );
}
