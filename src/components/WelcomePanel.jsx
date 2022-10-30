import {useContext} from 'react';
import {CurrentUserContext} from './MyProviders';
import Panel from './Panel';
import Greeting from './Greeting';
import LoginForm from './LoginForm';

export default function WelcomePanel({ children }) {

    const {currentUser} = useContext(CurrentUserContext)
    
      return (
        <Panel title="Bievenido/a!!">
          {currentUser !== null ?
            <Greeting /> :
            <LoginForm />
          }
        </Panel>
      );
    }
    