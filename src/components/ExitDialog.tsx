/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useItemsStore } from "../store/itemsStore";

interface RoomInfo {
  positionX: number;
  positionY: number;
  objectives: any[];
  exitAction: () => void;
}

function ExitDialog(props: RoomInfo) {
  const navigate = useNavigate();

  const { items } = useItemsStore();

  return (
    <div className="relative">
      <button
        type="button"
        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
        data-modal-hide="popup-modal"
        onClick={props.exitAction}
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
      <div className="p-6 text-center">
        <svg
          className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Seguro que desea salir?
        </h3>
        <div className="flex justify-center gap-4">
          <button
            data-modal-hide="defaultModal"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              localStorage.setItem(
                "game",
                JSON.stringify({
                  positionX: props.positionX,
                  positionY: props.positionY,
                  inventory: items,
                  objectives: props.objectives,
                  creationDate: new Date(),
                })
              );
              props.exitAction();
            }}
          >
            Guardar
          </button>
          <button
            data-modal-hide="defaultModal"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              localStorage.setItem(
                "game",
                JSON.stringify({
                  positionX: props.positionX,
                  positionY: props.positionY,
                  inventory: items,
                  objectives: props.objectives,
                  creationDate: new Date(),
                })
              );
              navigate("/new");
            }}
          >
            Guardar y Salir
          </button>
          <button
            data-modal-hide="defaultModal"
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            onClick={() => {
              localStorage.removeItem("game");
              navigate("/new");
            }}
          >
            Borrar Partida
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExitDialog;
