import { Carousel } from "react-responsive-carousel";
import { ATCDet } from "../ATCbutton";
import { FavDet } from "../Favouritebutton";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function ItemDetailsC(props) {
    return (
      <div className="detcard sm:flex sm:justify-center">
        <div className="m-2 h-auto lg:w-4/5 xl:w-3/5 space-y-0.5 justify-center items-center xl:h-auto flex-col sm:flex-row sm:space-x-0.5 sm:space-y-0 flex overflow-hidden">
          <div className="flex bg-third-c justify-center w-full md:w-2/3 md:h-full overflow-hidden rounded-large">
            <Carousel
              className="w-full"
              thumbWidth={60}
              emulateTouch={true}
              showArrows={true}
              showThumbs={true}
              infiniteLoop={true}
              onSwipeEnd={()=>{
                Carousel.selectedItem=0
              }}
              >
              {props.imgArr}
            </Carousel>
          </div>
          <div className="md:w-1/3  p-2 w-full sm:w-auto sm:h-full space-y-6 overflow-hidden ">
            <div className="flex items-center justify-between sm:flex-col sm:items-start sm:space-y-2">
              <span className="font-bold text-xs sm:w-2/3 md:w-auto ">
                {props.label}
              </span>{" "}
              <span className="bg-third-c bg-opacity-60 block  font-bold p-2 rounded-full sm:text-xs lg:text-base">
                {props.price} EGP
              </span>
            </div>
            
            <div className="flex bg-third-c bg-opacity-70 p-2 rounded-large  flex-col space-y-2">
              <span className="font-bold">Colors</span>
              <div className="flex space-x-1">
                {props.Colors}
              </div>
            </div>
            <div className={`${props.sizeClass} flex rounded-large flex-col space-y-2 bg-third-c bg-opacity-70 p-2  `}>
              <span className="font-bold">Sizes</span>
              <div className="flex text-xs md:text-sm flex-wrap">
              {props.Sizes}
              </div>
            </div>
            <div className="flex sm:flex-col sm:space-x-0 sm:space-y-2 justify-center items-center space-x-2">
              <FavDet
                itemId={props.itemId}
                label={props.label}
                itemImage={props.img}
                Price={props.price}
                admin={props.admin}
              />
              <ATCDet 
              canAddToCart={props.canAddToCart}
                itemId={props.itemId}
                label={props.label}
                itemImage={props.img}
                Price={props.price}
                admin={props.admin}
                Color={props.Color}
                itemSize={props.itemSize}
                className={props.className}
                otherColors={props.otherColors}
                otherSizes={props.otherSizes}
              />

            </div>
            <div className="flex justify-end md:justify-center">
            <span className={props.classNameCant}><span className=" text-xl text-main-t">*</span>{props.CantAdd}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }