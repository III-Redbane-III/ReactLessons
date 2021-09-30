import React from 'react'
import { useState } from 'react';
import { ChatList } from '../ChatList/ChatList';
import { ChatArea } from '../ChatArea/ChatArea'
import { Links } from '../Links/Links';
import { NavPanel } from '../NavPanel/NavPanel';

export const Main = () => {

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
          id: 1,
          ChatName: "Family"
        },
        {
          id: 2,
          ChatName: "Friends"
        },
        {
          id: 3,
          ChatName: "Work"
        }
      ]);
      

    return (
      <>
        <NavPanel />
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
    )
}
