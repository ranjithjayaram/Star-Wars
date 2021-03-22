import React from 'react';
import Card from './Card';
const SummaryCards = data => {
return(
    <div className="summarylayout">
        {
            data.data.map((p) => (
               <Card item={p}></Card>
            ))
        }
    </div>
)
}
export default SummaryCards;