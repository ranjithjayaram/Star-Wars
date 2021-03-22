import React, { useEffect, useState } from "react";
import '../styles/Styles.css';
import Api from '../services/ApiService';
import SummaryCards from './SummaryCards';
import Pagination from './Pagination';

const ShowPlanets= data=>{
    const [planets, setplanets] = useState();
    const [currPage, setCurrPage] = useState(data.page);
    const [pagination, setPagination] = useState();
    const [nextPage, setNextPage] = useState(false);
    const [prevPage, setPrevPage] = useState(false);
    const setPlanetsData= planets=>{
       let newObj= planets.map(obj=>{
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
        Api.getAllPlanets(currPage).then(res => {
            setPlanetsData(res.results);
            setPagination(Math.ceil(res.count));
        }).catch(err => {
            console.log(err)
        })
    }, [currPage])

    return (

        <div style={{width:'80vw', flex:'auto'}}>
            {
                planets && (
                    <div>
                    <SummaryCards data={planets}></SummaryCards>
                    {
                            pagination && (
                                <Pagination pages={pagination} currPage={currPage} setpageNo={setCurrPage}></Pagination>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default ShowPlanets;