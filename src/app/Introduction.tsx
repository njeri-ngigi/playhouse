"use client";

import { registerPlayer } from "@/lib/features/user/userSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function Introduction() {
  const [username, setUsername] = useState<string>("");
  const dispatch = useDispatch();
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username) {
      dispatch(registerPlayer(username));
    }
  };

  return (
    <div className="font-kode flex h-[100vh] items-center flex-col">
      <h1 className="top-8 fixed text-xl">PLAY HOUSE</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center my-auto"
      >
        <input
          autoFocus
          placeholder="Hi, what's your name?"
          className="w-[300px] p-2 border-2 border-lime outline-blood text-center"
          onChange={onInputChange}
        />
        <div className="font-medium mt-12">
          <button
            type="submit"
            className="py-2 px-4 -mt-1.5 active:mt-0 -ml-1.5 active:ml-0 absolute border border-black bg-lemon cursor-pointer"
          >
            Start ... -&gt;
          </button>
          <div className="py-2 px-4 bg-black">Start ... -&gt;</div>
        </div>
      </form>
    </div>
  );
}
