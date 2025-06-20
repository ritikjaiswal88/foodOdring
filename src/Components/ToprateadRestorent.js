import { useRef } from "react";
import { Link } from "react-router-dom";
import RestorentCard from "./restorentCard";

function ToprateadRestorent({ filteredRestorentList }) {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 200; // Adjust scroll amount as needed
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 200; // Adjust scroll amount as needed
        }
    };

    return (
        <div className="res-container flex flex-col justify-start flex-wrap mx-[150px] border-b-2 border-[#D7D8D9] overflow-hidden relative">
            <h1 className="text-[30px] font-bold">Top restaurant chains</h1>
            <div className="arrow-icon absolute right-0 top-3 flex gap-5 mr-10">
                <i className="ri-arrow-left-line bg-[#D7D8D9] px-2 py-1 rounded-full text-[20px] cursor-pointer" onClick={scrollLeft}></i>
                <i className="ri-arrow-right-line bg-[#D7D8D9] px-2 py-1 rounded-full text-[20px] cursor-pointer" onClick={scrollRight}></i>
            </div>
            <div className="topreted-container flex overflow-x-auto gap-[10px] py-[10px] scroll-smooth" ref={scrollRef}>
                {filteredRestorentList.map((restaurant) => (
                    <Link to={"/restaurent/" + restaurant?.info?.id} key={restaurant.id}>
                        <RestorentCard key={restaurant.id} resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ToprateadRestorent;
