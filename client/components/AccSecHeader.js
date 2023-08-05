import Link from "next/link";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export default function AccSecHeader() {
  const [cookie, setCookie, removeCookie] = useCookies(['valueName']);
  const [userName, setUserName] = useState(['user name']);

  const handleLogout = () => {
		window.localStorage.removeItem("adminID");
    window.localStorage.removeItem("favourites");
		window.localStorage.removeItem("lastName");
		window.localStorage.removeItem("firstName");
		window.localStorage.removeItem("Address");
		window.localStorage.removeItem("Phone");
    window.localStorage.removeItem("Email");
    window.localStorage.removeItem("cart");


    removeCookie('access_token')
    window.location.reload()
	};
  
  const handleinactive = () => {
    const accsecheader = document.querySelector('#accsecheader')
    if (accsecheader.classList.contains('active')){
        accsecheader.classList.remove('active')
    }
  }
  useEffect(()=>{
    const firstName = localStorage.getItem('firstName')
    const lastName = localStorage.getItem('lastName')
    setUserName(firstName +" "+ lastName)
   
    },[])
    return (
    <div id="accsecheader" className="bg-third-c flex flex-col  p-3  w-full md:w-96    md:p-2 absolute  duration-300 ">
      <Link id="ASHuser" onClick={handleinactive} href="/customer/personal-information" className="hover:bg-white  rounded-full font-light hover:text-lg hover:pl-4 py-4  p-2 duration-300 flex items-center space-x-2 group"><i class="text-3xl  group-hover:text-main-t duration-200 ri-account-circle-fill "></i><span>{userName}</span></Link> 
      <Link onClick={handleinactive} href="/customer/my-orders" className="hover:pl-4 hover:bg-white rounded-full p-2 py-4 font-light hover:text-lg duration-300 flex items-center space-x-2 group"><i class="text-3xl  group-hover:text-main-t duration-200 ri-apps-2-fill"></i><span>My Orders</span></Link>  
      <Link onClick={handleinactive} href="/customer/wish-list" className="hover:pl-4 hover:bg-white p-2 py-4 rounded-full font-light hover:text-lg duration-300 flex items-center space-x-2 group"><i class="text-3xl group-hover:text-main-t duration-200 ri-heart-2-fill"></i><span>Wish List</span></Link>      
      <Link onClick={handleinactive} href="/customer/address" className="hover:pl-4 p-2 hover:bg-white py-4 rounded-full font-light hover:text-lg duration-300 flex items-center space-x-2 group"><i class="text-3xl group-hover:text-main-t duration-200  ri-map-2-fill"></i><span>Address Book</span></Link>  
      <Link onClick={handleinactive} href="/help" className="hover:pl-4 p-2 py-4  hover:bg-white rounded-full font-light hover:text-lg duration-300 flex items-center space-x-2 group"><i class="text-3xl  group-hover:text-main-t duration-200 ri-information-fill"></i><span>Help</span></Link>  
      <button onClick={handleLogout}  className=" bg-main-c text-white p-4 mt-2 mx-2 duration-300 rounded-full">Log out</button>  

    </div>
    )}