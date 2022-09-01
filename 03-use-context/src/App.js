import "./App.css";
import { createContext } from "react";
import Context1 from "./components/01-context";
import Hijo1 from "./components/02-contextA";

// Create a Context
export const WelcomeToContext = createContext();
// { Provider, Consumer }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WelcomeToContext.Provider value={'Carmelo!'}>
          <Context1/>
          <Hijo1/>
        </WelcomeToContext.Provider>
      </header>
    </div>
  );
}

export default App;
