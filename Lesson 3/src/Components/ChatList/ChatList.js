import React from 'react';
import { Button, List, ListItem, ListItemButton, ListItemText } from '@material-ui/core';


export const ChatList = (props) => {

    
    return (
        <List className="ChatList">
            {props.ChatArr.map((chat) => 
                <ListItem key={chat.id} className="ChatListChat">
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemText key={chat.ChatName}>{chat.ChatName}</ListItemText>
                    </ListItemButton>
                </ListItem>
            )}
        </List>
    )   
}