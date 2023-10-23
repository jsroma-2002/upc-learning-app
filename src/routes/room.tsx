import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Room as RoomType } from "../types/room";
import { getRoomByPosition } from "../utils/RoomUtils";
import ObjetiveList from "../components/ObjetiveList";
import ExitDialog from "../components/ExitDialog";

function Room() {
  const { positionX, positionY } = useParams<{
    positionX: string;
    positionY: string;
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

  const dialog = document.querySelector("dialog");

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

  return (
    <>
      <dialog className="w-1/3 h-1/3 p-8 border-2 border-gray-500 rounded-lg shadow bg-black">
        <ExitDialog
          positionX={roomInfo.positionX}
          positionY={roomInfo.positionY}
          exitAction={() => {
            dialog?.close();
          }}
        />
      </dialog>
      <main className="h-screen w-screen">
        <img
          className="absolute w-full h-full"
          src={roomInfo.image}
          alt={roomInfo.description}
        />
        <img
          className="absolute w-80 translate-x-5 bottom-4"
          src={roomInfo.minimap}
          alt={roomInfo.description}
        />
        <div className="absolute w-80 translate-x-5 top-4 ">
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-4 text-center inline-flex items-center mr-2 0"
            onClick={() => {
              dialog?.showModal();
            }}
          >
            X
          </button>
        </div>
        <ObjetiveList />
      </main>
    </>
  );
}

export default Room;
