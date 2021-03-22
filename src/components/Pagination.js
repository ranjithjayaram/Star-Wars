import React from 'react';

const Pagination = data => {
    
    let pages = Math.ceil(data.pages / 10);
    const incrementPage = () => {
        data.setpageNo(data.currPage + 1)
    }
    const decrementPage = ()=>{
        if(data.currPage > 0)
        data.setpageNo(data.currPage - 1)
        else
        data.setpageNo(0)
    }
    const setPageNo= (pageNo)=>{
        debugger;
        if(pageNo== NaN)
        data.setpageNo(0)
        else
        data.setpageNo(pageNo)
    }
    return (
        <div className="pagination">
            <button className="paginationbtn" onClick={decrementPage}>{"<<"}</button>
            {[...Array(pages)].map((e, i) =>

                <div>
                    <button className="paginationbtn" onClick={()=>setPageNo(i+1)}>{i+1}</button>
                </div>
            )}
            <button className="paginationbtn" onClick={incrementPage}>{">>"}</button>
        </div>
    )
}

export default Pagination;