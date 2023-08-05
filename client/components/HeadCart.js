import { useCookies } from "react-cookie";
import { useState, useEffect, useMemo } from "react";
import { useLocalStorage } from "react-use";
import Link from "next/link";
import ItemView from "./itemView";
import Image from "next/image";
export default function HeadCart() {
  const [itemsinCart, setitemsinCart] = useLocalStorage('cart', []);

  useEffect(() => {
    // This function will run whenever the local storage changes.
    const fh = document.getElementById('ATCHM')
    const hfm = document.getElementById('ATCHB')
    fh.onclick  = () =>{toAtc()} 
    hfm.onclick = () =>{toAtc()}
    }, [itemsinCart])
  const toAtc =()=> {
    const items = localStorage.getItem('cart');
    if (items) {
      setitemsinCart(JSON.parse(items));
    }
   }
  const handleinactive = () => {
    const accsecheader = document.querySelector('#headcart')
    const Fd = document.querySelector('#cartdiv')

    if (accsecheader.classList.contains('active') || Fd.classList.contains('active')){
      accsecheader.classList.remove('active')
      Fd.classList.remove('active')
    }
  }
  return (
    <div id="headcart" className="duration-300 md:bg-opacity-0 z-50 w-full flex justify-center md:w-auto -right-full md:p-0  absolute">

      <div id="cartdiv" className="duration-300  flex-wrap rounded-large  w-full space-y-12 md:w-96 bg-third-c h-screen p-5">
      <Link onClick={handleinactive}  href="/shopping" className=" bg-white font-thin p-2 py-6 w-full flex items-center mb-12  rounded-full justify-center space-x-3 duration-300 text-main-c"><span className="text-2xl">Go to Cart</span> <i class="ri-arrow-right-line text-3xl"></i></Link>      

        {itemsinCart.length !== 0 ?
          itemsinCart.map(item => {
            const imgarr = item.itemImage

            return (
              <div key={item} className=" inline-block">
                           <ItemView onClick={handleinactive} favClass={'hidden'}    imgArr={<Image width={960} height={1200} src={"/"+imgarr[0]} className="w-96"/>}  key={item._id} itemId={item.itemId} className={'w-28'} img={"/"+item.itemImage} price={''} href={`/shopping`} EGP={""} />

              </div>)
          }) :

          <div className="flex space-y-3 flex-col justify-center items-center">
<i  className="text-3xl ri-shopping-bag-3-line text-4xl"></i>            <span className="text-sm text-blackfaint-c">NO ITEMS IN YOUR CART</span>
          </div>
        }
      </div>
    </div>
  );
}