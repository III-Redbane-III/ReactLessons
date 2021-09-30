import React from 'react';
import { List } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';

export const Links = () => {
    return (
        <List>
            <MenuItem><Link to="/">Main</Link></MenuItem>
            <MenuItem><Link to="/profile">Profile</Link></MenuItem>
            <MenuItem><Link to="/chatlist">Chats</Link></MenuItem>
        </List>
    )
}
