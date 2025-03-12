import { choices } from "./Choices";
import { IGameInfo } from "./types";

type UserPlayProps = Pick<IGameInfo, "userScore" | "userSelection"> & {
  handleUserSelection: (selection: number) => void;
};

export function UserPlay({
  userScore,
  handleUserSelection,
  userSelection,
}: UserPlayProps) {
  const UserSelection = choices[userSelection];

  return (
    <div>
      <div className="flex justify-between mb-1">
        <div>You</div>
        <div className="mr-2">{userScore}</div>
      </div>
      <div>
        <div className="absolute -mt-1.5 -ml-1.5 bg-cream h-[200px] w-[200px] border">
          <div className="h-[200px] w-[200px] flex items-center justify-evenly text-2xl">
            {UserSelection ? (
              <UserSelection />
            ) : (
              choices.map((Choice, idx) => (
                <button
                  key={idx}
                  className="hover:bg-lemon p-2"
                  onClick={() => handleUserSelection(0)}
                >
                  <Choice />
                </button>
              ))
            )}
          </div>
        </div>
        <div className="h-[200px] w-[200px] border bg-lemon"></div>
      </div>
    </div>
  );
}
