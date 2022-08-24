import { useState } from "react";

const HijoA = (props) => {
  // Desestructuramos props para obtener todos los atributos:
  const { msg } = props;
  return <h1>En hijo A: {msg}</h1>;
};

const HijoB = (props) => {
  // Desestructuramos props para obtener todos los atributos:
  const { msg } = props;
  return (
    <div>
      <h1>En hijo B: {msg}</h1> 
      <Nieto msg={msg}/>
    </div>
  );
};

const Nieto = (props) => {
  // Desestructuramos props para obtener todos los atributos:
  const { msg } = props;
  return <h1>En nieto: {msg}</h1>;
};

const Padre3B = () => {
  // Establecemos un estado de mensaje:
  const [mensaje, setMensaje] = useState("Estado inicial");

  // Definimos una función que nos permita ingresar un nuevo mensaje
  // y actualizarlo en nuestros hijos:
  const changeState = () => {
    const Mensajenuevo = prompt("Ingresa un nuevo mensaje");
    setMensaje(Mensajenuevo);
  };

  return (
    <div>
      <h3>Pasamos información de padre a varios hijos:</h3>
      <p>
        Al actualizar el estado del componente padre, los datos se actualizan en
        todos sus hijos
      </p>
      <h3>Botón que dispara la función de cambio de estado:</h3>

      <button onClick={() => changeState()}> Cambio de estado </button>
      <HijoA msg={mensaje} />
      <HijoB msg={mensaje}/>
    </div>
  );
};

export default Padre3B;
