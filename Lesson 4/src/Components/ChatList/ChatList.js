import React from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@material-ui/core';


export const ChatList = (ChatArr) => {

    
    return (
        <List className="ChatList">
            
                <ListItem key={ChatArr.id} className="ChatListChat">
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemText key={ChatArr.ChatName}>{ChatArr.ChatName}</ListItemText>
                    </ListItemButton>
                </ListItem>
            
        </List>
    )   
}

{/* <List className="ChatList">
            
                <ListItem key={ChatArr.id} className="ChatListChat">
                    <ListItemButton component="a" href="#simple-list">
                        <ListItemText key={ChatArr.ChatName}>{ChatArr.ChatName}</ListItemText>
                    </ListItemButton>
                </ListItem>
            
        </List> */}




        // <List className="ChatList">
        //     {ChatArr.map((chat) => 
        //         <ListItem key={chat.id} className="ChatListChat">
        //             <ListItemButton component="a" href="#simple-list">
        //                 <ListItemText key={chat.ChatName}>{chat.ChatName}</ListItemText>
        //             </ListItemButton>
        //         </ListItem>
        //     )}
        // </List>