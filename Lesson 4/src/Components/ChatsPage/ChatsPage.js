import React from 'react';
import { useState } from 'react';
import { List, ListItem, ListItemButton } from '@material-ui/core';

function ChatsPage() {

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
        <div>
            <header>Chats</header>
            <List>
                {Chats.map((chats) => 
                <ListItem>
                    <ListItemButton component="a" href="#simple-list">{chats.ChatName}</ListItemButton>
                </ListItem>
                )}
            </List>
        </div>
    )
}

export default ChatsPage;
