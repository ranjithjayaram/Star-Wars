import React, { useState } from "react";
import '../styles/Styles.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function Header() {
    
    return (
        <div className="header">
            <AppBar position="fixed">
                <Toolbar>
                   
                    <Typography variant="h6" noWrap>
                        StarWars
                     </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )

}
export default Header;