import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { Games } from "./types";
import Link from "next/link";
import { Logout } from "./logout";

interface HeaderSmallProps {
  games: Games[];
  activeTab: string;
}

export function HeaderSmall({ activeTab, games }: HeaderSmallProps) {
  const activeGame = activeTab.split("-").join(" ").toUpperCase();

  return (
    <Menu as="div" className="md:hidden relative inline-block mt-10">
      <div>
        <MenuButton className="w-[280px] inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-black shadow-xs ring-gray-300 hover:bg-gray-50">
          {activeGame}
          <IoChevronDownCircleOutline
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute z-10 mt-2 w-[280px] origin-top-right bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          {games.map((game, idx) => (
            <MenuItem key={`menu-item-${idx}`}>
              <Link
                key={game.route}
                href={`/games/${game.route}`}
                className="border-b border-black/10 text-center block py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                {game.text}
              </Link>
            </MenuItem>
          ))}
          <div className="text-center py-1">
            <Logout />
          </div>
        </div>
      </MenuItems>
    </Menu>
  );
}
