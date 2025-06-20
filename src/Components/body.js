import RestorentCard from "./restorentCard";
import ToprateadRestorent from "./ToprateadRestorent";
import CateroryImage from "./CategoryImage";
import { useEffect, useState } from "react";
import { MAIN_API } from "../utils/constant";
import { Link } from "react-router-dom";
import Simmer from "./simmer";

const Body = () => {
    const [restorentList, setRestorentList] = useState([]);
    const [filteredRestorentList, setFilteredRestorentList] = useState([]);
    const [imageItem, setimageItem] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        // Filter list only after restorentList is updated
        setFilteredRestorentList(filtredList());
    }, [restorentList]);

    const fetchData = async () => {
        const data = await fetch(MAIN_API);
        const json = await data.json();

        console.log(json);
        setimageItem(json);

        // Optional chaining
        setRestorentList(
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

    };

    const filtredList = () => {
        return restorentList.filter(
            (res) => res.info.avgRating > 4.3
        );
    };

    if (restorentList.length === 0) {
        return <Simmer />;
    }

    console.log("this is list of restorent:", restorentList);
    
    return (
        <div className="body">
            <CateroryImage ImageItem={imageItem} />
            <ToprateadRestorent filteredRestorentList={filteredRestorentList} />
            
            <div className="res-container2 flex flex-col justify-start  mx-[150px] border-b-2 border-[#D7D8D9]  relative">
            <h1 className="text-[30px] font-bold ">Restaurants with online food delivery in your area</h1>
                <div className="res-container2 flex justify-center flex-wrap ">
                    {restorentList.map((restaurant) => (
                        <Link to={"/restaurent/" + restaurant?.info?.id} key={restaurant.id}>
                            <RestorentCard resData={restaurant} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Body;
