import React, { useEffect, useState } from "react";
import '../styles/Styles.css';
import Api from '../services/ApiService';
import SummaryCards from './SummaryCards';

const ShowPlanets= data=>{
    const [planets, setplanets] = useState();
    const setPlanetsData= planets=>{
       let newObj= planets.map(obj=>{
           console.log(obj)
            let planetsObj={};
            planetsObj.name=obj.name;
            planetsObj.Diameter = obj.diameter;
            planetsObj.Gravity= obj.gravity;
            planetsObj.Population= obj.population;
            planetsObj.Climate= obj.climate
            return planetsObj;
        })
        setplanets(newObj);
    }
    useEffect(() => {
        Api.getAllPlanets(1).then(data => {
            setPlanetsData(data.results)
        }).catch(err => {
            console.log(err)
        })
    }, data.page)

    return (

        <div style={{width:'80vw', flex:'auto'}}>
            {
                planets && (
                    <SummaryCards data={planets}></SummaryCards>
                )
            }
        </div>
    )
}

export default ShowPlanets;