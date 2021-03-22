import React, { useEffect, useState } from "react";
import '../styles/Styles.css';
import Api from '../services/ApiService';
import SummaryCards from './SummaryCards';
import Pagination from './Pagination';

const ShowSpecies = data => {
    const [species, setspecies] = useState();
    const [currPage, setCurrPage] = useState(data.page);
    const [pagination, setPagination] = useState();
    const [nextPage, setNextPage] = useState(false);
    const [prevPage, setPrevPage] = useState(false);
    const setSpeciesData = species => {
        let newObj = species.map(sp => {
            let speciesObj = {};
            speciesObj.name = sp.name;
            speciesObj.Classification = sp.classification;
            speciesObj.Lifespan = sp.average_lifespan;
            speciesObj.Designation = sp.designation;
            speciesObj.Language = sp.language
            return speciesObj;
        })
        setspecies(newObj);
    }
    useEffect(() => {
        Api.getAllSpecies(currPage).then(res => {
            setSpeciesData(res.results);
            setPagination(Math.ceil(res.count));
        }).catch(err => {
            console.log(err)
        })
    }, [currPage])

    return (

        <div style={{ width: '80vw', flex: 'auto' }}>
            {
                species && (
                    <div>
                        <SummaryCards data={species}></SummaryCards>
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

export default ShowSpecies;