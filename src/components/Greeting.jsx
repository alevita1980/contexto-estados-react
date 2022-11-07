import {useContext} from 'react';
import {CurrentUserContext} from './MyProviders';

function Greeting() {
    
   const {currentUser} = useContext(CurrentUserContext)
     return (
       <p>Ud se ha logeado como {currentUser.name}.</p>
     )
   }
export default Greeting;   