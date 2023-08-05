import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie"
import { getApiBaseUrl } from "@/apiConfig";

import { itemsinFavs, setitemsinFavs } from "./HeadFavs/HeadFavs"
export default function Favourite(props) {
  const apiUrl = getApiBaseUrl();

  const [fav, setFav] = useState("line");
  const [active, setActive] = useState("");
  const [itemAdded, setItemAdded] = useState(false);

  // Check localStorage for favourite items on mount
// ...

// Check localStorage for favourite items on mount
useEffect(() => {
  const favourites = JSON.parse(localStorage.getItem("favourites"));
  if (Array.isArray(favourites) && favourites.some(f => f.itemId === props.itemId)) {
    setActive(true);
    setItemAdded(true);
  }
}, [props.itemId]);

// ...

const [cookies , setCookies] = useCookies('acsess_token')




  const handleFav = async () => {
    setActive(!active);
    setFav(!fav);

    const adminId = localStorage.getItem("adminID");
    if (!adminId) {
      // admin is not logged in
      const item = {
        itemId: props.itemId,
        itemImage: props.itemImage,
        label: props.label,
        Price: props.Price
      }; 
      localStorage.setItem("favourites", JSON.stringify(item));
      setItemAdded(!itemAdded);


    }
      if (adminId) {
    try {
      const item = {
        itemId: props.itemId,
        itemImage: props.itemImage,
        label: props.label,
        Price: props.Price
      };
  
      const response = await axios.put(
        `${apiUrl}/admin/${adminId}/favourites`,
        { item }
      );
      console.log(response.data);
      setItemAdded(!itemAdded);

      // Store updated favourites list in localStorage
      localStorage.setItem("favourites", JSON.stringify(response.data.Favourites));
    } catch (err) {
      console.error(err);
    }}
    
  };

  return (
    <button
    id="aFb"
      onClick={()=>handleFav()}
      className={`${
        active ? "active" : ""
      } ${
        itemAdded  ? "bg-main-t " : "bg-white bg-opacity-50"
      } lg:h-11 lg:w-11 md:w-10 md:h-10 w-10 h-10 p-1 rounded-full flex ${
        props.className
      } items-center justify-center fav`}
      value={props.value}
    >
      <i
        className={`${
          active ? "active" : ""
        } md:font-extralight text-xl md:text-2xl xl:text-3xl ri-heart-${
          itemAdded ? "fill" :  "line" 
        } favi`}
      ></i>
    </button>
  );
}

    export function FavDet(props) {
        const [favactive, setfavActive ]= useState('Add To Favourite')
        const [fav, setFav] = useState("line");
        const [active, setActive] = useState("");
        const [isitemAdded, setisItemAdded] = useState(false);
      
        // Check localStorage for favourite items on mount
   // ...

// Check localStorage for favourite items on mount
useEffect(() => {
  const favourites = JSON.parse(localStorage.getItem("favourites"));
  if (Array.isArray(favourites) && favourites.some(f => f.itemId === props.itemId)) {
    setActive(true);
    setisItemAdded(true);
  }
}, [props.itemId]);

// ...
      
        // Check if item is already in favourites list
  
      
        const handleFav = async () => {
          setActive(!active);
          setFav(!fav);
          setfavActive(!favactive)
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
              `${apiUrl}/admin/${adminId}/favourites`,
              { item }
            );
            console.log(response.data);
            setisItemAdded(!isitemAdded);
      
            // Store updated favourites list in localStorage
            localStorage.setItem("favourites", JSON.stringify(response.data.Favourites));
          } catch (err) {
            console.error(err);
          }
        };
      
   
            return (
        
        <button onClick={handleFav} className={` ${active ? "active" : ""}  ${ isitemAdded  ? "bg-main-t " : "bg-third-c bg-opacity-70" } w-full  p-2 h-14  rounded-full flex ${props.className} items-center justify-center space-x-3 fav`} value={props.value}>
            <i  className={`${active ? "active" : ""} text-3xl ri-heart-${ isitemAdded  ? "fill" :  "line"  } favi`}></i>
            <span className=" text-xs">{ !isitemAdded ? 'Add To Favourites': 'Added to Favourites'}</span>
        </button>
            )}