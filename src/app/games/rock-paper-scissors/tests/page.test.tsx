import "@testing-library/jest-dom";
import { render, screen, fireEvent, act } from "@testing-library/react";
import RockPaperScissors from "../page";
import { Play } from "../types";

async function playAsUser(userPlay: Play) {
  const selections = await screen.findAllByTestId("rps-user-choice");
  expect(selections).toHaveLength(3);
  expect(
    await screen.queryByTestId(`rps-user-selection-${userPlay}`)
  ).not.toBeInTheDocument();

  fireEvent.click(selections[userPlay]);

  expect(
    screen.getByTestId(`rps-user-selection-${userPlay}`)
  ).toBeInTheDocument();
  expect(screen.getByTestId("rps-computer-selection")).toBeInTheDocument();
  expect(screen.getByTestId("rps-countdown")).toBeInTheDocument();
}

async function verifyRoundReset(userPlay: Play) {
  expect(await screen.findAllByTestId("rps-user-choice")).toHaveLength(3);
  expect(
    await screen.queryByTestId(`rps-user-selection-${userPlay}`)
  ).not.toBeInTheDocument();
  expect(await screen.queryByTestId("rps-countdown")).not.toBeInTheDocument();
  expect(await screen.queryByTestId("rps-win-state")).not.toBeInTheDocument();
  expect(await screen.findByTestId("rps-round")).toHaveTextContent("Round: 2");
}

describe("Rock Paper Scissors", () => {
  test("should render rps with initial game state", async () => {
    render(<RockPaperScissors />);

    const resetButton = screen.getByTestId("rps-game-reset");
    expect(resetButton).toBeInTheDocument();

    const round = screen.getByTestId("rps-round");
    expect(round).toHaveTextContent("1");

    const userScore = screen.getByTestId("rps-user-score");
    expect(userScore).toHaveTextContent("0");

    const userSelections = await screen.findAllByTestId("rps-user-choice");
    expect(userSelections).toHaveLength(3);

    const userSelection = await screen.queryByTestId("rps-user-selection");
    expect(userSelection).not.toBeInTheDocument();

    const computerScore = screen.getByTestId("rps-computer-score");
    expect(computerScore).toHaveTextContent("0");

    const computerSelection = await screen.queryByTestId(
      "rps-computer-selection"
    );
    expect(computerSelection).not.toBeInTheDocument();
  });

  describe("User selections", () => {
    test("user selects rock", async () => {
      render(<RockPaperScissors />);

      const selections = await screen.findAllByTestId("rps-user-choice");
      expect(selections).toHaveLength(3);
      expect(
        await screen.queryByTestId("rps-user-selection-0")
      ).not.toBeInTheDocument();

      fireEvent.click(selections[0]);

      expect(screen.getByTestId("rps-user-selection-0")).toBeInTheDocument();
    });

    test("user selects paper", async () => {
      render(<RockPaperScissors />);

      const selections = await screen.findAllByTestId("rps-user-choice");
      expect(selections).toHaveLength(3);
      expect(
        await screen.queryByTestId("rps-user-selection-1")
      ).not.toBeInTheDocument();

      fireEvent.click(selections[1]);

      expect(screen.getByTestId("rps-user-selection-1")).toBeInTheDocument();
    });

    test("user selects scissors", async () => {
      render(<RockPaperScissors />);

      const selections = await screen.findAllByTestId("rps-user-choice");
      expect(selections).toHaveLength(3);
      expect(
        await screen.queryByTestId("rps-user-selection-2")
      ).not.toBeInTheDocument();

      fireEvent.click(selections[2]);

      expect(screen.getByTestId("rps-user-selection-2")).toBeInTheDocument();
    });
  });

  describe("Game play", () => {
    beforeEach(() => {
      jest.useFakeTimers();
      jest.spyOn(global, "setTimeout");
      jest.spyOn(Math, "random").mockReturnValue(0.5);

      render(<RockPaperScissors />);
    });

    test("user wins and game resets", async () => {
      await playAsUser(Play.Scissors);

      expect(screen.getByTestId("rps-win-state")).toHaveTextContent("You win!");
      expect(screen.getByTestId("rps-computer-score")).toHaveTextContent("0");
      expect(screen.getByTestId("rps-user-score")).toHaveTextContent("1");

      act(() => {
        jest.runAllTimers();
      });

      await verifyRoundReset(Play.Scissors);
    });

    test("computer wins and game resets", async () => {
      await playAsUser(Play.Rock);

      expect(screen.getByTestId("rps-win-state")).toHaveTextContent(
        "You lose!"
      );
      expect(screen.getByTestId("rps-computer-score")).toHaveTextContent("1");
      expect(screen.getByTestId("rps-user-score")).toHaveTextContent("0");

      act(() => {
        jest.runAllTimers();
      });

      await verifyRoundReset(Play.Rock);
    });

    test("game draws and game resets", async () => {
      await playAsUser(Play.Paper);

      expect(screen.getByTestId("rps-win-state")).toHaveTextContent("Tie");
      expect(screen.getByTestId("rps-computer-score")).toHaveTextContent("0");
      expect(screen.getByTestId("rps-user-score")).toHaveTextContent("0");

      act(() => {
        jest.runAllTimers();
      });

      await verifyRoundReset(Play.Paper);
    });

    test("reset the game", async () => {
      await playAsUser(Play.Scissors);

      expect(screen.getByTestId("rps-win-state")).toHaveTextContent("You win!");
      expect(screen.getByTestId("rps-computer-score")).toHaveTextContent("0");
      expect(screen.getByTestId("rps-user-score")).toHaveTextContent("1");

      act(() => {
        jest.runAllTimers();
      });

      await verifyRoundReset(Play.Scissors);

      fireEvent.click(screen.getByTestId("rps-game-reset"));

      expect(screen.getByTestId("rps-user-score")).toHaveTextContent("0");
      expect(await screen.findByTestId("rps-round")).toHaveTextContent(
        "Round: 1"
      );
    });
  });
});
