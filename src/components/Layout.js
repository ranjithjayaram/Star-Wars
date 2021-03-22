import React, { useState } from "react";
import '../styles/Styles.css';
import Sidebar from './Sidebar';
import Summary from './Summary';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Layout(data) {
    const menu=['Planets','Species','People','Starship','Vehicle']
    const [sidebarStatus, setSidebarStatus] = useState(true);
    const [menuSelected, setSelectedMenu]= useState(menu[0]);
    const toggleSidebar = () => {
        setSidebarStatus(!sidebarStatus);
    }
    console.log(menuSelected)
    return (
        <div className="layout">
            {
                !sidebarStatus && (
                    <div>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleSidebar}
                            edge="start"
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                )
            }
            {sidebarStatus && (
                <Sidebar sidebarStatus={sidebarStatus} toggleSidebar={toggleSidebar} setSelectedMenu={setSelectedMenu} menu={menu}></Sidebar>
            )}
            <Summary menuSelected={menuSelected}></Summary>

        </div>
    )
}

export default Layout;