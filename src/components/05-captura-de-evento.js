import { useState } from "react";

const Hijo = (props) => {
  const { text, textHook } = props;
  return (
    <>
      <h2>
        Capturamos un evento producido en un hijo y enviamos los datos a su
        padre
      </h2>
      <h3>Ingrese texto en el siguiente campo: </h3>
      <input style={{width: "400px",height: "40px",fontSize: "30px",color: "red",}}
        type="text"
        onChange={(e) => {textHook(e.target.value);}}
        value={text}
      ></input>
    </>
  );
};

const Padre5 = () => {
  const [text, setText] = useState("Estado inicial");
  return (
    <div
      // Podemos aprovechar los eventos de siempre:
      onLoad={console.log(text)}
      onPaste={(e) => console.log(e.target.value)}
    >
      <Hijo default={text} textHook={(msg) => setText(msg)} />
      <h3>Valor de la variable: {text}</h3>
    </div>
  );
};

export default Padre5;
