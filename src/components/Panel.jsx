import {useContext} from 'react';
import {ThemeContext} from './MyProviders';

  function Panel({ title, children }) {
    
   const theme = useContext(ThemeContext);
   const className = 'panel-' + theme;
   return (
     <section className={className}>
       <h1>{title}</h1>
       {children}
     </section>
   )
 }
export default Panel; 