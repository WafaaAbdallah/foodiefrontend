import {} from 'react';import { useSelector } from "react-redux";
import { useState } from "react";



export default (props) => {
    const ingredients = useSelector((store)=>store.ingredients)
    return (
        <div>
            {
                ingredients.map((data)=>{
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
import {} from 'react-redux';