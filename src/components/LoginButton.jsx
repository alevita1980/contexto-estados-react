
import Button from './Button'
import {useContext} from 'react';
import {CurrentUserContext} from '../App'

// Importe CurrentUserContext y useContext desde App, desestructure el objeto para usar currentUser y
// setCurrentUser



 // escriba su código aquí y descomente a partir de la linea 12
export default function LoginButton() {
 
 const {currentUser, setCurrentUser} = useContext(CurrentUserContext)

    if (currentUser !== null) {
      return <p>Hola {currentUser.name}, te esperabamos.</p>;
    }
  
    return (
      <Button onClick={() => {
        setCurrentUser( {name:"Diego Simonelli"} )
      }}>Log in</Button>
    );
  }
