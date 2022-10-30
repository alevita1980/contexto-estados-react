import  { useContext } from 'react';
import {WelcomeToContext} from '../App'

const Context1=()=> {
    const variable = useContext(WelcomeToContext);
    return (
        <div>Bienvenido a este módulo {variable}.</div>
    );
  }

// const Context1=()=> {
//   const variable = useContext(WelcomeToContext);
//   return (
//     <WelcomeToContext.Consumer>
//       <div>Bienvenido a este módulo {variable}.</div>
//     </WelcomeToContext.Consumer>
//   );
// }

export default Context1;