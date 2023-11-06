import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRoomByPosition } from "../utils/RoomUtils";
import { Room as RoomType } from "../types/room";
import { useItemsStore } from "../store/itemsStore";

function ItemsRoute() {
  const { positionX, positionY } = useParams<{
    positionX: string;
    positionY: string;
    characterId: string;
  }>();

  const navigate = useNavigate();

  const { items } = useItemsStore();

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

  useEffect(() => {
    if (positionX && positionY) {
      setRoomInfo(getRoomByPosition(positionX, positionY));
    }
  }, [positionX, positionY]);

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
          <div className="w-full  h-full flex flex-row gap-6 overflow-x-auto overflow-y-hidden">
            {items.map((item) => {
              return (
                <div className=" h-full w-3/12">
                  <img
                    className="w-full h-2/3 mb-2"
                    src={item.image}
                    alt={item.description}
                  />
                  <section className="h-1/3 w-full  text-center flex flex-col gap-4">
                    <h1 className="text-4xl font-bold">{item.name}</h1>
                    <p>{item.description}</p>
                  </section>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default ItemsRoute;
