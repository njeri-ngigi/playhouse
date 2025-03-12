import { IGameInfo } from "./types";

/**
 * if both user and computer pick the same number, its a tie
 * winner is determined if:
 * - rock beats scissors
 * - scissors beats paper
 * - paper beats rock
 */
export function determineWinner(
  gameData: Omit<IGameInfo, "round" | "winState">
): Partial<IGameInfo> {
  const { userSelection, computerSelection, computerScore, userScore } =
    gameData;

  if (userSelection === computerSelection) {
    return { winState: "Tie" };
  }

  const computerWins =
    (userSelection === 0 && computerSelection === 1) ||
    (userSelection === 1 && computerSelection === 2) ||
    (userSelection === 2 && computerSelection === 0);

  if (computerWins) {
    return { computerScore: computerScore + 1, winState: "You lose!" };
  } else {
    return { userScore: userScore + 1, winState: "You win!" };
  }
}
