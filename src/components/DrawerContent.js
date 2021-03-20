import React from 'react'
import '../styles/Styles.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function DrawerContent() {

    return (
        <div className="sidebar">
            <List>
                {['Planet', 'Species', 'People', 'Starship', 'Vehicle'].map((text) => (
                    <div className="listItem">
                        <ListItem button key={text} >
                            <ListItemText primary={text} />
                        </ListItem>
                    </div>
                ))}
            </List>
        </div>
    )
}