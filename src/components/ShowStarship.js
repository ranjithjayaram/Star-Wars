import React, { useEffect, useState } from "react";
import '../styles/Styles.css';
import Api from '../services/ApiService';
import SummaryCards from './SummaryCards';

const ShowStarship= data=>{
    const [starShips, setStarships] = useState();
    const setStarshipData= starship=>{
       let newShips= starship.map(star=>{
            let starObj={};
            starObj.name=star.name;
            starObj.Model= star.model;
            starObj.Passengers= star.passengers;
            starObj.Capacity= star.cargo_capacity;
            starObj.Manufacturer= star.manufacturer
            return starObj;
        })
        setStarships(newShips);
    }
    useEffect(() => {
        Api.getAllShip(1).then(data => {
            setStarshipData(data.results)
        }).catch(err => {
            console.log(err)
        })
    }, data.page)

    return (

        <div style={{width:'80vw', flex:'auto'}}>
            {
                starShips && (
                    <SummaryCards data={starShips}></SummaryCards>
                )
            }
        </div>
    )
}

export default ShowStarship;