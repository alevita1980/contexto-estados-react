import { useState } from "react";

const HijoA = (props) => {
  // Desestructuramos props para obtener todos los atributos:
  const { hijoOnClick, variable } = props;
  const mensajeDeRetorno = "Estado actualizado desde A";
  return (
    <div style={{ border: "2px solid white", padding: "5px" }}>
      <h4>Estado de Hijo A: {variable}</h4>
      <button style={{ width: "240px", height: "60px" }}
        onClick={() => {
          hijoOnClick(mensajeDeRetorno);
        }}
      >
        Envíale los datos a mi hermano ;)
      </button>
    </div>
  );
};

const HijoB = (props) => {
  // Desestructuramos props para obtener todos los atributos:
  const { hijoOnClick, variable } = props;
  const mensajeDeRetorno = "Estado actualizado desde B";
  return (
    <div style={{ border: "2px solid white", padding: "5px" }}>
      <h4>Estado de Hijo B: {variable}</h4>
      <button style={{ width: "240px", height: "60px" }}
        onClick={() => {
          hijoOnClick(mensajeDeRetorno);
        }}
      >
        Envíale los datos a mi hermano ;)
      </button>
    </div>
  );
};

const Padre4 = () => {
  // Creamos un estado para el mensaje y la función que actualiza su estado
  // con useState:
  const [variableGlobal, setVariableGlobal] = useState("Estado inicial");

  return (
    <div>
      <h4>Estado en el padre: {variableGlobal}</h4>
      <HijoA
        // Utilizamos setVariableGlobal como función de callback:
        hijoOnClick={(estado) => setVariableGlobal(estado)}
        variable={variableGlobal}
      />
      <HijoB
        // Utilizamos setVariableGlobal como función de callback:
        hijoOnClick={(estado) => setVariableGlobal(estado)}
        variable={variableGlobal}
      />
    </div>
  );
};

export default Padre4;
