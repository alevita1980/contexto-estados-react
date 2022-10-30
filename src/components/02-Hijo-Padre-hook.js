import { useState } from "react";

const Hijo2 = (props) => {
  // Desestructuramos props para obtener todos los atributos:
  const { hijoOnClick } = props;
  const mensajeDeRetorno = "Estado actualizado";
  return (
    <button
      style={{ width: "240px", height: "60px" }}
      onClick={() => {
        hijoOnClick(mensajeDeRetorno);
      }}
    >
      Envíale los datos a mi padre ;)
    </button>
  );
};

const Padre2 = () => {
  // Creamos un estado para el mensaje y la función que actualiza su estado
  // con useState:
  const [mensaje, setMensaje] = useState("Estado inicial");

  return (
    <div>
      <h1>Estado: {mensaje}</h1>
      <Hijo2
      // Utilizamos setMensaje como función de callback:
        hijoOnClick={(msg) => setMensaje(msg)}
      />
    </div>
  );
};

export default Padre2;
