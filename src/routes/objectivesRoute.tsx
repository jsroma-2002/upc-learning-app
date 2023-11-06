/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRoomByPosition } from "../utils/RoomUtils";
import { Room as RoomType } from "../types/room";

function ObjectivesRoute() {
  const { positionX, positionY } = useParams<{
    positionX: string;
    positionY: string;
    characterId: string;
  }>();

  const navigate = useNavigate();

  const [roomInfo, setRoomInfo] = useState<RoomType>({
    id: "1",
    name: "Salon de Clase",
    description: "Un salon de clase con 20 computadoras",
    image: "https://i.imgur.com/8i3rD9k.jpg",
    positionX: 1,
    positionY: 0,
    floor: 0,
    minimap: "/src/assets/minimap/x0y0.svg",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [objectives, setObjetives] = useState<any[]>([]);

  useEffect(() => {
    if (positionX && positionY) {
      setRoomInfo(getRoomByPosition(positionX, positionY));
    }
  }, [positionX, positionY]);

  useEffect(() => {
    setObjetives(JSON.parse(localStorage.getItem("game")!).objectives);
  }, []);

  return (
    <>
      <main className="h-screen w-screen">
        <img
          className="absolute w-full h-full blur-sm"
          src={roomInfo.image}
          alt={roomInfo.description}
        />
        <button
          type="button"
          className="absolute top-5 left-40 bg-white hover:bg-gray-200 border-4 border-black focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg p-4 text-center inline-flex items-center text-xl font-bold"
          onClick={() => {
            navigate(`/x/${positionX}/y/${positionY}`);
          }}
        >
          X Salir
        </button>
        <div className="left-80 top-20 absolute w-2/3 h-3/4 bg-white border-4 rounded-xl border-black flex justify-center items-center flex-wrap p-4">
          {objectives.map((objetive: any) => {
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
                      <div
                        key={task.id}
                        className="flex flex-row ml-4 text-left"
                      >
                        <ul className="list-disc">
                          <li className="text-xl">
                            {task.name + " " + (task.status ? "✅" : "❗")}
                            <p>{task.description}</p>
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
      </main>
    </>
  );
}

export default ObjectivesRoute;
