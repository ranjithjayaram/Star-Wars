import React, { useEffect, useState } from "react";
import '../styles/Styles.css';
import Api from '../services/ApiService';
import SummaryCards from './SummaryCards';

const ShowVehicles = data => {
    const [vehicles, setVehicles] = useState();
    const setVehicleData= vehicles=>{
       let newVehicles= vehicles.map(veh=>{
            let vehObj={};
            vehObj.name=veh.name;
            vehObj.Model= veh.model;
            vehObj.Passengers= veh.passengers;
            vehObj.Capacity= veh.cargo_capacity;
            vehObj.Manufacturer= veh.manufacturer
            return vehObj;
        })
        setVehicles(newVehicles);
        //console.log(newVehicles)
    }
    useEffect(() => {
        Api.getAllVehicle(1).then(data => {
           
            setVehicleData(data.results)
        }).catch(err => {
            console.log(err)
        })
    }, data.page)

    return (

        <div style={{width:'80vw', flex:'auto'}}>
            {
                vehicles && (
                    <SummaryCards data={vehicles}></SummaryCards>
                )
            }
        </div>
    )
}

export default ShowVehicles;