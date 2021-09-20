import './App.css';
import { ChatArea } from './Components/ChatArea/ChatArea';
import { useState } from 'react';


function App() {

  const [Messages, setMessages] = useState([
    { 
      author: "Jake",
      message: "Hola"
    },
    {
      author: "Spike",
      message: "Hello"
    },
    {
      author: "Mike",
      message: "Привет"
    }
  ])

  return (
    
    <>
    
      <div className = "ChatBox">
        <div className = "ChatArea">
          <header className = "ChatHeader">Chat</header>
          <ChatArea mes={Messages} mesChange={setMessages}/>
        </div>
      </div>
    </>
  );
}

export default App;
