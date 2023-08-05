import ItemCard from "@/components/ItemCard/ItemCard";
import Loading from "@/components/Loading";
import Sorter from "@/components/SortBy";
import Axios  from "axios"
import { useEffect, useState, useRef, watch } from "react"
import { fromlink } from "@/components/NavMenu/NavMenu";
import { useRouter } from "next/router";
import Image from "next/image";
import { getApiBaseUrl } from "@/apiConfig";

export default function Shoes() {
  const router = useRouter();
  const apiUrl = getApiBaseUrl();

  const [isLoading, setIsLoading] = useState(false);
  const maxP = useRef() 
  const minP = useRef() 
    const [hidden, setHidden] = useState("")
const [sortOrder, setSortOrder] = useState("new");
  const [items, setItems] = useState([])
  const [minvalue, setminValue] = useState()
  const [maxvalue, setmaxValue] = useState()
  const [checkedFilters, setCheckedFilters] = useState({
    model: [],
    color: [],
    size: [] 
  });
    const handleHidden = (e) => {
      setHidden(!hidden)
    }
  const handleCheck = (e) => {
    const { name, value } = e.target;
    setCheckedFilters(prev => {
      if (e.target.checked) {
        return {...prev, [name]: [...prev[name], value]}
      } else {
        return {...prev, [name]: prev[name].filter(item => item !== value)}
      }
    });
  };


 useEffect(() => {
  const { category, color, size } = router.query;
  if (category) {
    setCheckedFilters(prev => ({
      ...prev,
      model: [...prev.model, category]
    }));
  }
  if (color) {
    setCheckedFilters(prev => ({
      ...prev,
      color: [...prev.color, color]
    }));
  }
  if (size) {
    setCheckedFilters(prev => ({
      ...prev,
      size: [...prev.size, size]
    }));
  }
}, [router.query]);
  useEffect(() => {
    setIsLoading(true);

    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await Axios.get(`${apiUrl}/items`);

    const filteredItems = response.data.filter(item => item.typeofI === "shoes");
    setItems(filteredItems);
    setIsLoading(false);
  };
  
  useEffect(() => { 
    setIsLoading(true);
  
    async function fetchItems() {
      try {
        const response = await Axios.get(`${apiUrl}/items`);
    
        let sortedItems = response.data.filter(item => item.typeofI === "shoes");;
    
        if (sortOrder === "PriceD") {
          sortedItems = [...sortedItems].sort((a, b) => b.Price - a.Price);
        } else if (sortOrder === "PriceA") {
          sortedItems = [...sortedItems].sort((a, b) => a.Price - b.Price);
        } else if (sortOrder === "new") {
          sortedItems = [...sortedItems].sort((a, b) => new Date(b.date) - new Date(a.date));
        }
    
        let filteredItems = sortedItems;
        if (
          checkedFilters.model.length > 0 ||
          checkedFilters.color.length > 0 ||
          checkedFilters.size.length > 0 ||
          minvalue !== undefined ||
          maxvalue !== undefined
        ) {
          filteredItems = sortedItems.filter(item => {
            return (
              (checkedFilters.model.length === 0 || checkedFilters.model.some(model => item.Category.includes(model))) &&
              (checkedFilters.color.length === 0 || checkedFilters.color.some(color => item.Color.includes(color))) &&
              (checkedFilters.size.length === 0 || checkedFilters.size.some(size => item.itemSize.includes(size))) &&
              (minvalue === undefined || item.Price >= minvalue) &&
              (maxvalue === undefined || item.Price <= maxvalue)
            );
          });
        }
    
        setItems(filteredItems);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchItems(); 
  }, [checkedFilters, minvalue, maxvalue, sortOrder]);


 
  const handleminChange = e => {
    setminValue(parseInt(e.target.value));
  };
  
  const handlemaxChange = e => {
    setmaxValue(parseInt(e.target.value));
  };
  

  
    const handleClick = e => {
      const curTarg = e.currentTarget;
        curTarg.classList.toggle('active'); 
    };
  return (
    
    <>
    <div className="flex justify-between md:justify-end mt-14 md:mt-2 mb-0 mr-2  "><button className={`md:hidden ${hidden? " bg-main-t": "bg-third-c" } duration-500 mt-2 ml-2 p-2 flex justify-start items-center rounded-full`} onClick={handleHidden}><i class="ri-filter-2-fill text-2xl  "></i><span className="font-thin text-xs">Filters</span></button>
    <Sorter onSortOrderChange={setSortOrder} />
        </div>
    <div className="flex  ">
    <div className={`flex-col p-0.5 pr-0 space-y-2  filters ${hidden? "absolute flex opacity-100 z-50 w-44": 'hidden'} md:relative md:flex ml-2 mr-2 md:m-0 md:mr-2 pt-2   w-32 md:w-48 lg:w-52 `}>
       <div className=' flex modelSec flex-col space-y-3  bg-third-c p-2 relative' >
        <span className="font-bold block text-sm">Model</span>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="classic" onChange={handleCheck} checked={checkedFilters.model.includes("classic")}></input> <span>Classic</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="sneakers"onChange={handleCheck} checked={checkedFilters.model.includes("sneakers")}></input> <span>Sneakers</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="slippers"onChange={handleCheck} checked={checkedFilters.model.includes("slippers")}></input> <span>Slippers</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="boot"onChange={handleCheck} checked={checkedFilters.model.includes("boot")}></input> <span>Boot</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="zip-boot"onChange={handleCheck} checked={checkedFilters.model.includes("zip-boot")}></input> <span>Zip boot</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="model" value="chelsea"onChange={handleCheck} checked={checkedFilters.model.includes("chelsea")}></input> <span>Chelsea</span></label>
        <button onClick={handleClick} className="absolute seeMore bg-sub-c w-6 h-6 rounded-full flex justify-center items-center bottom-1 right-1"><i class="ri-arrow-down-s-line text-main-t font-black "></i></button>

        </div> 
        <div className="flex modelSec flex-col   bg-third-c p-2 space-y-3 relative" >
        <span className="font-bold block text-sm">Color</span>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="color" value="black"onChange={handleCheck}></input> <span>Black</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="color" value="beige"onChange={handleCheck}></input> <span>Beige</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="color" value="blue"onChange={handleCheck}></input> <span>Blue</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="color" value="cyan"onChange={handleCheck}></input> <span>Cyan</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="color" value="red"onChange={handleCheck}></input> <span>Red</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="color" value="white"onChange={handleCheck}></input> <span>White</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="color" value="green"onChange={handleCheck}></input> <span>Green</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="color" value="darkgreen"onChange={handleCheck}></input> <span>Dark Green</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="color" value="mint"onChange={handleCheck}></input> <span>mint</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="color" value="pink"onChange={handleCheck}></input> <span>Pink</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="color" value="mixed"onChange={handleCheck}></input> <span>Mixed</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="color" value="purple"onChange={handleCheck}></input> <span>Purple</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="color" value="khaki"onChange={handleCheck}></input> <span>Khaki </span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="color" value="yellow"onChange={handleCheck}></input> <span>Yellow</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="color" value="browen"onChange={handleCheck}></input> <span>Browen</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="color" value="havan"onChange={handleCheck}></input> <span>Havan</span></label>
        <button  onClick={handleClick}  className="absolute seeMore bg-sub-c w-6 h-6 rounded-full flex justify-center items-center bottom-1 right-1"><i class="ri-arrow-down-s-line text-main-t font-black "></i></button>

        </div> <div className="flex modelSec  bg-third-c p-2 flex-col space-y-3  relative" >
        <span className="font-bold block text-sm">Size</span>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="size" value="40"onChange={handleCheck}></input> <span>40</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="size" value="41"onChange={handleCheck}></input> <span>41</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="size" value="42"onChange={handleCheck}></input> <span>42</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="size" value="43"onChange={handleCheck}></input> <span>43</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="size" value="44"onChange={handleCheck}></input> <span>44</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="size" value="45"onChange={handleCheck}></input> <span>45</span></label>
        <label className="flex space-x-2 cursor-pointer  items-center "><input type="checkbox" className="" name="size" value="46"onChange={handleCheck}></input> <span>46</span></label>
        <button  onClick={handleClick} className="absolute seeMore bg-sub-c w-6 h-6 rounded-full flex justify-center items-center bottom-1 right-1"><i class="ri-arrow-down-s-line text-main-t font-black "></i></button>
        </div> 
        <div className="flex numrange h-fit modelSec ml-2  flex-col space-y-3  bg-third-c p-2  relative " >
        <span className="font-bold block text-sm">Price Range</span>
        
        <span   className="  bg-white p-2  text-xs ">min <span className=" text-base font-bold">{minvalue}</span> EGP <br></br>
        <input ref={minP} className=" bg-sub-c appearance-none rounded-large " type="range" min="148" max="1999" onChange={handleminChange}></input></span>

        <span  className="   bg-white  p-2 text-xs ">max <span className=" text-base font-bold">{maxvalue}</span> EGP <br></br>
        <input ref={maxP} className="bg-sub-c appearance-none rounded-large" type="range" min={minvalue} max="1999" onChange={handlemaxChange}></input>
</span>
         

        </div> 
    </div>
    
   
    
  { isLoading? <Loading/>:  <div className=" justify-center grid grid-cols-2 xl:grid-cols-4 min-h-full  lg:grid-cols-3 w-full h-fit ">
    {items.map(item => {
                const imgarr =item.itemImage

        return(
            <ItemCard key={item._id} autoPlay={true} infiniteLoop={true} animationHandler={"fade"}
               stopOnHover={true} emulateTouch={true} 
               showArrows={false} transitionTime={1000} 
               interval={8000} showThumbs={false} showIndicators={false}
               imgArr={imgarr.map(img => {return <Image key={img} height={1200} width={960} src={"/"+img} className="w-96"/>})} 
               itemId={item._id} label={item.label} img={item.itemImage} price={item.Price} href={`item/${item._id} `}   EGP={'EGP'}
            />
        )
    })}  

      </div>}
    
    </div>
    </>
  )
  
}
