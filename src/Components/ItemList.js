import { useDispatch } from "react-redux"
import { CDN_API } from "../utils/constant"
import { addItem } from "../utils/cartSlice";
const ItemList=({items})=>{
    console.log(items)
    
    const dispach = useDispatch();
    const handelAddItem =(item)=>{
      //dispach an item
      dispach(addItem(item))
    }

   return(
      <div>
        {items.map((item)=>(
            <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex">
              <div className="w-3/4">
                 <div className=" flex flex-col">
                    <span>{item?.card?.info?.name}</span>
                    <span> ₹{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                 </div>
                 <p className="">{item?.card?.info?.description}</p>
              </div>
              <div className="w-40 h-36 rounded-lg overflow-hidden ">
                <div className=" absolute ">
                <button className="p-2 bg-black text-white overflow-hidden rounded-lg mx-16"
                //finde difference in these three
               //  onClick={handelAddItem} 
                 onClick={()=> handelAddItem(item)}
               //  onClick={handelAddItem(item)}
                >ADD</button>
                </div>
                <img src={CDN_API + item?.card?.info?.imageId}/>
              </div>
            </div>
        ))
        }</div>
   )
}

export default ItemList;