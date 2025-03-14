export interface IGameInfo {
  round: number;
  userSelection: number;
  computerSelection: number;
  winState: string;
  userScore: number;
  computerScore: number;
}

export enum Play {
  Rock = 0,
  Paper = 1,
  Scissors = 2,
  Undefined = -1
}
