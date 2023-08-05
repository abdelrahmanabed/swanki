import { useEffect, useState } from "react";
import "react-simple-phone-input/dist/style.css";
import { CountryDropdown, CountryRegionData, RegionDropdown } from "react-country-region-selector";
import  Axios  from 'axios';
import { getApiBaseUrl } from "../../apiConfig";
export default function Address(props) {
  const apiUrl = getApiBaseUrl();
  const [region, setRegion] = useState('')
  const [active, setActive] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [area, setArea] = useState('');
  const [phone, setPhone] = useState('');
  const [Address, setAddress] = useState('');
  const [userAdd, setUserAdd] = useState([]);

  const handleActive= () => {
    setActive(!active)
  }
  const handleDelete = async (address) => {
    const userId = window.localStorage.getItem('adminID');
    const addressIndex = userAdd.indexOf(address);
  
    try {
      const response = await Axios.delete(`${apiUrl}/users/${userId}/addresses/${addressIndex}`);
      console.log(response.data);
  
      // Remove the deleted address from the user interface
      const updatedUserAdd = [...userAdd];
      updatedUserAdd.splice(addressIndex, 1);
      setUserAdd(updatedUserAdd);
    } catch (err) {
      console.log(err);
      // handle error
    }
  };
  
  const addAddress = async (userId, Address) => {
    try {
      const response = await Axios.put(`${apiUrl}/users/${userId}/addresses`, { Address });
      console.log(response.data);
      // dog with the response
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
    });
    
  }, []);

  return (
    <div id="personal-information" className="w-full  flex flex-wrap items-center justify-center p-2 ">
    
      {userAdd.map((item, index) => {
  return(
    <div key={index} className="flex rounded-large relative p-2 m-2 w-full h-fit  md:h-56 md:w-80 lg:w-96 flex-col  pl-3 bg-third-c space-y-2 duration-500">
      <span className="">{item.firstName }</span>
      <span className="">{item.phone }</span>
      <span className="font-bold">{item.region }</span>
      <span className="font-bold">{item.area }</span>
      <span className="font-bold">{item.Address }</span>
      <button className=" absolute w-11 flex justify-center items-center h-11 rounded-full text-white  hover:text-main-t  text-xl right-2 bottom-2 bg-main-c" onClick={() => handleDelete(item)}><i class="ri-delete-bin-5-fill"></i></button>
    </div>
  )
})}
       <button onClick={handleActive} className= {`${active? "active" : ""} flex group rounded-full bg-main-t hover:bg-main-c  duration-300 justify-evenly m-0.5 w-40 h-40  md:h-40 md:w-40 flex-col  items-center space-y-2`} id={'addnewaddressbutton'}>
        <span className="text-7xl w-11 h-11 flex justify-center   "><i class="ri-map-pin-add-fill  group-hover:text-white group-hover:text-9xl duration-500"></i></span>
        <span className="  text-xs duration-500 group-hover:opacity-0">Add New Address</span>
      </button> 
      <form id="addAF" className={`${active? "active" : ""} rounded-large flex-col absolute bg-third-c p-3 flex sm:items-center md:w-fit space-y-3 md:space-y-5 top-2 md:top-0 w-full h-fit  duration-300 `}>
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
  )
  
}