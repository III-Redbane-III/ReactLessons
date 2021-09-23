import './App.css';
import { useState } from 'react';
import { ChatArea } from './Components/ChatArea/ChatArea';
import { ChatList } from './Components/ChatList/ChatList';


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
  ]);

  const [Chats, setChats] = useState([
    {
      ChatName: "Family",
      id: 1
    },
    {
      ChatName: "Friends",
      id: 2
    },
    {
      ChatName: "Work",
      id: 3
    }
  ]);

 

  return (
    
    <>
      <div className = "ChatBox">
        <div className="ChatListBox">
          <ChatList ChatArr={Chats} />
        </div>
        <div className = "ChatArea">
          <header className = "ChatHeader">Chat</header>
          <ChatArea mes={Messages} mesChange={setMessages} />
        </div>
      </div>
    </>
  );
}

export default App;
