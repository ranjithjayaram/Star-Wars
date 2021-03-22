import React, { useEffect, useState } from "react";
import '../styles/Styles.css';
import Api from '../services/ApiService';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ShowPeople = data => {
    const [people, setPeople] = useState();
    useEffect(() => {
        Api.getAllPeople(1).then(data => {
            console.log(data)
            setPeople(data.results);
        }).catch(err => {
            console.log(err)
        })
    }, data.page)

    return (

        <div>
            {
                people && (
                    people.map((p) => (
                        <div className="listItem">
                            <ListItem button key={p.name} >
                                <ListItemText primary={p.name} />
                            </ListItem>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default ShowPeople;