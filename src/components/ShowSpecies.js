import React, { useEffect, useState } from "react";
import '../styles/Styles.css';
import Api from '../services/ApiService';
import SummaryCards from './SummaryCards';

const ShowSpecies= data=>{
    const [species, setspecies] = useState();
    const setSpeciesData= species=>{
       let newObj= species.map(sp=>{
           console.log(sp)
            let speciesObj={};
            speciesObj.name=sp.name;
            speciesObj.Classification= sp.classification;
            speciesObj.Lifespan= sp.average_lifespan;
            speciesObj.Designation= sp.designation;
            speciesObj.Language= sp.language
            return speciesObj;
        })
        setspecies(newObj);
    }
    useEffect(() => {
        Api.getAllSpecies(1).then(data => {
            setSpeciesData(data.results)
        }).catch(err => {
            console.log(err)
        })
    }, data.page)

    return (

        <div style={{width:'80vw', flex:'auto'}}>
            {
                species && (
                    <SummaryCards data={species}></SummaryCards>
                )
            }
        </div>
    )
}

export default ShowSpecies;