import Link from "next/link";
import ATC from "./ATCbutton";
import Favourite from "./Favouritebutton";

export default function ItemView(props) {


  return (
    <div className={`relative ${props.className} m-0.5 md:ml-0 md:m-2`}>
      <Favourite 
        className={`absolute left-2 bottom-12 z-20 md:bottom-12  ${props.favClass} `}itemId={props.itemId} label={props.label} itemImage={props.img} Price={props.price} admin={props.admin}

      />
      <ATC
        className={`absolute md:bottom-12 bottom-24 z-20 left-2 md:right-4 md:left-auto ${props.atcClass}`} itemId={props.itemId} label={props.label} itemImage={props.img} Price={props.price} 
      />
      <Link

        href={props.href}
        className={` relative flex mt-0.5 mr-0.5 flex-col overflow-hidden w-auto h-auto`}
      >
        <div className="h-auto rounded-large xl:h-auto relative overflow-hidden">
          {props.imgArr}
    
        </div>
        <div className={`flex p-2 justify-between bg-${props.iColor}`}>
          <div className="overflow-x-clip h-5 w-2/3">
            <span className="text-xs text-ellipsis">{props.label}</span>
          </div>
          <div className="flex items-center justify-end">
            <span className="text-xs font-bold bg-opacity-50 bg-third-c w-fit p-1 rounded-full px-2">
              {props.price+' '+props.EGP} 
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}