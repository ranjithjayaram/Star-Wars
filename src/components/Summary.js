import React, { useEffect, useState } from "react";
import '../styles/Styles.css';
import Api from '../services/ApiService';
import ShowPeople from './ShowPeople';
import ShowVehicles from './ShowVehicles'
const Summary = data => {
    
    const [pageNo, setPageNo] = useState(1);
    //console.log(data.menuSelected)
    switch(data.menuSelected){
        case 'People':
            return(
                <ShowPeople page={pageNo}></ShowPeople>
            )
        break;
        case 'Planets':
            return(
                <ShowPeople page={pageNo}></ShowPeople>
            )
        break;
        case 'Species':
            return(
                <ShowPeople page={pageNo}></ShowPeople>
            )
        break;
        case 'Starship':
            return(
                <ShowPeople page={pageNo}></ShowPeople>
            )
        break;
        case 'Vehicle':
            return(
                <ShowVehicles page={pageNo}></ShowVehicles>
            )
        break;

    }
    return (
        <div className="summary">
            This is Summary
        </div>
    )
}


export default Summary;