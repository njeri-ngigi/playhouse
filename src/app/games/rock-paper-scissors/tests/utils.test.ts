import { Play } from "../types"
import { determineWinner } from "../utils"

describe("determineWinner", () => {
  const initialData = {
    computerScore: 0,
    userScore: 0
  }

  test("should draw if selections match", () => {
    const winnerData = determineWinner({
      ...initialData,
      computerSelection: Play.Rock,
      userSelection: Play.Rock
    })

    expect(winnerData).toEqual({
      winState: "Tie!"
    })
  })
  
  test("computer should win if it selects rock and user selects scissors", () => {
    const winnerData = determineWinner({
      ...initialData,
      computerSelection: Play.Paper,
      userSelection: Play.Rock
    })

    expect(winnerData).toEqual({
      winState: "You lose!",
      computerScore: 1
    })
  })
  
  test("computer should win if it selects scissors and user selects paper", () => {
    const winnerData = determineWinner({
      ...initialData,
      computerSelection: Play.Scissors,
      userSelection: Play.Paper
    })

    expect(winnerData).toEqual({
      winState: "You lose!",
      computerScore: 1
    })
  })
  
  test("computer should win if it selects paper and user selects rock", () => {
    const winnerData = determineWinner({
      ...initialData,
      computerSelection: Play.Paper,
      userSelection: Play.Rock
    })

    expect(winnerData).toEqual({
      winState: "You lose!",
      computerScore: 1
    })
  })
  
  test("user should win if it selects rock and computer selects scissors", () => {
    const winnerData = determineWinner({
      ...initialData,
      userSelection: Play.Rock,
      computerSelection: Play.Scissors,
    })

    expect(winnerData).toEqual({
      winState: "You win!",
      userScore: 1
    })
  })
  
  test("user should win if it selects scissors and computer selects paper", () => {
    const winnerData = determineWinner({
      ...initialData,
      userSelection: Play.Scissors,
      computerSelection: Play.Paper,
    })

    expect(winnerData).toEqual({
      winState: "You win!",
      userScore: 1
    })
  })
  
  test("user should win if it selects paper and computer selects rock", () => {
    const winnerData = determineWinner({
      ...initialData,
      userSelection: Play.Paper,
      computerSelection: Play.Rock,
    })

    expect(winnerData).toEqual({
      winState: "You win!",
      userScore: 1
    })
  })
})