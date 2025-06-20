import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import { clearCart } from "../utils/cartSlice";



const Cart =()=>{
    const cartItems = useSelector((store) => store.cart.items);
    console.log("this is card items:-" + cartItems);

    const dispatch = useDispatch();
    const handelClearCart = ()=>{
        dispatch(clearCart());
    };

    return(
        <div className="text-center h-[88vh] m-0 p-0  ">
            <h1 className="text-2xl font-bold">cart</h1>
            <div>
                <button className="bg-black text-white p-2 rounded-lg border-b-2" 
                onClick={handelClearCart}>clear</button>
                <CartList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;