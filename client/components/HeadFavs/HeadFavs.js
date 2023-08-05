import { useLocalStorage } from "react-use";
import { useEffect } from "react";
import Link from "next/link";
import ItemView from "../itemView";
import Image from "next/image";
export default function HeadFavs() {
  const [itemsinFavs, setitemsinFavs] = useLocalStorage("favourites", []);
  
  useEffect(() => {
    const fh = document.getElementById('FH')
    const hfm = document.getElementById('HFM')
    fh.onclick  = () =>{toAtc()} 
    hfm.onclick = () =>{toAtc()} 
  }, [itemsinFavs]);

 const toAtc =()=> {
  const items = localStorage.getItem('favourites');
  if (items) {
    setitemsinFavs(JSON.parse(items));
  }
 }
  const handleInactive = () => {
    const accSecHeader = document.querySelector("#HeadFavs");
    const favsDiv = document.querySelector("#Favsdiv");

    if (accSecHeader.classList.contains("active") || favsDiv.classList.contains("active")) {
      accSecHeader.classList.remove("active");
      favsDiv.classList.remove("active");
    }
  }

  return (
    <div id="HeadFavs" className="duration-300 md:bg-opacity-0 z-50 w-full flex justify-center md:w-auto -right-full md:p-0 rounded-large absolute">

      <div id="Favsdiv" className="duration-300 flex-wrap rounded-large w-full space-y-12 md:w-96 bg-third-c h-screen p-5">
        <Link onClick={handleInactive} href="/customer/wish-list" className="bg-white font-thin p-2 py-6 w-full flex items-center rounded-full justify-center space-x-3 duration-300 text-main-c">
          <span className="text-2xl">Go to Favourites</span>
          <i className="ri-arrow-right-line text-3xl"></i>
        </Link>

        {itemsinFavs && itemsinFavs.length > 0 ?
          itemsinFavs.map(item => {
            const imgArr = item.itemImage;
            return (
              <div key={item._id} className="inline-block">
                <ItemView onClick={handleInactive} imgArr={<Image width={960} height={1200} src={"/" + imgArr[0]} className="w-96"/>} itemId={item.itemId} className={'w-28'} img={"/" + item.itemImage} price={''} href={`/customer/wish-list`} EGP={""} atcClass={"hidden"} />
              </div>
            );
          }) :

          <div className="flex space-y-3 flex-col justify-center items-center">
            <i className="text-6xl ri-heart-fill text-main-c"></i>
            <span className="text-sm text-blackfaint-c">NO ITEMS IN YOUR FAVOURITES</span>
          </div>
        }
      </div>
    </div>
  );
}