import { rooms } from "../const";
import { Room } from "../types/room";

export const getRoomByPosition = (
  positionX: string,
  positionY: string
): Room => {
  return rooms.find(
    (room) =>
      room.positionX === Number(positionX) &&
      room.positionY === Number(positionY)
  ) as Room;
};
