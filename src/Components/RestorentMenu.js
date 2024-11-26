import useRestorentMenu from "../utils/useRestorentMenu";
import Simmer from "./simmer";
import { useParams } from "react-router-dom";
import RestorentCategory from "./RestorentCategory";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestorentMenu = () => {
    const { resId } = useParams()

    const resInfo = useRestorentMenu(resId);

    const [showIndex, setshowIndex] = useState(0);

    const OnlineStatus = useOnlineStatus();

    if (OnlineStatus === false)
        return (
            <h1>
                Looks like you are offline! pleese check your internet
            </h1>
        )

    if (resInfo === null) return <Simmer />;

    const { name, cloudinaryImageId, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};

    const ItemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log("categories:", categories.filter(c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
    //.filter(c=> c.card?.["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log("resInfo:", resInfo);
    console.log("ItemCards:", ItemCards);


    return (
        <div className="menu text-center">
            <h1 className="font-bold text-lg">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines}</h3>
            <h3 className="font-bold text-lg">{costForTwoMessage}</h3>
            <h2 className="font-bold text-lg">menu</h2>

            {categories.map((category, index) => (
                <RestorentCategory data={category?.card}
                    showItems={index == showIndex ? true : false}
                    setshowIndex={() => setshowIndex(index)} />
            ))}
        </div>
    );
};

export default RestorentMenu;