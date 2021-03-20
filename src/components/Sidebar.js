import React from 'react'
import '../styles/Styles.css';
import Drawer from '@material-ui/core/Drawer';
import DrawerContent from './DrawerContent';

export default function Sidebar(data) {
    console.log(data)
    return (
        <div className="sidebar">
            <Drawer
                open={data.sidebarStatus}
                variant="persistent"
                onClose={() => {

                }}>
                <DrawerContent />
            </Drawer>
        </div>

    )
}