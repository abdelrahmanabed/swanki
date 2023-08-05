import Document from "@/pages/_document"
import Link from "next/link"
import { useState } from "react"
export default function NavMenu() {
    const [lastClickedLink, setLastClickedLink] = useState("");
    const handleinaactive = () => {
        const accsecheader = document.querySelector('#navmenu')
        const burger = document.querySelector('#burgermenu')
    
        if (accsecheader.classList.contains('aactive') || burger.classList.contains('aactive')  ){
          accsecheader.classList.remove('aactive')
          accsecheader.classList.remove('active')
          burger.classList.remove('active')

          burger.classList.remove('aactive')

        }
      }
    const handleNavc=()=>{
        const cns = document.querySelector('.clothsnavspan')
        const sns = document.querySelector('.shoesnavspan')
        const bns = document.querySelector('.bagsnavspan')
        const ans = document.querySelector('.accessorisnavspan')
        const cn = document.querySelector('.clothsnavdiv')
        const sn = document.querySelector('.shoesnavdiv')
        const bn = document.querySelector('.bagsnavdiv')
        const an = document.querySelector('.accessorisnavdiv')
        const csn = document.querySelector('.clothsnavsubdiv')
        const ssn = document.querySelector('.shoesnavsubdiv')
        const bsn = document.querySelector('.bagsnavsubdiv')
        const asn = document.querySelector('.accessorisnavsubdiv')

        if(!cns.classList.contains('aactive')){
            cns.classList.add('aactive')
            sns.classList.remove('aactive')
            bns.classList.remove('aactive')
            ans.classList.remove('aactive')
            cn.classList.add('aactive')
            sn.classList.remove('aactive')
            bn.classList.remove('aactive')
            an.classList.remove('aactive')
            csn.classList.add('aactive')
            ssn.classList.remove('aactive')

            bsn.classList.remove('aactive')
            asn.classList.remove('aactive')

        }
    }
   
    const handleNavs=()=>{
        const cns = document.querySelector('.clothsnavspan')
        const sns = document.querySelector('.shoesnavspan')
        const bns = document.querySelector('.bagsnavspan')
        const ans = document.querySelector('.accessorisnavspan')
        const cn = document.querySelector('.clothsnavdiv')
        const sn = document.querySelector('.shoesnavdiv')
        const bn = document.querySelector('.bagsnavdiv')
        const an = document.querySelector('.accessorisnavdiv')
        const csn = document.querySelector('.clothsnavsubdiv')
        const ssn = document.querySelector('.shoesnavsubdiv')
        const bsn = document.querySelector('.bagsnavsubdiv')
        const asn = document.querySelector('.accessorisnavsubdiv')

        if(!sns.classList.contains('aaactive')){
            cns.classList.remove('aactive')
            sns.classList.add('aactive')
            bns.classList.remove('aactive')
            ans.classList.remove('aactive')
            cn.classList.remove('aactive')
            sn.classList.add('aactive')
            bn.classList.remove('aactive')
            an.classList.remove('aactive')
            csn.classList.remove('aactive')
            ssn.classList.add('aactive')

            bsn.classList.remove('aactive')
            asn.classList.remove('aactive')

        }
    }
    const handleNavb=()=>{
        const cns = document.querySelector('.clothsnavspan')
        const sns = document.querySelector('.shoesnavspan')
        const bns = document.querySelector('.bagsnavspan')
        const ans = document.querySelector('.accessorisnavspan')
        const cn = document.querySelector('.clothsnavdiv')
        const sn = document.querySelector('.shoesnavdiv')
        const bn = document.querySelector('.bagsnavdiv')
        const an = document.querySelector('.accessorisnavdiv')
        const csn = document.querySelector('.clothsnavsubdiv')
        const ssn = document.querySelector('.shoesnavsubdiv')
        const bsn = document.querySelector('.bagsnavsubdiv')
        const asn = document.querySelector('.accessorisnavsubdiv')

        if(!bns.classList.contains('aactive')){
            cns.classList.remove('aactive')
            sns.classList.remove('aactive')
            bns.classList.add('aactive')
            ans.classList.remove('aactive')
            cn.classList.remove('aactive')
            sn.classList.remove('aactive')
            bn.classList.add('aactive')
            an.classList.remove('aactive')
            csn.classList.remove('aactive')
            ssn.classList.remove('aactive')

            bsn.classList.add('aactive')
            asn.classList.remove('aactive')

        }
    }
    const handleNava=()=>{
        const cns = document.querySelector('.clothsnavspan')
        const sns = document.querySelector('.shoesnavspan')
        const bns = document.querySelector('.bagsnavspan')
        const ans = document.querySelector('.accessorisnavspan')
        const cn = document.querySelector('.clothsnavdiv')
        const sn = document.querySelector('.shoesnavdiv')
        const bn = document.querySelector('.bagsnavdiv')
        const an = document.querySelector('.accessorisnavdiv')
        const csn = document.querySelector('.clothsnavsubdiv')
        const ssn = document.querySelector('.shoesnavsubdiv')
        const bsn = document.querySelector('.bagsnavsubdiv')
        const asn = document.querySelector('.accessorisnavsubdiv')

        if(!ans.classList.contains('aactive')){
            cns.classList.remove('aactive')
            sns.classList.remove('aactive')
            bns.classList.remove('aactive')
            ans.classList.add('aactive')
            cn.classList.remove('aactive')
            sn.classList.remove('aactive')
            bn.classList.remove('aactive')
            an.classList.add('aactive')
            csn.classList.remove('aactive')
            ssn.classList.remove('aactive')

            bsn.classList.remove('aactive')
            asn.classList.add('aactive')

        }
    }
        
        
      
      return (
        

        <div id="navmenu" className=" overflow-x-hidden opacity-0 duration-300 navmenu absolute bg-third-c flex flex-col md:hidden z-40  p-5 ">
            <div className="mainnavdiv flex justify-center mt-16  space-x-5 text-xs">
          <span onClick={handleNavc} class={`clothsnavspan aactive  px-2 py-2 sm:p-4 rounded-full font-bold `}>CLOTHS</span>
          <span onClick={handleNavs} className=" shoesnavspan  px-2 py-2 sm:p-4 rounded-full  font-bold">SHOES</span>
          <span onClick={handleNavb} className="bagsnavspan  px-2 py-2 sm:p-4 rounded-full font-bold">BAGS</span>
          <span onClick={handleNava} className="accessorisnavspan  px-2 py-2 sm:p-4 rounded-full  font-bold">ACCESSORIS</span>
             </div>
            
             <div className=" flex relative h-2/4  w-full flex-col justify-center items-center mt-10  py-5 ">
        <div id="ClothsNav" className={`clothsnavdiv aactive subnav flex subnav1`}>
            <Link onClick={handleinaactive} href="/clothes"  className="bg-white allnav"><span className="">All</span></Link>
            <Link onClick={handleinaactive} href="/clothes?category=t-shirts" className=""><img src="/img/tshirt.webp"></img><span>t-shirts</span></Link>    
            <Link onClick={handleinaactive} href="/clothes?category=shirts"  className=""><img src="/img/shirtsef.webp"></img><span>Shirts</span></Link>
            <Link onClick={handleinaactive} href="/clothes?category=trousers" className=""><img  src="/img/cargo.jpg.webp"></img><span>Trousers</span></Link>
        </div>
        <div id="ShoesNav" className={` shoesnavdiv  subnav flex subnav1`}>
            <Link onClick={handleinaactive} href="/" className="allnav"><img src=""></img><span>All</span></Link>
            <Link onClick={handleinaactive} href="/" className=""><img src="/img/sneakers.webp"></img><span>Sneakers</span></Link>
            <Link onClick={handleinaactive} href="/" className=""><img src="/img/shoess.jpg"></img><span>Classic</span></Link>
            <Link onClick={handleinaactive} href="/" className=""><img className="h-full" src="/img/runningg.webp"></img><span>Running</span></Link>
        </div>
        <div id="BagsNav" className="bagsnavdiv subnav flex">
            <Link onClick={handleinaactive} href="/" className="allnav"><img src=""></img><span>All</span></Link>
            <Link onClick={handleinaactive} href="/" className=""><img src="/img/packback.webp"></img><span>Backpack</span></Link>
            <Link onClick={handleinaactive} href="/" className=""><img src="/img/crossbag.webp"></img><span>Cross Bag</span></Link>
            <Link onClick={handleinaactive} href="/" className=""><img src="/img/hanbag.webp"></img><span>Hand Bag</span></Link>
        </div>
        <div id="AccNav" className="accessorisnavdiv subnav flex ">
            <Link onClick={handleinaactive} href="/" className="allnav"><img src=""></img><span>All</span></Link>
            <Link onClick={handleinaactive} href="/" className=""><img src="/img/belts.jpeg"></img><span>Belts</span></Link>
            <Link onClick={handleinaactive} href="/" className=""><img src="/img/hats.webp"></img><span>Hats</span></Link>
            <Link onClick={handleinaactive} href="/" className=""><img src="/img/wallets.jpg"></img><span>Wallets</span></Link>

        </div></div>
        <div className="flex   w-full flex-col items-center mt-10  py-5">
        <div id="#ClothsSubNav" className="clothsnavsubdiv aactive flex subsubnav" >
            <Link href="/clothes?category=s-short" className=""><span>Swimming Short</span></Link>
            <Link href="/clothes?category=polo-t" className="/clothes?category=polo-t"><span>Polo T-shirt</span></Link>
            <Link href="/clothes?category=jeans" className=""><span>Jeans</span></Link>
            <Link href="/clothes?category=chino" className=""><span>Chino Pants</span></Link>
            <Link href="/clothes?category=sweatpants" className=""><span>Sweatpants</span></Link>
            <Link href="/clothes?category=s-wear" className=""><span>Sportswear</span></Link>
            <Link href="/clothes?category=o-size" className=""><span>Over Size</span></Link>
            <Link href="/clothes?category=blazer" className=""><span>Blazer</span></Link>
            <Link href="/clothes?category=basics" className=""><span>basics</span></Link>
            <Link href="/clothes?category=h-wear" className=""><span>Home Wear</span></Link>
            <Link href="/clothes?category=shorts" className=""><span>Shorts</span></Link>


        </div>
        <div id="#ShoesSubNav" className="shoesnavsubdiv  subsubnav" >
        <Link href="" className=""><span>Sweatpants</span></Link>
            <Link href="" className=""><span>Sportswear</span></Link>
            <Link href="" className=""><span>Big Size Collection</span></Link>
            <Link href="" className=""><span>Blazer</span></Link>
        </div>
        <div id="#BagsSubNav" className="bagsnavsubdiv subsubnav " >
        <Link href="" className=""><span>Sweatpants</span></Link>
            <Link href="" className=""><span>Sportswear</span></Link>
            <Link href="" className=""><span>Big Size Collection</span></Link>
            <Link href="" className=""><span>Blazer</span></Link>
        </div>
        <div id="#AccSubNav" className="subsubnav accessorisnavsubdiv" >
        <Link href="" className=""><span>Sweatpants</span></Link>
            <Link href="" className=""><span>Sportswear</span></Link>
            <Link href="" className=""><span>Big Size Collection</span></Link>
            <Link href="" className=""><span>Blazer</span></Link>
            <Link href="" className=""><span>Ties</span></Link>

        </div>
        </div>
        </div>
  
      )
    }


