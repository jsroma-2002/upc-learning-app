import { Room } from "./types/room";

export const characters = [
  {
    id: "1",
    name: "Prof. Juan Perez",
    description: "Un profesor de la escuela",
    image: "/src/assets/characters/teacher1.svg",
    positionX: 2,
    positionY: 1,
  },
];

export const roomTypes = [
  {
    id: "1",
    name: "Salon de Clase",
    description: "Un salon de clase con 20 computadoras",
    identifier: "[C]"
  },
  {
    id: "2",
    name: "Un patio",
    description: "Un patio del campus con areas verdes",
    identifier: "[P]"
  },
  {
    id: "3",
    name: "Servicios Universitarios",
    description: "Una sala administrativa donde se pueden solicitar recursos",
    identifier: "[S]"
  },
  {
    id: "4",
    name: "Biblioteca",
    description: "Biblioteca del campus cuenta con libros y un area de lectura",
    identifier: "[B]"
  }
];

export const rooms: Room[] = [
  {
    id: "1",
    name: "Salon de Clase",
    description: "Un salon de clase con 20 computadoras",
    image: "/src/assets/rooms/roomx0y0.svg",
    positionX: 0,
    positionY: 0,
    floor: 0,
    minimap: "/src/assets/minimap/x0y0.svg",
  },
  {
    id: "3",
    name: "Patio",
    description: "Un patio",
    image: "/src/assets/rooms/roomx-1y1.svg",
    positionX: -1,
    positionY: 1,
    floor: 0,
    minimap: "/src/assets/minimap/x-1y1.svg",
  },
  {
    id: "4",
    name: "Salon de Clase",
    description: "Un salon de clase con 20 computadoras",
    image: "/src/assets/rooms/roomx0y1.svg",
    positionX: 0,
    positionY: 1,
    floor: 0,
    minimap: "/src/assets/minimap/x0y1.svg",
  },
  {
    id: "5",
    name: "Salon de Clase",
    description: "Un salon de clase con 20 computadoras",
    image: "/src/assets/rooms/roomx1y1.svg",
    positionX: 1,
    positionY: 1,
    floor: 0,
    minimap: "/src/assets/minimap/x1y1.svg",
  },
  {
    id: "6",
    name: "Salon de Clase",
    description: "Un salon de clase con 20 computadoras",
    image: "/src/assets/rooms/roomx2y1.svg",
    positionX: 2,
    positionY: 1,
    floor: 0,
    minimap: "/src/assets/minimap/x2y1.svg",
  },
  {
    id: "8",
    name: "Patio",
    description: "Un patio",
    image: "/src/assets/rooms/roomx-1y2.svg",
    positionX: -1,
    positionY: 2,
    floor: 0,
    minimap: "/src/assets/minimap/x-1y2.svg",
  },
  {
    id: "9",
    name: "Salon de Clase",
    description: "Un salon de clase con 20 computadoras",
    image: "/src/assets/rooms/roomx0y2.svg",
    positionX: 0,
    positionY: 2,
    floor: 0,
    minimap: "/src/assets/minimap/x0y2.svg",
  },
  {
    id: "10",
    name: "Salon de Clase",
    description: "Un salon de clase con 20 computadoras",
    image: "/src/assets/rooms/roomx1y2.svg",
    positionX: 1,
    positionY: 2,
    floor: 0,
    minimap: "/src/assets/minimap/x1y2.svg",
  },
  {
    id: "11",
    name: "Salon de Clase",
    description: "Un salon de clase con 20 computadoras",
    image: "/src/assets/rooms/roomx2y2.svg",
    positionX: 2,
    positionY: 2,
    floor: 0,
    minimap: "/src/assets/minimap/x2y2.svg",
  },
  {
    id: "13",
    name: "Patio",
    description: "Un patio",
    image: "/src/assets/rooms/roomx-1y3.svg",
    positionX: -1,
    positionY: 3,
    floor: 0,
    minimap: "/src/assets/minimap/x-1y3.svg",
  },
  {
    id: "14",
    name: "Salon de Clase",
    description: "Un salon de clase con 20 computadoras",
    image: "/src/assets/rooms/roomx0y3.svg",
    positionX: 0,
    positionY: 3,
    floor: 0,
    minimap: "/src/assets/minimap/x0y3.svg",
  },
  {
    id: "15",
    name: "Salon de Clase",
    description: "Un salon de clase con 20 computadoras",
    image: "/src/assets/rooms/roomx0y4.svg",
    positionX: 0,
    positionY: 4,
    floor: 0,
    minimap: "/src/assets/minimap/x0y4.svg",
  },
];
