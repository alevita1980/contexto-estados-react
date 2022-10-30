import {useState} from 'react';
import { createContext } from 'react';

export  const ThemeContext = createContext();
export const CurrentUserContext = createContext();

function MyProviders({ children, theme, setTheme }) {
  
  const [currentUser, setCurrentUser] = useState()
    
    return (
  
      <ThemeContext.Provider value={theme}>
        <CurrentUserContext.Provider
         value={{currentUser, setCurrentUser}}
        >
          {children}
        </CurrentUserContext.Provider>
      </ThemeContext.Provider>
    );
  }
  export default MyProviders;
  