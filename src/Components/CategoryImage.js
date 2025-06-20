import { useRef } from "react";
import { Link } from "react-router-dom";
import { IMG_API } from "../utils/constant";

function CateroryImage({ ImageItem }) {
    const ImageArr = ImageItem.data.cards[0].card.card.gridElements.infoWithStyle.info;
    console.log("ImageArr",ImageArr);
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            console.log("Scrolling left");  // Debugging log
            scrollRef.current.scrollLeft -= 200;
        }
    };
    
    const scrollRight = () => {
        if (scrollRef.current) {
            console.log("Scrolling right");  // Debugging log
            scrollRef.current.scrollLeft += 200;
        }
    };

    return (
        <div className="res-container flex flex-col justify-start flex-wrap mx-[150px] border-b-2 mt-5 border-[#D7D8D9] overflow-hidden relative">
            <h1 className="text-[30px] font-bold">What's on your mind?</h1>
            <div className="arrow-icon absolute right-0 top-3 flex gap-5 mr-10">
                <i className="ri-arrow-left-line bg-[#D7D8D9] px-2 py-1 rounded-full text-[20px] cursor-pointer" onClick={scrollLeft}></i>
                <i className="ri-arrow-right-line bg-[#D7D8D9] px-2 py-1 rounded-full text-[20px] cursor-pointer" onClick={scrollRight}></i>
            </div>
            <div className="topreted-container flex overflow-x-auto gap-[8px] py-[10px] scroll-smooth" ref={scrollRef}>
                {ImageArr.map((restaurant, index) => (
                    <Link to={"/restaurent/" + restaurant?.info?.id} key={index}>
                        <div className="res-card h-[150px] w-[130px] m-5 rounded-[10px] bg-[#f0f0ff] object-cover overflow-hidden">
                            <img src={`${IMG_API}/${restaurant.imageId}`} alt="restaurant" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CateroryImage;
