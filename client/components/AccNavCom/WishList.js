import { useCookies } from "react-cookie";
import { useState, useEffect, useMemo } from "react";
import { useLocalStorage } from "react-use";
import ItemCard from "../ItemCard/ItemCard";
import Link from "next/link";
import Image from "next/image";
export default function WishList(props) {
    const [itemsinFavs, setitemsinFavs] = useLocalStorage('favourites', []);

    useEffect(() => {
      // This function will run whenever the local storage changes.
      const items = localStorage.getItem('favourites');
      if (items) {
        setitemsinFavs(JSON.parse(items));
      }
    }, [], {
      watch: {
        itemsinFavs: () => {
          // This function will run whenever the itemsinFavs state variable changes.
        }
      }
    });
  
    return (
        <div id="wish-list" className=" w-full bg-white p-2 flex justify-center flex-wrap rounded-large">
   {itemsinFavs.length !== 0 ?
          itemsinFavs.map(item => {
            const imgarr = item.itemImage

            return (
              <div  key={item._id} className=" inline-block">
              <ItemCard  autoPlay={false} infiniteLoop={false} 
                 showStatus={false}
               showArrows={false} showIndicators={false}
             showThumbs={false}  imgArr={imgarr.map(img => {return <Image key={img} width={960} height={1200} src={"/"+img} className="w-96"/>})}  key={item._id} itemId={item.itemId} className={'w-32'} price={''} href={`item/${item.itemId}`} EGP={""} />              </div>)
          }) :

          <div className="flex space-y-3 flex-col justify-center items-center">
            <i className="text-6xl ri-heart-fill text-main-c"></i>
            <span className="text-sm text-blackfaint-c">NO ITEMS IN YOUR FAVOURITES</span>
          </div>
        }       
         </div>
          
    )
}   