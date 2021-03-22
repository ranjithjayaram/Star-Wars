import React, { useEffect, useState } from "react";
import '../styles/Styles.css';
import Api from '../services/ApiService';
import SummaryCards from './SummaryCards';
import Pagination from './Pagination';

const ShowStarship = data => {
    const [starShips, setStarships] = useState();
    const [currPage, setCurrPage] = useState(data.page)
    const [pagination, setPagination] = useState();
    const [nextPage, setNextPage] = useState(false);
    const [prevPage, setPrevPage] = useState(false);
    const setStarshipData = starship => {
        let newShips = starship.map(star => {
            let starObj = {};
            starObj.name = star.name;
            starObj.Model = star.model;
            starObj.Passengers = star.passengers;
            starObj.Capacity = star.cargo_capacity;
            starObj.Manufacturer = star.manufacturer
            return starObj;
        })
        setStarships(newShips);
    }
    useEffect(() => {
        Api.getAllShip(currPage).then(res => {
            setStarshipData(res.results)
            setPagination(Math.ceil(res.count))
        }).catch(err => {
            console.log(err)
        })
    }, [currPage])

    return (

        <div style={{ width: '80vw', flex: 'auto' }}>
            {
                starShips && (
                    <div>
                        <SummaryCards data={starShips}></SummaryCards>
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

export default ShowStarship;