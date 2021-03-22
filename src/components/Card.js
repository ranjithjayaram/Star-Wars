import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
const Card = data => {
    const { name, ...objProp } = data.item;
    console.log(objProp);
    return (
        <div className="card">
            <div className="cardhead">
                <label> {data.item.name}</label>
                <DeleteIcon />
            </div>
            <div className="cardbody">
                {
                    Object.keys(objProp).map(key => {
                        return (
                            <div className="cardprop">

                                <label style={{ width: "40%" }}>{key}</label>
                                <label style={{ width: "60%" }}>{objProp[key]}</label>

                                {/*  <td>{key}</td>
                            <td>{objProp[key]}</td> */}

                            </div>
                        )
                    })
                }
            </div>
            <div className="cardbottom">

            </div>

        </div>
    )
}
export default Card;