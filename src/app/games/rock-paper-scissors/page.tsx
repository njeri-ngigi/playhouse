"use client";
import { ComputerPlay } from "./ComputerPlay";
import { useState } from "react";
import { UserPlay } from "./UserPlay";
import { IGameInfo } from "./types";
import { determineWinner } from "./utils";

/**
 * Rock = 0
 * Paper = 1
 * Scissors = 2
 */
export default function RockPaperScissors() {
  const initialGameData: IGameInfo = {
    round: 1,
    userSelection: -1,
    computerSelection: -1,
    winState: "",
    userScore: 0,
    computerScore: 0,
  };
  const [gameData, setGameData] = useState<IGameInfo>(initialGameData);
  const [countDown, setCountDown] = useState<number | undefined>();

  /**
   * Starts a count down for 4 seconds and
   * resets the round after time runs out
   */
  const startCountDownAndResetRound = () => {
    let count = 3;
    setCountDown(count);
    const timerIntervalTime = 1000;
    const timerID = setInterval(() => {
      count -= 1;
      setCountDown(count);
    }, timerIntervalTime);

    // clear the interval and reset round after 4s
    const countDownTime = 4000;
    setTimeout(() => {
      setGameData((prev) => ({
        ...prev,
        userSelection: -1,
        computerSelection: -1,
        winState: "",
        round: prev.round + 1,
      }));
      setCountDown(undefined);
      clearInterval(timerID);
    }, countDownTime);
  };

  const selectWinner = (
    newUserSelection: number,
    newComputerSelection: number
  ) => {
    const newGameData = determineWinner({
      userSelection: newUserSelection,
      computerSelection: newComputerSelection,
      userScore: gameData.userScore,
      computerScore: gameData.userScore,
    });

    setGameData((prev) => ({ ...prev, ...newGameData }));
  };

  const handleUserSelection = (selection: number) => {
    const newComputerSelection =
      selection >= 0 ? Math.floor(Math.random() * 3) : -1;
    setGameData((prev) => ({
      ...prev,
      userSelection: selection,
      computerSelection: newComputerSelection,
    }));
    selectWinner(selection, newComputerSelection);
    startCountDownAndResetRound();
  };

  const handleGameReset = () => {
    setGameData(initialGameData);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <div className="flex flex-col items-center h-[100px]">
        <h1 className="text-xl">Round: {gameData.round}</h1>
        <div className="mt-4 text-gray">{gameData.winState}</div>
      </div>
      <div className="flex items-center">
        <UserPlay
          userScore={gameData.userScore}
          userSelection={gameData.userSelection}
          handleUserSelection={handleUserSelection}
        />
        <div className="mx-8">vs</div>
        <ComputerPlay
          computerScore={gameData.computerScore}
          computerSelection={gameData.computerSelection}
        />
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="h-[30px]">{countDown && <div>{countDown}</div>}</div>
        <button
          className="mt-4 hover:underline text-blood"
          onClick={handleGameReset}
        >
          reset this game
        </button>
      </div>
    </div>
  );
}

// TODO:
// - solve that persistent redux noop error
// - make it mobile responsive
// - add tests
// - do TDD for the other tests
