import React, { useState } from 'react'
import '../styles/Styles.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
export default function DrawerContent(data) {
    
    return (
        <div>
            <div style={{textAlign:"end"}}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={data.toggleSidebar}
                edge="start"
            >
                <MenuIcon />
            </IconButton>
            </div>
            <div className="sidebar">

                <List>
                    {data.menu.map((text) => (
                        <div className="listItem">
                            <ListItem button key={text} >
                                <ListItemText primary={text} onClick={()=>data.setSelectedMenu(text)}/>
                            </ListItem>
                        </div>
                    ))}
                </List>
            </div>
        </div>

    )
}