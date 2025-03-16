import { IGameInfo, Play } from "./types";

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
    return { winState: "Tie!" };
  }

  const computerWins =
    (userSelection === Play.Rock && computerSelection === Play.Paper) ||
    (userSelection === Play.Paper && computerSelection === Play.Scissors) ||
    (userSelection === Play.Scissors && computerSelection === Play.Rock);

  if (computerWins) {
    return { computerScore: computerScore + 1, winState: "You lose!" };
  } else {
    return { userScore: userScore + 1, winState: "You win!" };
  }
}

export function getRandomSelection() {
  return Math.floor(Math.random() * 3)
}