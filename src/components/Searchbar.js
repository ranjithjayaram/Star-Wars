import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
const Searchbar = data => {
    const [searchtxt, setSearchtxt]= useState();
    console.log(searchtxt)
    const search = text => {
        data.searchText(text)
    }
    const onNameChange=(ev)=>{
        setSearchtxt(ev.target.value)
    }
    const reset=()=>{
        setSearchtxt('')
        data.reset()
    }
    return (
        <div className="searchbar">
            {/* <input type="text"></input> */}
            <Input
                placeholder="Search Text"
                onChange={onNameChange}
                value={searchtxt}
            />
            <button onClick={() => search(searchtxt)}>Search</button>
            <button onClick={() => reset()}>Reset</button>
        </div>
    )
}
export default Searchbar;