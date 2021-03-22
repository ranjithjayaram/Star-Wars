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
    console.log(pageNo)
    switch(data.menuSelected){
        case 'People':
            return(
                <ShowPeople page={pageNo} setpageNo={setPageNo}></ShowPeople>
            )
        break;
        case 'Planets':
            return(
                <ShowPlanets page={pageNo} setpageNo={setPageNo}></ShowPlanets>
            )
        break;
        case 'Species':
            return(
                <ShowSpecies page={pageNo} setpageNo={setPageNo}></ShowSpecies>
            )
        break;
        case 'Starship':
            return(
                <ShowStarship page={pageNo} setpageNo={setPageNo}></ShowStarship>
            )
        break;
        case 'Vehicle':
            return(
                <ShowVehicles page={pageNo} setpageNo={setPageNo}></ShowVehicles>
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