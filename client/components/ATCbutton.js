import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { getApiBaseUrl } from "@/apiConfig";

export default function ATC(props) {
  const apiUrl = getApiBaseUrl();

const [ATC, setATC ]= useState('line')
const [active, setActive ]= useState('')
const [itemAdded, setItemAdded] = useState(false);

  // Check localStorage for favourite items on mount
useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart && cart.some(f => f.itemId === props.itemId)) {
      setActive(true);
      setItemAdded(true);
    }
  }, [props.itemId]);

  // Check if item is already in favourites list
  const inCart = useMemo(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    return cart && cart.some(f => f.itemId === props.itemId);
  }, [props.itemId]);

const handleATC = async () => {
    setActive(!active)
    setATC(!ATC)
    const adminId = localStorage.getItem("adminID");
    if (!adminId) {
      // admin is not logged in
      return;
    }
  
    try {
      const item = {
        itemId: props.itemId,
        itemImage: props.itemImage,
        label: props.label,
        Price: props.Price
      };
  
      const response = await axios.put(
        `${apiUrl}/admin/${adminId}/cart`,
        { item }
      );
      console.log(response.data);
      setItemAdded(!itemAdded);
      localStorage.setItem("cart", JSON.stringify(response.data.Cart));

    } catch (err) {
      console.error(err);
    }
}
    return (

<button onClick={handleATC} className={` ${active ? "active" : ""} ${ itemAdded? "bg-main-t " : " hidden"} lg:h-11 lg:w-11 md:w-10 md:h-10 w-10 h-10 p-1 rounded-full flex ${props.className} items-center justify-center fav`} value={props.value}>
    <i  className={`${active ? "active" : ""} text-xl md:text-2xl xl:text-3xl ri-shopping-bag-3-${itemAdded ? "fill" :  "none"  } favi`}></i>
    
</button>
    )}
//-------------------------------------
export function ATCDet(props) {
        const [ATC, setATC ]= useState('line')
        const [active, setActive ]= useState('')
        const [detactive, setdetActive ]= useState('Add To Cart')
        const [isitemAdded, setisItemAdded] = useState(false);
      
// Check localStorage for favourite items on mount
useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart && cart.some(f => f.itemId === props.itemId)) {
      setActive(true);
      setisItemAdded(true);
    }
  }, [props.itemId]);

  // Check if item is already in favourites list
  const inCart = useMemo(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    return cart && cart.some(f => f.itemId === props.itemId);
  }, [props.itemId]);

const handleATC = async () => {
    setActive(!active)
    setATC(!ATC)
    const adminId = localStorage.getItem("adminID");
    if (!adminId) {
      // admin is not logged in
      return;
    }
  
    try {
      const item = {
        itemId: props.itemId,
        itemImage: props.itemImage,
        label: props.label,
        Price: props.Price,
        Color: props.Color,
        itemSize: props.itemSize,
        otherColors:props.otherColors,
        otherSizes:props.otherSizes
      };
  
      const response = await axios.put(
        `${apiUrl}/admin/${adminId}/cart`,
        { item }
      );
      console.log(response.data);
      setisItemAdded(!isitemAdded);
      localStorage.setItem("cart", JSON.stringify(response.data.Cart));

    } catch (err) {
      console.error(err);
    }
}
const generateUniqueId = () => {
  // Use any unique ID generation logic here
  // For simplicity, you can use a library like `uuid` or `nanoid`
  // Here's an example using `nanoid` library
  const nanoid = require('nanoid');
  return nanoid.nanoid();
}
const handlePTC = async () => {
     const newItem = {
        ...props,
        itemId: generateUniqueId(), // Generate a unique ID for the item
      };
  const adminId = localStorage.getItem("adminID");
  if (!adminId) {
    // admin is not logged in
    return;
  }

  try {
    const item = {
      itemId: newItem.itemId,
      itemImage: props.itemImage,
      label: props.label,
      Price: props.Price,
      Color: props.Color,
      itemSize: props.itemSize,
      otherColors:props.otherColors,
      otherSizes:props.otherSizes

    };

    const response = await axios.post(
      `${apiUrl}/admin/${adminId}/cart`,
      { item }
    );
    console.log(response.data);
    localStorage.setItem("cart", JSON.stringify(response.data.Cart));

  } catch (err) {
    console.error(err);
  }
}
            return (
        <div className="flex space-x-1 w-full">
        <button onClick={()=>handleATC()} className={` ${active ? "active" : ""}  ${ isitemAdded  ? "bg-main-t " : "bg-third-c bg-opacity-70" } ${isitemAdded ? "w-14 p-4": "w-full"}   h-14  rounded-full flex ${ isitemAdded?'':props.className} items-center justify-center space-x-3 fav`}  disabled={isitemAdded?'':!props.canAddToCart} value={props.value}>
            <i  className={`${active ? "active" : ""} text-3xl ri-shopping-bag-3-${ isitemAdded  ? "fill" :  "line"  } favi`}></i>
            <span className={`${ isitemAdded ? 'hidden': ''} text-xs `}>{ isitemAdded ? '': 'Add To Cart'}</span>
           

        </button>
        
        <button disabled={!props.canAddToCart} className={`bg-third-c h-14 font-black text-lg sm:text-2xl ${props.className} ${isitemAdded ? " w-full": "hidden"} rounded-full flex items-center justify-center`} onClick={()=>handlePTC()} >+ Add More</button>
        </div>
            )}