import Link from "next/link";
import { useCookies } from "react-cookie";
import { useState, useEffect, useMemo } from "react";
import { useLocalStorage } from "react-use";
import ItemCard from "@/components/ItemCard/ItemCard";
import  Axios  from 'axios';
import { useRouter } from 'next/router';
import "react-simple-phone-input/dist/style.css";
import { getApiBaseUrl } from "@/apiConfig";

import { CountryDropdown, CountryRegionData, RegionDropdown } from "react-country-region-selector";
export default function Payment() {
  const apiUrl = getApiBaseUrl();

  const [active, setActive] = useState('');
  const [country, setCountry] = useState('')
  const [region, setRegion] = useState('')
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [area, setArea] = useState('');
  const [phone, setPhone] = useState('');
  const [Address, setAddress] = useState('');
    const [userAdd, setUserAdd] = useState([]);
    const [selectedAdd, setSelectedAdd] = useState(userAdd[0]);   
    const [totalPrice, setTotalPrice] = useState();
    const [items, setItems] = useState([]);
    const [userName, setUserName] = useState();
    const [itemsinCart, setitemsinCart] = useLocalStorage('cart', []);
    const router = useRouter();
    const handleActive= () => {
      setActive(!active)
    }
    const addAddress = async (userId, Address) => {
      try {
        const response = await Axios.put(`${apiUrl}/users/${userId}/addresses`, { Address });
        console.log(response.data);
        // do something with the response
        window.location.reload()
      } catch (err) {
        console.log(err);
        // handle error
      }
    };
  
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
    
      // Check if any of the required fields are empty
      if (!firstName || !lastName || !region || !area || !Address || !phone) {
        const error = document.getElementById("error-message");
        error.innerText = "All fields are required";
        return;
      } else {
        const error = document.getElementById("error-message");
        error.innerText = "";
      }
    
      const userId = localStorage.getItem('adminID');
      addAddress(userId, {
        firstName,
        lastName,
        region,
        area,
        Address,
        phone
      });
    };
    useEffect(() => {
      const userId = window.localStorage.getItem('adminID');
    
      Axios.get(`${apiUrl}/admin/${userId}/addresses`).then((response) => {
        setUserAdd(response.data);
        setSelectedAdd(response.data[0]); // set the first address as the default selected address
      });
    
      const items = localStorage.getItem('cart');
      if (items) {
        setitemsinCart(JSON.parse(items));
        setTotalPrice(itemsinCart.reduce((accummulator,item)=>accummulator +item.Price,0))

      }
    }, []); // removed the third argument to prevent an infinite loop

    const onBuy = async (e) => {
      
      e.preventDefault();
    
      const userId = window.localStorage.getItem('adminID');
      const userEmail = window.localStorage.getItem('userEmail');
    
      const requestBody = {
        userId: userId,
        userEmail: userEmail,
        items: itemsinCart,
        userAdd: selectedAdd
      };
    
      try {
        const response = await Axios.post(`${apiUrl}/orders`, requestBody);
        console.log(response.data);
        router.push('/confirmation'); // redirect the user to the confirmation page
      } catch (error) {
        console.error(error);
      }
    };
      
  const handleAddClick = (add) => {
    setSelectedAdd(add);
  };
    

    return ( itemsinCart.length ==0 ? "" :
<div id="paymentPage" className=" relative flex flex-wrap flex-col  justify-between items-center m-2 rounded-large overflow-hidden" >
<div className="  flex flex-col  space-y-2 p-2 w-full ">
 <span className=" font-extralight text-3xl">Choose an Address</span>
 <div className="flex justify-center flex-wrap items-center">
{
  userAdd.map((add, index) => {
  return(
    <button key={index} className={`${add===selectedAdd?" border-main-t relative border-4" : ""} rounded-large flex relative justify-center m-2 h-56 w-56 flex-col border pl-3 bg-third-c space-y-2 duration-500`} onClick={() => handleAddClick(add)}>
      <span className="font-thin">{add.firstName }</span>
      <span className="font-thin">{add.phone }</span>
      <span className="font-bold">{add.region }</span>
      <span className="font-bold">{add.area }</span>
      <span className="font-bold">{add.Address }</span>
      {add===selectedAdd? <i class="ri-map-pin-fill text-main-t absolute text-4xl right-1 bottom-1"></i> : null}
    </button>
    
  )
})
}
<button onClick={handleActive} className= {`${active? "active" : ""} flex group rounded-full bg-main-t hover:bg-main-c  duration-300 justify-evenly m-0.5 w-40 h-40  md:h-40 md:w-40 flex-col  items-center space-y-2`} id={'addnewaddressbutton'}>
<span className="text-7xl w-11 h-11 flex justify-center   "><i class="ri-map-pin-add-fill  group-hover:text-white group-hover:text-9xl duration-500"></i></span>
<span className=" font-thin text-xs duration-500 group-hover:opacity-0">Add New Address</span>
</button> 
</div>

<form id="addAF" className={`${active? "active" : ""} rounded-large flex-col absolute bg-third-c p-3 flex sm:items-center md:w-fit space-y-3 md:space-y-5 top-2 w-full h-fit  duration-300 `}>
<div className="w-full flex items-center  space-x-4"><div onClick={handleActive} className=" flex justify-center items-center cursor-pointer hover:text-main-t duration-300 rounded-full bg-main-c text-3xl text-white w-8 h-8" ><i class=" ri-close-line"></i></div> <span className=" text-red opacity-80" id="error-message"></span></div>
        <div className="w-full sm:w-2/3 md:w-96 space-x-2 flex">
        <input type="text" placeholder="First Name" className="bg-white p-3 rounded-full w-full" value={firstName} onChange={(e) => setFirstName(e.target.value)} />          <input type="text" placeholder="Last Name" className="bg-white p-3 rounded-full w-full" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <RegionDropdown country="Egypt" value={region} onChange={(e) => setRegion(e)} className="rounded-full p-3 w-full bg-white sm:w-2/3 md:w-full"/>
        <input type="text" className="rounded-full p-3 bg-white w-full sm:w-2/3 md:w-full" placeholder="Area" value={area} onChange={(e) => setArea(e.target.value)} />
        <input type="text" className="rounded-full p-3 bg-white w-full sm:w-2/3 md:w-full" placeholder="Address" value={Address} onChange={(e) => setAddress(e.target.value)} />        <div className="flex w-full space-x-2 sm:w-2/3 md:w-full">
          <input type="tel" readOnly value={'+20'} className="p-3 rounded-full bg-white w-14"></input>
          <input type="tel" className="w-full rounded-full p-3 bg-white" maxLength="10" minLength="10" placeholder="phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />        </div>
        <input type="submit" value="Add Address" className="rounded-full p-3 w-full bg-main-t sm:w-2/3 md:w-full" onClick={handleSubmit}></input>
      </form>
</div> 
<div className="w-full h-72 md:w-96 bg-third-c flex flex-col space-y-2 p-7 bg-opacity-60 m-2 ml-0 rounded-large justify-center items-center">
   <div> <span className="text-xl ">Total Amount </span>
    <span className="text-2xl font-extrabold">{itemsinCart.reduce((accummulator,item)=>accummulator +item.Price,0)} EGP</span></div>
    <div> <span className="text-xl ">Total Items </span>
    <span className="text-2xl font-extrabold">{itemsinCart.length} </span></div>
    {userAdd.length <= 0 ? <>
      <button disabled  className="bg-main-c cursor-not-allowed opacity-50 text-white p-2 rounded-lg text-xl">
      Buy
    </button> 
    <span className=" animate-bounce text-center text-sm "><span className=" text-xl  text-red">*</span>Please Add An Address to Complete Purshace</span>
    </>
      : (
    <button onClick={onBuy}   className="bg-main-t hover:text-white hover:text-3xl duration-300  p-4 px-7 text-4xl rounded-full font-extralight">
      Buy
    </button>
  )}

</div>

</div>

        )
  }