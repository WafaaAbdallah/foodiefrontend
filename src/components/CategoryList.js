import { useSelector } from "react-redux";
import { useState } from "react";



export default () => {
    const categories = useSelector((store)=>store.categories)
    return (
        <div>
            {
                categories.map((data)=>{
                   return(
                       <div>
                            <img alt={data.name} src={data.image} />
                            <p>{data.name}</p>
                       </div>
                   )
                })
            }
        </div>
    );
}