import { useNavigate } from "react-router-dom";

function New() {
  const navigate = useNavigate();

  const newGame = {
    positionX: 0,
    positionY: 0,
    inventory: [],
    creationDate: new Date(),
  };

  return (
    <div className="w-screen h-screen flex items-center flex-col justify-center">
      <h1 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl ">
        Aprende Jugando UPC
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 ">
        Hola, bienvenido a nuestro proyecto de aprendizaje de lineamientos
        universitarios. Sabias que entre el 15% y 25% de los alumnos
        universitarios desertan en el primer año de estudios. Uno de lo motivos
        de esta elevada deserción es la de adaptación de la secundaria a la
        universidad, pues el cambio brusco de lineamientos y normas académicas
        tiene un impacto negativo en el rendimiento estudiantil. Por este motivo
        que hemos creado este juego para que puedas aprender de una manera
        divertida y amena y adaptarte de la mejor forma posible a esta nueva
        etapa de tu vida. Esperamos puedas aprender mucho y disfrutar de este
        juego!.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a
          href="#"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 "
          onClick={(e) => {
            e.preventDefault();
            localStorage.setItem("game", JSON.stringify(newGame));
            navigate("/x/0/y/0");
          }}
        >
          Nueva Partida
        </a>
        {localStorage.getItem("game") && (
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 border-gray-700"
            onClick={(e) => {
              e.preventDefault();
              navigate(
                `/x/${JSON.parse(localStorage.getItem("game")!).positionX}/y/${
                  JSON.parse(localStorage.getItem("game")!).positionY
                }`
              );
            }}
          >
            Continuar
          </a>
        )}

        <a
          href="#"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border-4 hover:bg-gray-200 border-blue-700 hover:border-blue-800 focus:ring-4 focus:ring-blue-300 "
          onClick={(e) => {
            e.preventDefault();
            navigate("/tutorial");
          }}
        >
          Tutorial
        </a>
      </div>
    </div>
  );
}

export default New;
