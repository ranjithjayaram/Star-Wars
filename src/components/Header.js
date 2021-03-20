import React, { useState } from "react";
import '../styles/Styles.css';
import Sidebar from './Sidebar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
function Header() {
    const [sidebarStatus, setSidebarStatus] = useState(true);

    const toggleSidebar = () => {
        setSidebarStatus(!sidebarStatus);
    }
    return (
        <div className="header">
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleSidebar}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        StarWars
                     </Typography>
                </Toolbar>
            </AppBar>
            <Sidebar sidebarStatus={sidebarStatus}></Sidebar>

        </div>
    )

}
export default Header;