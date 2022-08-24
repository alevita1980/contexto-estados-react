import './App.css';
import Padre1 from './components/01-padre-hijo';
import Padre2 from './components/02-Hijo-Padre-hook';
import Padre3A from './components/03-A-padre-hijos-nietos';
import Padre3B from './components/03-B-padre-hijos-nietos';
import Padre4 from './components/04-hijo-a-hijo';
import Padre5 from './components/05-captura-de-evento';
import FormularioSimple from './components/06-formulario-simple';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState("My Username");
  const [password, setPassword] = useState("MySuperSecretPassword");
  return (
    <div className="App">
      <header className="App-header">
      {/* <Padre1/> */}
      {/* <Padre2/> */}
      {/* <Padre3A/> */}
      {/* <Padre3B/> */}
      {/* <Padre4/> */}
      {/* <Padre5/> */}
      {/* <h3>Ejemplo 6:</h3>
      <h4>Username: {username}</h4>
      <h4>Password: {password}</h4>
      <FormularioSimple 
      username = {username}
      password = {password}
      userNameHook={setUsername} 
      passwordHook={setPassword}/> */}

      </header>
    </div>
  );
}

export default App;
