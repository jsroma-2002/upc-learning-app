import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Room as RoomType } from "../types/room";
import { getRoomByPosition } from "../utils/RoomUtils";
import dataCharacters from "../data/characters.json";
import { getResponse } from "../services/chatService";

function ChatRoute() {
  const { positionX, positionY, characterId } = useParams<{
    positionX: string;
    positionY: string;
    characterId: string;
  }>();

  const getCharacterById = (id: string) => {
    return dataCharacters.characters.find(
      (character) => character.id.toString() === id
    );
  };

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
  const [characterInfo, setCharacterInfo] = useState<any>();

  useEffect(() => {
    if (positionX && positionY) {
      setRoomInfo(getRoomByPosition(positionX, positionY));
    }

    if (characterId !== undefined) {
      setCharacterInfo(getCharacterById(characterId));
    }
  }, [positionX, positionY, characterId]);

  useEffect(() => {
    if (characterInfo !== undefined) {
      setMessageQueue([
        ...messageQueue,
        characterInfo.name + ": Hola, En que te puedo ayudar?",
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterInfo]);

  const [messageQueue, setMessageQueue] = useState<string[]>([]);

  useEffect(() => {
    //if last message is from student
    if (characterInfo !== undefined && messageQueue.length > 1) {
      if (messageQueue[messageQueue.length - 1].includes("Estudiante")) {
        getResponse(messageQueue[messageQueue.length - 1], characterInfo.name)
          .then((response) => {
            setMessageQueue([...messageQueue, response]);
          })
          .finally(() => {
            (document.getElementById("message") as HTMLInputElement).value = "";
            //wait 0.5 seconds and move scroll to bottom
            setTimeout(() => {
              const responseArea = document.getElementById("responseArea");
              if (responseArea !== null) {
                responseArea.scrollTop = responseArea.scrollHeight;
              }
            }, 500);
          });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageQueue]);

  return (
    <>
      <main className="h-screen w-screen">
        <img
          className="absolute w-full h-full blur-sm"
          src={roomInfo.image}
          alt={roomInfo.description}
        />
        <div className="absolute w-full top-20 flex flex-row gap-8 items-center justify-center">
          <div
            className="w-2/3 h-56 border-4 bg-white border-black focus:ring-4 focus:outline-none rounded-lg p-4 text-center inline-flex items-center mr-2 0 text-xl font-bold overflow-auto"
            id="responseArea"
          >
            <p className="h-full w-full">
              {messageQueue.map((message, index) => {
                return <div key={index}>{message}</div>;
              })}
            </p>
          </div>
          <div className="w-36 h-36 bg-white border-4 border-black rounded-xl">
            {characterInfo !== undefined && (
              <img
                src={characterInfo.profilePic}
                alt={characterInfo.description}
              />
            )}
          </div>
        </div>
        <div className="absolute w-full bottom-20 flex flex-row items-center justify-center">
          <button
            type="button"
            className="left-40 bg-white hover:bg-gray-200 border-4 border-black focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg p-4 text-center inline-flex items-center text-xl font-bold"
            onClick={() => {
              navigate(`/x/${positionX}/y/${positionY}`);
            }}
          >
            X Salir
          </button>
          <form
            className="flex flex-row gap-8 items-center justify-center w-2/3"
            onSubmit={(e) => {
              e.preventDefault();
              const message = (
                document.getElementById("message") as HTMLInputElement
              ).value;
              setMessageQueue([...messageQueue, "Estudiante: " + message]);
            }}
          >
            <button
              type="submit"
              className="left-40 bg-white hover:bg-gray-200 border-4 border-black focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg p-4 text-center inline-flex items-center mr-2 0 text-xl font-bold"
            >
              Enviar
            </button>
            <input
              className="w-2/3 h-20 border-4 border-black focus:ring-4 focus:outline-none rounded-lg p-4 text-center inline-flex items-center mr-2 text-xl font-bold"
              id="message"
              name="message"
              placeholder="Escribe tu mensaje"
            />
          </form>

          <div className="w-36 h-36 bg-white border-4 border-black rounded-xl"></div>
        </div>
      </main>
    </>
  );
}

export default ChatRoute;
