"use client";

import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export function useUsername() {
  return useSelector((state: RootState) => state.user.name);
}