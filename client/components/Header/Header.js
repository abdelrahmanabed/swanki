import { cookies } from "next/dist/client/components/headers"
import AccSecHeader from "../AccSecHeader"
import HeadCart from "../HeadCart"
import HeadFavs from "../HeadFavs/HeadFavs"
import NavMenu from "../NavMenu/NavMenu"
import Register from "../Register/register"
import { useCookies } from "react-cookie"
import AccSecButt from "./AccSecbutt"
import ToSignButt from "./Tosign"
import Link from "next/link"
import { withRouter } from "next/router"
import { useEffect, useState } from "react"
import axios, { Axios } from "axios"
import { useRouter } from "next/router";
import { useLocalStorage } from "react-use"
import { getApiBaseUrl } from "../../apiConfig";


export default function Header() {
  const [userfn, setuserfn] = useLocalStorage('firstName', '');
  const [userln, setuserln] = useLocalStorage('lastName','' );
  const apiUrl = getApiBaseUrl();

  const [cookies , setCookies] = useCookies('acsess_token')
  const [user , setUser] = useState('')
  const router = useRouter()
  const hID = router.pathname;
 
  useEffect(() => {
    const links = document.querySelectorAll('.Hlink')
    links.forEach((link) => {
      if (link.id === hID) {
        link.classList.add('bg-main-t')
      } else {
        link.classList.remove('bg-main-t')
      }
    })
  }, [hID])
  useEffect(() => {
    // Get all the elements with the 'active' class
    const activeElements = document.querySelectorAll('.active');

    // Remove the 'active' class from each element
    activeElements.forEach((element) => {
      element.classList.remove('active');
    });

    // Add the 'active' class to the current page's link
    const currentPageLink = document.querySelector(`a[href="${router.pathname}"]`);
    if (currentPageLink) {
      currentPageLink.classList.add('active');
    }
  }, [router.pathname]);
  useEffect(() => {
    const userId = window.localStorage.getItem('adminID');
    

    axios.get(`${apiUrl}/admin/${userId}`).then((response) => {
      setUser(response.data);
    });

  }, []);
 
  
  const handlenav = () => {
    const navmenu = document.querySelector('.navmenu')

    const burgermenu = document.getElementById('burgermenu')

    if(!burgermenu.classList.contains('yes')){
      navmenu.classList.toggle('active')
      burgermenu.classList.toggle('active') 
  }
}


const handleHeadFavs = () => {
  const HeadFavs = document.querySelector('#HeadFavs')
  const FavDiv = document.querySelector('#Favsdiv')
  const FH = document.querySelector('#FH')
  const FHM = document.querySelector('#HFM')


  if(!HeadFavs.classList.contains('none')){
    HeadFavs.classList.toggle('active')
    FavDiv.classList.toggle('active')
    FH.classList.toggle('active')
    FHM.classList.toggle('active')

}
}

const handleHeadCart = () => {
  const HeadCart = document.getElementById('headcart')
  const CartDiv = document.getElementById('cartdiv')
  const ATCHB = document.getElementById('ATCHB')
  const ATCHM = document.getElementById('ATCHM')

  if(!HeadCart.classList.contains('none')){
    HeadCart.classList.toggle('active')
    CartDiv.classList.toggle('active')
    ATCHB.classList.toggle('active')
    ATCHM.classList.toggle('active') 
}
}

const handleAccSec = () => {
  const AccSec = document.getElementById('accsecheader')
  const AccSecBut = document.getElementById('accsecbut')


  AccSec.classList.toggle('active')
  AccSecBut.classList.toggle('active')

}


const handlepress = () => {
  const signupdiv = document.getElementById('signup')
      const togsign = document.getElementById('tosign')
  const regdiv = document.getElementById('register')
  if (!regdiv.classList.contains('register')) {
      
      signupdiv.classList.toggle('active')
      togsign.classList.toggle('active')

      regdiv.classList.toggle('active')
  }
      
}
    return (
 <>  <div className="relative mb-16 pb-3">  
<div className="fixed z-50 w-screen py-4  px-2 md:py-0.5 bg-third-c md:bg-white  flex items-center m-auto justify-between   " id="header" >
  
<Link  href='/'  className="w-fit z-50"><img src='/Asset 2.svg' alt='SWANKY' className='z-50 ml-14 md:ml-2 w-32 md:w-48 lg:w-52 px-2'></img></Link>
<div className="md:hidden mr-3 space-x-1 flex">
 {cookies.access_token
 ?<AccSecButt userName={userfn || userln ? userfn + "" + userln: null } onClick={handleAccSec}/>
 :<ToSignButt onClick={handlepress}/>}
   <button id="FH" onClick={handleHeadFavs} className="md:bg-third-c  bg-white  p-2 flex z-50 justify-center items-center  rounded-full"><i className="mx-1 ri-heart-3-fill text-xl "></i></button>
  <button id="ATCHB" onClick={handleHeadCart} className="md:bg-third-c  bg-white   p-2 flex z-50  justify-center items-center  rounded-full"><i class="mx-1 ri-shopping-bag-3-fill text-xl"></i></button>
  </div>
<div id="burgermenu" onClick={handlenav} className="absolute md:hidden mx-2 flex flex-col z-50 space-y-1.5 p-2 rounded-full duration-700">
  <span className=" duration-600 ff block bg-sub-c h-0.5 w-5"></span>
  <span className="duration-600  bb block bg-sub-c h-0.5 w-5"></span>
  <span className="duration-600  cc block bg-sub-c h-0.5 w-5"></span>
</div>


<div className="hidden md:flex justify-between w-full p-1 md:p-3">
<ul className=" h-12 flex justify-between items-center w-m">
<li><Link href="/" id="/" className="p-1 md:p-2 m-1 rounded-full text-sm md:text-xs lg:text-base  hover:bg-main-t font-light duration-500 Hlink">HOME</Link></li>

<li><Link href="/clothes" id="/clothes" className="p-1 md:p-2 m-1 rounded-full text-sm md:text-xs lg:text-base font-light hover:bg-main-t duration-500 Hlink">CLOTHES</Link></li>
 <li><Link href="/shoes" id="/shoes" className="p-1 md:p-2 m-1 rounded-full  text-sm md:text-xs lg:text-base font-light hover:bg-main-t  duration-500  Hlink">SHOES</Link></li>
  <li><Link href="/bags" id="/bags" className="p-1 md:p-2 m-1 rounded-full  text-sm md:text-xs lg:text-base font-light hover:bg-main-t  duration-500 Hlink">BAGS</Link></li>
  <li><Link href="/accs" id="/accs" className="p-1 md:p-2 m-1 rounded-full  text-sm md:text-xs lg:text-base font-light hover:bg-main-t  duration-500  Hlink">ACCESSORIS</Link></li>
</ul>
<div className="flex items-center justify-between ">
  
{cookies.access_token 
 ?<AccSecButt userName={user.firstName + " " + user.lastName} onClick={handleAccSec}/>
 : <ToSignButt onClick={handlepress}/>}
<button id="HFM" onClick={handleHeadFavs} className="mx-1 lg:mx-1 lg:text-sm md:text-xs flex items-center group md:bg-third-c  bg-white  rounded-full p-2 hover:flex-row-reverse"><i className=" duration-300 group-hover:text-main-t mx-1 ri-heart-3-fill text-xl "></i> </button>
<button id="ATCHM" onClick={handleHeadCart} className="mx-1 lg:mx-1 lg:text-sm md:text-xs flex items-center group  md:bg-third-c  bg-white   rounded-full p-2 hover:flex-row-reverse"><i class="duration-300 group-hover:text-main-t mx-1 ri-shopping-bag-3-fill text-xl"></i></button>
</div></div>
</div>  </div> 
<Register/>  
<NavMenu/>
<HeadFavs/>   
<AccSecHeader/>
<HeadCart/>

</> 
)
}
                             