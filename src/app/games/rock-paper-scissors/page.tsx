"use client";
import { ComputerPlay } from "./ComputerPlay";
import { useState } from "react";
import { UserPlay } from "./UserPlay";
import { IGameInfo, Play } from "./types";
import { determineWinner, getRandomSelection } from "./utils";

/**
 * Rock = 0
 * Paper = 1
 * Scissors = 2
 */
export default function RockPaperScissors() {
  const initialGameData: IGameInfo = {
    round: 1,
    userSelection: Play.Undefined,
    computerSelection: Play.Undefined,
    winState: "",
    userScore: 0,
    computerScore: 0,
  };
  const [gameData, setGameData] = useState<IGameInfo>(initialGameData);
  const [countDown, setCountDown] = useState<number | undefined>();
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout>();
  const [timeoutID, setTimeoutID] = useState<NodeJS.Timeout>();

  const clearCountDown = (iID: NodeJS.Timeout) => {
    const countDownTime = 3000;
    const toID = setTimeout(() => {
      clearInterval(iID);
      setCountDown(undefined);
      setIntervalID(undefined);
      setGameData((prev) => ({
        ...prev,
        userSelection: Play.Undefined,
        computerSelection: Play.Undefined,
        winState: "",
        round: prev.round + 1,
      }));
    }, countDownTime);
    setTimeoutID(toID);
  };

  /**
   * Starts a count down for 3 seconds and
   * resets the round after time runs out
   */
  const startCountDownAndResetRound = async () => {
    let count = 3;
    setCountDown(count);

    // set a 1s interval timer to count down
    const timerIntervalTime = 1000;
    const iID = setInterval(() => {
      count -= 1;
      setCountDown(count);
    }, timerIntervalTime);
    setIntervalID(iID);

    clearCountDown(iID);
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
    const newComputerSelection = getRandomSelection();
    setGameData((prev) => ({
      ...prev,
      userSelection: selection,
      computerSelection: newComputerSelection,
    }));
    selectWinner(selection, newComputerSelection);
    startCountDownAndResetRound();
  };

  const handleGameReset = () => {
    clearInterval(intervalID);
    clearTimeout(timeoutID);

    setGameData(initialGameData);
    setCountDown(undefined);
    setIntervalID(undefined);
    setTimeoutID(undefined);
  };

  return (
    <div className="flex flex-col items-center md:justify-evenly justify-evenly h-[80vh]">
      <div className="flex flex-col md:justify-start justify-center py-2 items-center h-[75px] md:h-[120px] mt-8">
        <h1 className="text-xl" data-testid="rps-round">
          Round: {gameData.round}
        </h1>
        <div className="mt-2">
          {countDown && <div data-testid="rps-countdown">{countDown}</div>}
        </div>
        {gameData.winState && (
          <div className="my-2 text-gray" data-testid="rps-win-state">
            {gameData.winState}
          </div>
        )}
      </div>
      <div className="flex items-center flex-col md:flex-row">
        <UserPlay
          userScore={gameData.userScore}
          userSelection={gameData.userSelection}
          handleUserSelection={handleUserSelection}
        />
        <div className="mx-8 my-4"></div>
        <ComputerPlay
          computerScore={gameData.computerScore}
          computerSelection={gameData.computerSelection}
        />
      </div>
      <button
        data-testid="rps-game-reset"
        className="mt-[40px] md:mt-[75px] hover:underline text-blood"
        onClick={handleGameReset}
      >
        reset this game
      </button>
    </div>
  );
}

// TODO:
// - solve that persistent redux noop error
// - CI/CD for this
// - deploy this somewhere other than vercel?
// - create an architectural diagram for this
