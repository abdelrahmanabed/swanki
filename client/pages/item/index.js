import ItemCard from "@/components/ItemCard/ItemCard";
import Axios  from "axios"
import { useEffect, useState } from "react"



export default function ProductList() {

  const [items, setItems] = useState([])
useEffect(()=>{
Axios.get("http://localhost:5000/items")
.then(res => {
    setItems(res.data)
})
},[])

    const handleClick = e => {
      const curTarg = e.currentTarget;
        curTarg.classList.toggle('active'); 
    };
  return (
    <div className="flex  ">
    <div className="flex-col p-2  filters hidden  md:flex ml-12 md:m-0 w-32 md:w-48 lg:w-52 ">
       <div className={` flex modelSec flex-col space-y-3  relative`} >
        <span className="font-bold block">Model</span>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="t-shirts"></input> <span>T-shirts</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="trousers"></input> <span>Trousers</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="shirts"></input> <span>shirts</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="jeans"></input> <span>Jeans</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="polo-t"></input> <span>Polo T-shirts</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="sweatpants"></input> <span>Sweatpants</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="chino"></input> <span>Chino</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="blazers"></input> <span>Blazers</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="basics"></input> <span>Basics</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="h-wear"></input> <span>Home Wear</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="s-short"></input> <span>Swimming Short</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="b-size"></input> <span>Big Size</span></label>
        <button onClick={handleClick} className="absolute seeMore bg-main-c w-6 h-6 rounded-full flex justify-center items-center bottom-1 right-1"><i class="ri-arrow-down-s-line text-white font-black "></i></button>

        </div> 
        <div className="flex modelSec flex-col  space-y-3 relative" >
        <span className="font-bold block">Model</span>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="t-shirts"></input> <span>T-shirts</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="trousers"></input> <span>Trousers</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="shirts"></input> <span>shirts</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="jeans"></input> <span>Jeans</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="polo-t"></input> <span>Polo T-shirts</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="sweatpants"></input> <span>Sweatpants</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="chino"></input> <span>Chino</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="blazers"></input> <span>Blazers</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="basics"></input> <span>Basics</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="h-wear"></input> <span>Home Wear</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="s-short"></input> <span>Swimming Short</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="b-size"></input> <span>Big Size</span></label>
        <button  onClick={handleClick}  className="absolute seeMore bg-main-c w-6 h-6 rounded-full flex justify-center items-center bottom-1 right-1"><i class="ri-arrow-down-s-line text-white font-black "></i></button>

        </div> <div className="flex modelSec flex-col space-y-3  relative" >
        <span className="font-bold block">Model</span>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="t-shirts"></input> <span>T-shirts</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="trousers"></input> <span>Trousers</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="shirts"></input> <span>shirts</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="jeans"></input> <span>Jeans</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="polo-t"></input> <span>Polo T-shirts</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="sweatpants"></input> <span>Sweatpants</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="chino"></input> <span>Chino</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="blazers"></input> <span>Blazers</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="basics"></input> <span>Basics</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="h-wear"></input> <span>Home Wear</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="s-short"></input> <span>Swimming Short</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="b-size"></input> <span>Big Size</span></label>
        <button  onClick={handleClick} className="absolute seeMore bg-main-c w-6 h-6 rounded-full flex justify-center items-center bottom-1 right-1"><i class="ri-arrow-down-s-line text-white font-black "></i></button>

        </div> <div className="flex modelSec flex-col space-y-3  relative " >
        <span className="font-bold block">Model</span>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="t-shirts"></input> <span>T-shirts</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="trousers"></input> <span>Trousers</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="shirts"></input> <span>shirts</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="jeans"></input> <span>Jeans</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="polo-t"></input> <span>Polo T-shirts</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="sweatpants"></input> <span>Sweatpants</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="chino"></input> <span>Chino</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="blazers"></input> <span>Blazers</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="basics"></input> <span>Basics</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="h-wear"></input> <span>Home Wear</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="s-short"></input> <span>Swimming Short</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="b-size"></input> <span>Big Size</span></label>
        <button  onClick={handleClick} className="absolute seeMore bg-main-c w-6 h-6 rounded-full flex justify-center items-center bottom-0 right-0"><i class="ri-arrow-down-s-line text-white font-black "></i></button>

        </div> 
    </div>
    
    
    
    <div className="bg-third-c m-2 justify-center rounded-large p-2 flex-wrap flex w-full h-fit ">
    {items.map(item => {
        return(
            <ItemCard key={item._id} label={item.label} img={item.itemImage} price={item.Price} href={item.label+item.itemNumber} />
        )
    })}  
      </div>
    
    </div>
  )
}
   