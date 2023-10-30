import { useNavigate } from "react-router-dom";

function Tutorial() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-row">
      <div className="w-1/2 h-full bg-black">
        <div className="h-full w-full flex items-center justify-center flex-col">
          <h1 className="text-center text-white mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl">
            Mapa:
          </h1>
          <img
            className="w-[65%]"
            src="/src/assets/minimap/x-1y2.svg"
            alt="Minimapa general"
          />
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center flex-col justify-center">
        <h1 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
          Tutorial
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
          Este proyecto consiste en un juego de aventura gráfica en el que
          deberás ir superando diferentes objetivos relacionados a los procesos
          y tramites de la universidad. Para ello deberás recorrer el mapa e
          interactuar con los diferentes personajes que te iras encontrando
          <div
            className="p-4 mb-4 text-sm text-blue-800 rounded-lg m-2 bg-blue-50 "
            role="alert"
          >
            <span className="font-medium">Consejo!</span> Para interactuar con
            los personajes deberás acercarte y hacer click sobre ellos.
          </div>
          Estos personajes tienen inteligencia artificial incorporada que te
          permitirá interactuar de una manera natural asi que no dudes en
          preguntarles!
          <br />
          <br />
          Para moverte por el mapa utiliza las teclas:
          <span className="flex flex-row justify-center gap-3  mt-4">
            <kbd className="px-2 py-1.5 text-xs font-semibold  border  rounded-lg bg-gray-600 text-gray-100 border-gray-500">
              W
            </kbd>
            <kbd className="px-2 py-1.5 text-xs font-semibold  border  rounded-lg bg-gray-600 text-gray-100 border-gray-500">
              A
            </kbd>
            <kbd className="px-2 py-1.5 text-xs font-semibold  border  rounded-lg bg-gray-600 text-gray-100 border-gray-500">
              S
            </kbd>
            <kbd className="px-2 py-1.5 text-xs font-semibold  border  rounded-lg bg-gray-600 text-gray-100 border-gray-500">
              D
            </kbd>
          </span>
        </p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border-4 hover:bg-gray-200 border-blue-700 hover:border-blue-800 focus:ring-4 focus:ring-blue-300 "
            onClick={(e) => {
              e.preventDefault();
              navigate("/new");
            }}
          >
            Volver
          </a>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
