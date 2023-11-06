/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Room as RoomType } from "../types/room";
import { getRoomByPosition } from "../utils/RoomUtils";
import ObjetiveList from "../components/ObjetiveList";
import ExitDialog from "../components/ExitDialog";
import dataCharacters from "../data/characters.json";
import dataItems from "../data/items.json";
import { useItemsStore } from "../store/itemsStore";
import toast from "react-hot-toast";

function Room() {
  const { positionX, positionY } = useParams<{
    positionX: string;
    positionY: string;
  }>();

  const navigate = useNavigate();

  const { items, setItems, addItem } = useItemsStore();

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

  const exitDialog = document.querySelector("dialog");

  const moveToRoom = (positionX: number, positionY: number) => {
    const room = getRoomByPosition(positionX.toString(), positionY.toString());

    if (room) {
      setRoomInfo(room);
      navigate(`/x/${positionX}/y/${positionY}`);
    } else {
      alert("No existe la habitación");
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "w" || event.key === "W") {
      moveToRoom(Number(positionX), Number(positionY) + 1);
    } else if (event.key === "a" || event.key === "A") {
      moveToRoom(Number(positionX) - 1, Number(positionY));
    } else if (event.key === "s" || event.key === "S") {
      moveToRoom(Number(positionX), Number(positionY) - 1);
    } else if (event.key === "d" || event.key === "D") {
      moveToRoom(Number(positionX) + 1, Number(positionY));
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [positionX, positionY]);

  useEffect(() => {
    if (positionX && positionY) {
      setRoomInfo(getRoomByPosition(positionX, positionY));
    }
  }, [positionX, positionY]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("game")!).inventory);
    setObjetives(JSON.parse(localStorage.getItem("game")!).objectives);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //if all objetives are completed then show the final message
    if (objectives.length > 0) {
      if (
        objectives[0].tasks.filter((task: any) => task.status === false)
          .length === 0
      ) {
        navigate("/end");
      }
    }
  }, [objectives]);

  const saveGame = () => {
    localStorage.setItem(
      "game",
      JSON.stringify({
        positionX: positionX,
        positionY: positionY,
        inventory: items,
        objectives: objectives,
        creationDate: new Date(),
      })
    );
  };

  return (
    <>
      <dialog
        id="exit-dialog"
        className="w-1/3 h-1/3 p-8 border-2 border-gray-500 rounded-lg shadow bg-black"
      >
        <ExitDialog
          positionX={roomInfo.positionX}
          positionY={roomInfo.positionY}
          exitAction={() => {
            exitDialog?.close();
          }}
          objectives={objectives}
        />
      </dialog>
      <main className="h-screen w-screen">
        <img
          className="absolute w-full h-full"
          src={roomInfo.image}
          alt={roomInfo.description}
        />

        <div className="absolute h-full flex flex-row justify-around items-center gap-6 w-full">
          {dataCharacters.characters.map((character) => {
            return (
              roomInfo.positionX === character.positionX &&
              roomInfo.positionY === character.positionY && (
                <img
                  onClick={() => {
                    saveGame();
                    navigate(
                      `/x/${positionX}/y/${positionY}/chat/${character.id}`
                    );
                  }}
                  key={character.id}
                  className="w-[32%] left-10 cursor-pointer h-full z-50"
                  src={character.avatarImg}
                  alt={character.description}
                />
              )
            );
          })}
        </div>

        <div className="absolute h-full gap-6 w-full">
          {dataItems.items.map((item) => {
            return (
              roomInfo.positionX === item.positionX &&
              roomInfo.positionY === item.positionY && (
                <img
                  onClick={() => {
                    if (items.filter((i) => i.id === item.id).length === 0) {
                      addItem(item);
                      if (item.id === "2") {
                        objectives[0].tasks[0].status = true;

                        setObjetives(objectives);
                        toast.success(
                          "Felicidades has completo una tarea de tu objetivo. Sigue asi!"
                        );
                      }
                    } else {
                      alert("Ya tienes este item");
                    }
                  }}
                  key={item.id}
                  className="relative w-[10%] left-24 top-24 cursor-pointer animate-bounce"
                  src={item.image}
                  alt={item.description}
                />
              )
            );
          })}
        </div>

        <img
          onClick={() => {
            saveGame();
            navigate(`/x/${positionX}/y/${positionY}/map`);
          }}
          className="absolute w-80 translate-x-5 bottom-4 hover:scale-105 transition-all cursor-pointer"
          src={roomInfo.minimap}
          alt={roomInfo.description}
        />
        <div className="absolute w-80 translate-x-5 top-4 ">
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-4 text-center inline-flex items-center mr-2 0"
            onClick={() => {
              exitDialog?.showModal();
            }}
          >
            X
          </button>
        </div>
        <div
          onClick={() => {
            saveGame();
            navigate(`/x/${positionX}/y/${positionY}/items`);
          }}
          className="overflow-auto absolute right-4 top-4 w-80 h-56 bg-white border-4 border-black rounded-xl p-4 hover:scale-105 transition-all cursor-pointer"
        >
          <h1 className="font-bold text-3xl text-center mb-4"> Items</h1>
          <ul className="list-disc ml-4">
            {items.length > 0 ? (
              items.map((item) => {
                return (
                  <li key={item.id} className="text-xl">
                    {item.name}
                  </li>
                );
              })
            ) : (
              <li className="text-xl">No tienes items</li>
            )}
          </ul>
        </div>

        <ObjetiveList
          saveGame={saveGame}
          positionX={positionX}
          positionY={positionY}
          dataObjetives={objectives}
        />
      </main>
    </>
  );
}

export default Room;
