import Link from "next/link";
import classnames from "classnames";
import { Logout } from "./logout";
import { Games } from "./types";

interface HeaderLargeProps {
  activeTab: string;
  games: Games[];
}

export function HeaderLarge({ activeTab, games }: HeaderLargeProps) {
  return (
    <div className="hidden md:flex pl-4">
      {games.map((game) => (
        <Link
          key={game.route}
          href={`/games/${game.route}`}
          className={classnames(
            "px-2 mx-2 my-4 transition ease-in-out duration-200 hover:cursor-pointer hover:underline",
            activeTab === game.route ? "border-x bg-white" : "border-cream"
          )}
        >
          {game.text}
        </Link>
      ))}
      <Logout />
    </div>
  );
}
