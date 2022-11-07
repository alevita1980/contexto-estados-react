import {useState, useContext} from 'react';
import {CurrentUserContext} from './MyProviders';
import Button from './Button';

function LoginForm() {
    
 const {setCurrentUser} = useContext(CurrentUserContext)
 
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const canLogin = firstName !== '' && lastName !== '';
   return (
     <>
       <label>
         Nombre{': '}
         <input
           required
           value={firstName}
           onChange={(e) => setFirstName(e.target.value)}
         />
       </label>
       <label>
         Apellido{': '}
         <input
         required
           value={lastName}
           onChange={(e) => setLastName(e.target.value)}
         />
       </label>
       <Button
         disabled={!canLogin}
         onClick={() => {
           setCurrentUser({
             name: firstName + ' ' + lastName
           });
         }}
       >
         Log in
       </Button>
       {!canLogin && <i>Rellene ambos campos.</i>}
     </>
   );
 }
export default LoginForm; 