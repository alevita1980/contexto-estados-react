import Hijo2 from './02-contextB';
import { useState, createContext } from "react";

export const ContextValue = createContext();

const Hijo1=()=> {
    const [variable, setVariable] = useState("Estado inicial");
    return (
        <ContextValue.Provider value={{variable, setVariable}}>    
        <div><Hijo2/></div>
        </ContextValue.Provider>
    );
  }

export default Hijo1;