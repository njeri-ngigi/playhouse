import { choices } from "./Choices";
import { IGameInfo } from "./types";

export function ComputerPlay({
  computerSelection,
  computerScore,
}: Pick<IGameInfo, "computerScore" | "computerSelection">) {
  const ComputerSelection = choices[computerSelection];

  return (
    <div>
      <div className="flex justify-between mb-1">
        <div data-testid="rps-computer-score">{computerScore}</div>
        <div className="mr-2">Computer</div>
      </div>
      <div>
        <div className="absolute -mt-1.5 -ml-1.5 bg-cream h-[200px] w-[200px] border">
          <div className="h-[200px] w-[200px] flex items-center justify-evenly text-2xl">
            {ComputerSelection && (
              <div data-testid="rps-computer-selection">
                <ComputerSelection />
              </div>
            )}
          </div>
        </div>
        <div className="h-[200px] w-[200px] border bg-lime"></div>
      </div>
    </div>
  );
}
