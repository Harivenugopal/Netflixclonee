import { ChatEngine} from 'react-chat-engine';
import LoginForm from './Components/LoginForm'
import ChatFeed from './Components/ChatFeed'
import './App.css';

const App =()=>{
   if(!localStorage.getItem('username'))return<LoginForm/>

  return(
    <ChatEngine
    height ="100vh"
    projectID="39816118-2acc-4440-836d-e60624d13212"
    privateKey="462b2d32-48a0-4b0a-aca0-28452872c27c"
    userName={localStorage.getItem('username')}
    userScreat={localStorage.getItem('password')}
    renderChatFeed={(chaAppProps)=> <ChatFeed {...chaAppProps}/>
    
    }
    
    />
  );
}

export default App;