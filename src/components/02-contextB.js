import { useContext } from "react";
import { ContextValue } from "./02-contextA";

const Hijo2 = () => {
  const {variable, setVariable } = useContext(ContextValue);
  return (
    <div style={style1} onClick={()=>{setVariable(prompt("Introduzca un nuevo valor"))}}>
      <Hijo3 /> {variable}
    </div>
  );
};

const Hijo3 = () => {
  const {variable, setVariable} = useContext(ContextValue);
  return (
    <div style={style2} onClick={()=>{setVariable(prompt("Introduzca un nuevo valor"))}}>
      <Hijo4 /> {variable}
    </div>
  );
};
const Hijo4 = () => {
  const {variable, setVariable} = useContext(ContextValue);
  return (
    <div style={style3} onClick={()=>{setVariable(prompt("Introduzca un nuevo valor"))}}>
      <Hijo5 /> {variable}  
    </div>
  );
};
const Hijo5 = () => {
  const {variable, setVariable} = useContext(ContextValue);
  return <div style={style4} onClick={()=>{setVariable(prompt("Introduzca un nuevo valor"))}}
  >Estado de la variable: {variable}</div>;
};

const style1 = {
  width: "400px",
  height: "400px",
  border: "4px solid red",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const style2 = {
  width: "350px",
  height: "350px",
  border: "4px solid green",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const style3 = {
  width: "300px",
  height: "300px",
  border: "4px solid blue",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const style4 = {
  width: "250px",
  height: "250px",
  border: "4px solid gray",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default Hijo2;
