import { useState } from "react";
import { useDispatch } from "react-redux";
import { CDN_API } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const CartList = ({ items }) => {
    const dispatch = useDispatch();
    const [visibleDescriptions, setVisibleDescriptions] = useState({});

    const handleAddItem = (item) => {
        // Dispatch an item
        dispatch(addItem(item));
    };

    const toggleDescription = (id) => {
        // Toggle the description visibility for the item with the given ID
        setVisibleDescriptions((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex mx-auto gap-10 w-[30rem] ">
                    <div >
                        <div className="flex justify-between gap-5  max-w-[26rem]">
                            <div className="w-1/2 ">
                                <div className="flex flex-col mt-3 w-[17rem]">
                                    <span>{item?.card?.info?.name}</span>
                                    <span> ₹{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                                </div>

                            </div>
                            <div className="w-[8rem]  rounded-lg overflow-hidden bg-cover">
                                <div className="absolute">
                                    <button
                                        className="p-2 bg-black text-white overflow-hidden rounded-lg mx-16"
                                        onClick={() => handleAddItem(item)}
                                    >
                                        ADD
                                    </button>
                                </div>
                                <img src={CDN_API + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
                            </div>
                        </div>
                        <div className="description ml-8 w-2/3">
                            <h3 className=" cursor-pointer flex items-center " onClick={() => toggleDescription(item.card.info.id)}>
                                Description{" "}
                                {visibleDescriptions[item.card.info.id] ? (
                                    <i className="ri-arrow-up-s-line"></i>
                                ) : (
                                    <i className="ri-arrow-down-s-line"></i>
                                )}
                            </h3>
                            {visibleDescriptions[item.card.info.id] && (
                                <p className="text-xs">{item?.card?.info?.description}</p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartList;