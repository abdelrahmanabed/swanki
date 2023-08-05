import Link from "next/link";
import { useCookies } from "react-cookie";
import { useState, useEffect, useMemo } from "react";
import { useLocalStorage } from "react-use";
import ItemCard from "@/components/ItemCard/ItemCard";
import ItemView from "@/components/itemView";
import axios from "axios";
import Image from "next/image";
import { getApiBaseUrl } from "@/apiConfig";

export default function Shopping() {
  const apiUrl = getApiBaseUrl();


    const [itemsinCart, setitemsinCart] = useLocalStorage('cart', []);
  const [active, setActive] = useState('hidden')
  const [actives, setActiveS] = useState('hidden')
  const updateColor = (itemId, selectedColor) => {
    const updatedItems = itemsinCart.map((item) => {
      if (item.itemId === itemId) {
        return {
          ...item,
          Color: selectedColor,
        };
      }
      return item;
    });
  
    setitemsinCart(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    handleActiveColor()
  };
  const updateSize = (itemId, selectedSize) => {
    const updatedItems = itemsinCart.map((item) => {
      if (item.itemId === itemId) {
        return {
          ...item,
          itemSize: selectedSize,
        };
      }
      return item;
    });
  
    setitemsinCart(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
    handleActiveSize()
  };
 const handleActiveColor =() =>{
  setActive(!active)
 }
 const handleActiveSize =() =>{
  setActiveS(!actives)
 }
    useEffect(() => {
      // This function will run whenever the local storage changes.
      const items = localStorage.getItem('cart');
      if (items) {
        setitemsinCart(JSON.parse(items));
      }
    }, [], {
      watch: {
        itemsinCart: () => {
          // This function will run whenever the itemsinFavs state variable changes.
        }
      }
    });
    const addition =async (item) => {
      const newItem = {
        ...item,
        itemId: generateUniqueId(), // Generate a unique ID for the item
      };
      const updatedItems = [...itemsinCart, newItem];
      setitemsinCart(updatedItems);
      localStorage.setItem('cart', JSON.stringify(updatedItems));
      const adminId = localStorage.getItem("adminID");
      if (!adminId) {
        // admin is not logged in
        return;
      }
    
      try {
        const item = {
          itemId: newItem.itemId,
          itemImage: newItem.itemImage,
          label: newItem.label,
          Price: newItem.Price,
          Color: newItem.Color,
          itemSize: newItem.itemSize,
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
    
    // Function to generate a unique ID
    const generateUniqueId = () => {
      // Use any unique ID generation logic here
      // For simplicity, you can use a library like `uuid` or `nanoid`
      // Here's an example using `nanoid` library
      const nanoid = require('nanoid');
      return nanoid.nanoid();
    }
      const deleteion = async (itemId) => {
        const updatedItems = itemsinCart.filter(item => item.itemId !== itemId);
        setitemsinCart(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
        const adminId = localStorage.getItem("adminID");
        if (!adminId) {
          // Admin is not logged in
          return;
        }
      
        try {
          const itemToDelete = {
            itemId: itemId,
          };
      
          const response = await axios.put(
            `${apiUrl}/admin/${adminId}/cart`,
            { item: itemToDelete }
          );
          console.log(response.data);
          localStorage.setItem("cart", JSON.stringify(response.data.Cart));
        } catch (err) {
          console.error(err);
        }
      }
    
   
    return (
<div className="flex  flex-col m-2 items-center overflow-hidden" >
<div className="  flex flex-col lg:flex-row justify-center items-center  p-2 w-full flex-wrap ">

{itemsinCart.length !== 0 ?
          itemsinCart.map(item => {
            const imgarr = item.itemImage
            const color = item.Color 
            const colArr = imgarr.filter(img => img.endsWith(color));
            const oc = item.otherColors
            const os = item.otherSizes
            return (    <div key={item._id}  className="flex relative  rounded-large p-2  bg-third-c bg-opacity-60  w-full m-0.5 md:w-96 ">
                <div className="flex flex-col">
                <ItemView atcClass={"hidden"}  favClass={"hidden"} imgArr={ <Image width={960} height={1200} src={"/"+colArr[0]} className="w-96"/>}  key={item._id} itemId={item.itemId} className={'w-28'} img={"/"+item.itemImage} price={''} href={`item/${item.itemId}`} EGP={""} />
                </div>
              <div className="flex text-xs flex-col justify- space-y-5 w-full">
              <span id='shopping price' className=" bg-white absolute  text-lg md:text-xl lg:text-base xl:text-lg w-20 right-0 top-1/3 rounded-l-large font-thin p-2 text-center">{item.Price} EGP </span>
                <span className=" font-black ">{item.label}</span>

               <div className="relative">
                 <span>color : <img className="w-8 h-8 inline-block rounded-full" src={"/"+colArr[0]} ></img></span>
                  <button onClick={handleActiveColor} className=" ml-2 text-xs font-extralight border p-0.5 rounded-large">change</button>
                  <div className={`space-x-1 bg-opacity-20 w-fit bg-main-c p-1 rounded-full ${active?"hidden":"flex"}` }>
                    {oc.map(c => <Image width={960} height={1200} key={c}  onClick={() => updateColor(item.itemId, c)} src={"/"+c} className="w-5 h-5 cursor-pointer rounded-full"/> )}
                    </div></div>

                <span className="">Size : <div className="inline relative w-10 h-10 rounded-lg bg-white p-2">{item.itemSize}</div>
                <button onClick={handleActiveSize} className=" ml-2 text-xs font-extralight border p-0.5 rounded-large">change</button>
                <div className={`space-x-2 absolute   bottom-1 left-1  w-fit  bg-main-c bg-opacity-20 p-1 rounded-full flex  ${actives?"hidden":"flex"}`}>
                  {os.map(s => <span key={s} onClick={() => updateSize(item.itemId, s)}   className=" bg-white rounded-full p-2 cursor-pointer hover:text-main-t">{s}</span> )}
                  </div></span>

              </div>
              <button onClick={()=>deleteion(item.itemId)} className="bg-white hover:bg-red  duration-300  hover:text-white p-2 rounded-full absolute bottom-2 right-2 "><i class="ri-delete-bin-5-fill"></i> Delete</button>
              <button onClick={() => addition(item)} className="bg-white hover:bg-main-t duration-300 hover:text-white p-2 rounded-full absolute bottom-2 right-24"><i className="ri-add-fill"></i> 1</button>

            </div>
        )
          }) :

          <div className="flex space-y-3 flex-col justify-center items-center">
<i  className=" ri-shopping-bag-3-line text-4xl"></i>            <span className="text-sm text-blackfaint-c">NO ITEMS IN YOUR CART</span>
          </div>
        }
   
</div> 
{    itemsinCart.length == 0?  "": <div className="w-fit md:w-fit p-7 rounded-large flex flex-col bg-third-c space-y-2  bg-opacity-60   justify-center items-center">
    <span className="text-xl ">Total Amount</span>
        <span className="text-2xl font-extrabold">{itemsinCart.reduce((accummulator,item)=>accummulator +item.Price,0)} EGP</span>
   <Link href="/shopping/payment" className="bg-main-t  p-2 rounded-full font-extralight text-xl">Complete Order</Link>
</div>
}

</div>

        )
  }