import React, { useEffect, useState } from "react";
import '../styles/Styles.css';
import Api from '../services/ApiService';
import SummaryCards from './SummaryCards';

const ShowPeople = data => {
    const [people, setpeople] = useState();
    const setPeopleData= people=>{
       let newObj= people.map(obj=>{
           console.log(obj)
            let peopleObj={};
            peopleObj.name=obj.name;
            peopleObj.Height = obj.height;
            peopleObj.BirthYear= obj.birth_year;
            peopleObj.Eye= obj.eye_color;
            peopleObj.Gender= obj.gender
            return peopleObj;
        })
        setpeople(newObj);
    }
    useEffect(() => {
        Api.getAllPeople(1).then(data => {
            setPeopleData(data.results)
        }).catch(err => {
            console.log(err)
        })
    }, data.page)

    return (

        <div style={{width:'80vw', flex:'auto'}}>
            {
                people && (
                    <SummaryCards data={people}></SummaryCards>
                )
            }
        </div>
    )
}

export default ShowPeople;