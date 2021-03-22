import React, { useEffect, useState } from "react";
import '../styles/Styles.css';
import Api from '../services/ApiService';
import SummaryCards from './SummaryCards';
import Pagination from './Pagination';
import Searchbar from './Searchbar';

const ShowVehicles = data => {
    const [vehicles, setVehicles] = useState();
    const [displayVehicles, setDisplayVehicles]= useState();
    const [currPage, setCurrPage] = useState(data.page)
    const [pagination, setPagination] = useState();
    const [nextPage, setNextPage] = useState(false);
    const [prevPage, setPrevPage] = useState(false);
    console.log(currPage)
    const setVehicleData = vehicles => {
        let newVehicles = vehicles.map(veh => {
            let vehObj = {};
            vehObj.name = veh.name;
            vehObj.Model = veh.model;
            vehObj.Passengers = veh.passengers;
            vehObj.Capacity = veh.cargo_capacity;
            vehObj.Manufacturer = veh.manufacturer
            return vehObj;
        })
        setVehicles(newVehicles);
        setDisplayVehicles(newVehicles)
    }
    const searchText = text => {
        if (text) {
            const newP = vehicles.filter(element => {
                return JSON.stringify(element).includes(text)
            });
            setDisplayVehicles(newP);
        }

    }
    const reset = () => {
        setDisplayVehicles(vehicles)
    }
    useEffect(() => {
        Api.getAllVehicle(currPage).then(res => {
            setVehicleData(res.results)
            setPagination(Math.ceil(res.count))
        }).catch(err => {
            console.log(err)
        })
    }, [currPage])

    return (

        <div style={{ width: '80vw', flex: 'auto' }}>
            {
                displayVehicles && (
                    <div>
                        <Searchbar searchText={searchText} reset={reset}></Searchbar>
                        <SummaryCards data={displayVehicles}></SummaryCards>
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

export default ShowVehicles;