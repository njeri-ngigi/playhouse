"use client";

import { logoutPlayer } from "@/lib/features/user/userSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export function Logout() {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutPlayer());
    router.replace("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="hover:underline hover:cursor-pointer md:ml-4"
    >
      Log out
    </button>
  );
}
