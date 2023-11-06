import { useNavigate } from "react-router-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ObjetiveListProps {
  dataObjetives: any;
  positionX: string | undefined;
  positionY: string | undefined;
  saveGame: () => void;
}

function ObjetiveList({
  dataObjetives,
  positionX,
  positionY,
  saveGame,
}: ObjetiveListProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        saveGame();
        navigate(`/x/${positionX}/y/${positionY}/objectives`);
      }}
      className="absolute right-4 bottom-4 w-80 h-96 bg-white border-4 border-black rounded-xl p-4 hover:scale-105 transition-all cursor-pointer"
    >
      {dataObjetives.map((objetive: any) => {
        return (
          <div key={objetive.id} className="flex flex-row">
            <div className="flex flex-col text-center w-full">
              <h1 className="font-bold text-3xl text-center mb-1">
                {" "}
                Objetivos
              </h1>
              <h2 className="font-semibold text-xl text-center mb-4">
                {objetive.name}
              </h2>
              {objetive.tasks.map((task: any) => {
                return (
                  <div key={task.id} className="flex flex-row ml-4 text-left">
                    <ul className="list-disc">
                      <li className="text-xl">
                        {task.name + " " + (task.status ? "✅" : "❗")}
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ObjetiveList;
