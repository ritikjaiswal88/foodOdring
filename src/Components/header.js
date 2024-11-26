import { useState } from 'react';
import logo from '../utils/logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header =()=>{
    const btnName = "login"
    const[btnNameReact, setbtnNameReact] = useState("login")

    //subscribing to the store using selectore
    const cartItems = useSelector((store)=> store.cart.items);

    return(
    <div className="header flex justify-between items-center shadow-md border  py-2 px-[150px]">
        <div className="logoContainer">
            <Link to="/">
            <img 
            className="logo h-16 w-auto py-2"
            src= {logo} /></Link>
        </div>
        <div className="nav-items">
         <ul className='flex list-none gap-8 cursor-pointer'>
            <li><Link to="/corporate"><i class="ri-briefcase-4-fill"> </i>Swiggy corporate</Link></li>
            <li><i class="ri-search-line"> </i>Search</li>  
            <li><Link to="/offers"><i class="ri-discount-percent-line"> </i>Offers</Link></li>
            <li><Link to="/help"><i class="ri-questionnaire-line"> </i> Help</Link></li>
            <li onClick={()=>{ btnNameReact == "login" ? setbtnNameReact("logout"):setbtnNameReact("login")}}><i class="ri-user-line"> </i>{btnNameReact}</li>
            <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
         </ul>
        </div>
    </div>
    );
}
export default Header