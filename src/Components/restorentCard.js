import { CDN_API } from "../utils/constant";

const RestorentCard = (props) =>{
    const{resData} = props;
    return(
        <div className="res-card h-[280px] w-[260px] m-5 rounded-[10px] bg-[#f0f0ff] overflow-hidden">
            <img className="w-full h-[200px]" src={CDN_API+resData.info.cloudinaryImageId}></img>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines}</h4>
            <h3>{resData.info.avgRating} stars</h3>
        </div>
    )
}

export default RestorentCard