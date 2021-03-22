import React, { useEffect, useState } from "react";
import '../styles/Styles.css';
import Api from '../services/ApiService';
import SummaryCards from './SummaryCards';
import Pagination from './Pagination';
import Searchbar from './Searchbar';

const ShowPeople = data => {
    const [people, setpeople] = useState();
    const [displayPeople, setDisplayPeople]= useState();
    const [currPage, setCurrPage] = useState(data.page);
    const [pagination, setPagination] = useState();
    const [nextPage, setNextPage] = useState(false);
    const [prevPage, setPrevPage] = useState(false);
    const setPeopleData = people => {
        let newObj = people.map(obj => {
            let peopleObj = {};
            peopleObj.name = obj.name;
            peopleObj.Height = obj.height;
            peopleObj.BirthYear = obj.birth_year;
            peopleObj.Eye = obj.eye_color;
            peopleObj.Gender = obj.gender
            return peopleObj;
        })
        setpeople(newObj);
        setDisplayPeople(newObj)
    }
    const searchText= text=>{
       if(text){
        const newP= people.filter(element => {
            return JSON.stringify(element).includes(text)
        });
        setDisplayPeople(newP);
       }
       
    }
    const reset=()=>{
        setDisplayPeople(people)
    }
    useEffect(() => {
        Api.getAllPeople(currPage).then(res => {
            setPeopleData(res.results);
            setPagination(Math.ceil(res.count));
        }).catch(err => {
            console.log(err)
        })
    }, [currPage])

    return (

        <div style={{ width: '80vw', flex: 'auto' }}>
            {
                displayPeople && (
                    <div>
                        <Searchbar searchText={searchText} reset={reset}></Searchbar>
                        <SummaryCards data={displayPeople}></SummaryCards>
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

export default ShowPeople;