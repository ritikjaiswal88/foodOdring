import ItemList from "./ItemList";
import { useState } from "react";


const RestorentCategory =({data, showItems, setshowIndex})=>{

    console.log("categories:", data);

    const handelClick =()=>{
        setshowIndex();
    }
    
    return(
        <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer"
            onClick={handelClick} >
            <span className="font-bold text-lg">
                {data.card.title} ({data.card.itemCards.length})
            </span>
            <span>⬇️</span>
            </div>
            {showItems && <ItemList items={data.card.itemCards}/>}
        </div>
         
        </div>
    )
};

export default RestorentCategory;