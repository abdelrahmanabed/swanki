import Link from "next/link";
import ATC from "../ATCbutton";
import Favourite from "../Favouritebutton";
import { useState } from "react";
import Axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ItemCard(props) {


  return (
    <div className={`relative ${props.className} m-0.5 md:ml-0 md:m-2`}>
      <Favourite 
        className="absolute left-2 bottom-16 z-20 sm:bottom-12" itemId={props.itemId} label={props.label} itemImage={props.img} Price={props.price} admin={props.admin}

      />
      <ATC
        className="absolute md:bottom-12 sm:bottom-24 bottom-28 z-20 left-2 md:right-4 md:left-auto" itemId={props.itemId} label={props.label} itemImage={props.img} Price={props.price} 
      />
      <Link

        href={props.href}
        className={` relative flex mt-0.5 mr-0.5 flex-col overflow-hidden w-auto h-auto`}
      >
        <div className="h-auto rounded-large xl:h-auto relative overflow-hidden">
        <Carousel className="" showIndicators={props.showIndicators} showStatus={props.showStatus} autoPlay={props.autoPlay} infiniteLoop={props.infiniteLoop} animationHandler={props.animationHandler} stopOnHover={props.stopOnHover} emulateTouch={props.emulateTouch} showArrows={props.showArrows} transitionTime={props.transitionTime} interval={props.interval} showThumbs={props.showThumbs}>
  {props.imgArr}
    
</Carousel>
        </div>
        <div className={`flex p-2 justify-between bg-${props.iColor}`}>
          <div className="overflow-x-clip h-5 w-2/3">
            <span id="iclabel" className="text-xs text-ellipsis">{props.label}</span>
          </div>
          <div className="flex items-center justify-end">
            <span id="icprice" className="text-xs whitespace-nowrap font-bold bg-opacity-50 bg-third-c w-fit p-1 rounded-full px-2">
              {props.price+' '+props.EGP} 
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}