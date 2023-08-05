import Axios  from "axios"
import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import MyOrder from "@/components/AccNavCom/MyOrders";
import WishList from "@/components/AccNavCom/WishList";
import PersonalInfo from "@/components/AccNavCom/PersonalInfo";
import ChangePass from "@/components/AccNavCom/ChangePass";
import Address from "@/components/AccNavCom/Address";
import Link from "next/link";
import Register from "@/components/Register/register";
import { useCookies } from "react-cookie";

export default function ComId() {
   const router = useRouter()
   const [cookies , setCookies] = useCookies('acsess_token')

    const comId = router.query.comId;
    
    const [active , setActive] = useState("hidden")
    const [isactive , setIsActive] = useState("")
    const [itactive , setitActive] = useState("")

    const handlePersonal = () =>{
        setActive(!active) 
        setIsActive(!isactive)
    }

 useEffect(()=>{
  
    const Link = document.querySelectorAll('a')
    Link.forEach((ele)=> {
         if (ele.id === comId){
      
       ele.classList.add('active')
        
       
       

    }
      
   })
 
 })
         
     
   
    
    return (
      <>
     <label className="  m-5 font-extralight text-3xl hidden md:block">Account Information</label>
      {!cookies.access_token
        ? <Register/>
        : <div id="accnav" className={` relative m-2 rounded-large p-2 flex flex-col sm:flex-row space-y-2`} >
        <div className="flex   bg-white bg-opacity-50 md:bg-opacity-0 rounded-full p-3    sm:flex-col   justify-center sm:justify-normal sm:space-y-3  md:m-2 sm:w-80 space-x-2 sm:space-x-0   ">
            <Link  id="my-orders" href="my-orders" className={`${comId === "my-orders" ? "active" : ""} group text-xs md:text-sm lg:text-base flex flex-col sm:flex-row items-center   font-extralight .al   md:p-2 rounded-large  `}  ><i class="text-2xl  group-hover:text-main-t mr-2 duration-200 ri-apps-2-fill"></i><span> Orders</span> </Link>
            <Link id="wish-list" href="wish-list" className={`${comId === "wish-list" ? "active" : ""} group text-xs md:text-sm lg:text-base flex  flex-col sm:flex-row  items-center font-extralight .al md:p-2 rounded-large `} ><i class="text-2xl  group-hover:text-main-t duration-200 ri-heart-2-fill mr-2"></i><span>Wishs</span></Link>
            <Link id="address" href="address" className={`${comId === "address" ? "active" : ""} text-xs group md:text-sm lg:text-base font-extralight  flex-col sm:flex-row  flex items-center .al md:p-2 rounded-large `} ><i class="text-2xl group-hover:text-main-t duration-200  ri-map-2-fill mr-2"></i><span>Address Book</span></Link>
            <Link id="personal-information" href="personal-information" className={`${comId === "personal-information" ? "active" : ""} group font-extralight flex  flex-col sm:flex-row  items-center text-xs md:text-sm lg:text-base .al md:p-2 rounded-large `}><i class="text-2xl mr-2  group-hover:text-main-t duration-200 ri-account-circle-fill "></i>  User Information</Link>
            <Link id="change-password" href="change-password" className={`${comId === "change-password" ? "active" : ""} text-xs md:text-sm group font-extralight  flex-col sm:flex-row  flex items-center lg:text-base .al md:p-2 rounded-large `} ><i class="text-2xl mr-2  group-hover:text-main-t duration-200 ri-key-fill"></i>Password</Link>
        </div>
        <div id="comId" className="w-full">
        {comId === "my-orders" ? <MyOrder /> : null}
          {comId === "address" ? <Address /> : null}
          {comId === "change-password" ? <ChangePass /> : null}
          {comId === "personal-information" ? <PersonalInfo /> : null}
          {comId === "wish-list" ? <WishList /> : null}
        </div>
    </div>}


    </>    
    )   
}   

    

