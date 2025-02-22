import {useContext} from 'react';
import {ThemeContext} from './MyProviders';

function Button({ children, disabled, onClick }) {


   const theme = useContext(ThemeContext);
   const className = 'button-' + theme;
   return (
     <button
       className={className}
       disabled={disabled}
       onClick={onClick}
     >
       {children}
     </button>
   );
 }
export default Button; 