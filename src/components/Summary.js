import React, { useEffect, useState } from "react";
import '../styles/Styles.css';
import Api from '../services/ApiService';
import ShowPeople from './ShowPeople';
import ShowVehicles from './ShowVehicles';
import ShowStarship from './ShowStarship';
import ShowSpecies from './ShowSpecies';
import ShowPlanets from './ShowPlanets';
const Summary = data => {
    
    const [pageNo, setPageNo] = useState(1);
    switch(data.menuSelected){
        case 'People':
            return(
                <ShowPeople page={pageNo}></ShowPeople>
            )
        break;
        case 'Planets':
            return(
                <ShowPlanets page={pageNo}></ShowPlanets>
            )
        break;
        case 'Species':
            return(
                <ShowSpecies page={pageNo}></ShowSpecies>
            )
        break;
        case 'Starship':
            return(
                <ShowStarship page={pageNo}></ShowStarship>
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