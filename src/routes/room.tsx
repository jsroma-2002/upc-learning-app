import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Room as RoomType } from "../types/room";
import { getRoomByPosition } from "../utils/RoomUtils";

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
      <header>
        Room {positionX} {positionY}
        <button
          className="border-4 m-4"
          onClick={() => {
            moveToRoom(Number(positionX) - 1, Number(positionY));
          }}
        >
          Izquierda
        </button>
        <button
          className="border-4 m-4"
          onClick={() => {
            moveToRoom(Number(positionX) + 1, Number(positionY));
          }}
        >
          Derecha
        </button>
        <button
          className="border-4 m-4"
          onClick={() => {
            moveToRoom(Number(positionX), Number(positionY) + 1);
          }}
        >
          Arriba
        </button>
        <button
          className="border-4 m-4"
          onClick={() => {
            moveToRoom(Number(positionX), Number(positionY) - 1);
          }}
        >
          Abajo
        </button>
      </header>
      <main>
        <p>Contenido de la habitación</p>
        <p>{roomInfo.description}</p>
        <img src={roomInfo.minimap} alt={roomInfo.description} />
        <img src={roomInfo.image} alt={roomInfo.description} />
      </main>
    </>
  );
}

export default Room;
