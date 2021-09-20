import './App.css';
import { ChatArea } from './Components/ChatArea/ChatArea';
import { MesGen } from './Components/MesGen/MesGen';
import { useState } from 'react';


function App() {

  const [Messages, setMessages] = useState([
    {
      id: 1,
      author: "Jake",
      message: "Hola"
    },
    {
      id: 2,
      author: "Spike",
      message: "Hello"
    },
    {
      id: 3,
      author: "Mike",
      message: "Привет"
    }
  ])

  return (
    
    <>
    
      <div className = "ChatBox">
        <div className = "ChatArea">
          <header className = "ChatHeader">Chat</header>
          <ChatArea mes={Messages}/>
          <MesGen mes={Messages} add={setMessages}/>
        </div>
      </div>
    </>
  );
}

export default App;
