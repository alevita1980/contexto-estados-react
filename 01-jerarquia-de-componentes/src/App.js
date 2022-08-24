import './App.css';
import Padre1 from './components/01-padre-hijo';
import Padre2 from './components/02-Hijo-Padre-hook';
import Padre3A from './components/03-A-padre-hijos-nietos';
import Padre3B from './components/03-B-padre-hijos-nietos';
import Padre4 from './components/04-hijo-a-hijo';
import Padre5 from './components/05-captura-de-evento';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Padre1/> */}
      {/* <Padre2/> */}
      {/* <Padre3A/> */}
      {/* <Padre3B/> */}
      {/* <Padre4/> */}
      <Padre5/>
      </header>
    </div>
  );
}

export default App;
