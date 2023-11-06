import { useNavigate } from "react-router-dom";

function EndRoute() {

    const navigate = useNavigate();

  return (
    <div className="flex h-screen justify-center items-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-semibold text-green-600 mb-4">
          ¡Felicidades!
        </h1>
        <p className="text-xl mb-6">Has completado el juego con éxito.</p>
        <p className="text-gray-600 mb-6">Gracias por jugar.</p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-300"
          onClick={() => {
            localStorage.removeItem("game");
            navigate("/new");
          }}
        >
          Volver al menú principal
        </button>
      </div>
    </div>
  );
}

export default EndRoute;
