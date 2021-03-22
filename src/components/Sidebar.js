import React , {useState} from 'react'
import '../styles/Styles.css';
import Drawer from '@material-ui/core/Drawer';
import DrawerContent from './DrawerContent';


export default function Sidebar(data) {
    
    return (
        <div className="sidebar">
           
            <Drawer
                open={data.sidebarStatus}
                variant="persistent"
                onClose={() => {

                }}>
                <DrawerContent toggleSidebar={data.toggleSidebar} menu={data.menu} setSelectedMenu={data.setSelectedMenu}/>
            </Drawer>
        </div>

    )
}