import Axios from "axios"
import { useRef } from "react"
import { useEffect, useState } from "react"

export default function CreateItem() {
const [name, setName] = useState("")
const [size, setSize] = useState([])
const [color, setColor] = useState([])
const [itemNumber, setNumber] = useState("")
const [img, setImg] = useState([])
const [price, setPrice] = useState("")
const [typeofI, setTypeofI] = useState("")
const [category, setCategory] = useState([])

const sSize = useRef() 
const cSize = useRef() 
const cCate = useRef() 
const sCate = useRef() 
const bCate = useRef() 
const aCate = useRef() 
const cSubCat = useRef() 
const sSubCat = useRef() 

const handlesSize = () => {
 if (sSize.current.classList.contains("hidden")){

  sSize.current.classList.remove("hidden")
  cSize.current.classList.add("hidden")
  cCate.current.classList.add("hidden")
  sCate.current.classList.remove("hidden")
  bCate.current.classList.add("hidden")
  aCate.current.classList.add("hidden")
  cSubCat.current.classList.add("hidden")
  sSubCat.current.classList.remove("hidden")

 }
}

const handlecSize = () => {
  if (cSize.current.classList.contains("hidden")){
   cSize.current.classList.remove("hidden")
   sSize.current.classList.add("hidden")
   cCate.current.classList.remove("hidden")
   sCate.current.classList.add("hidden")
   bCate.current.classList.add("hidden")
   aCate.current.classList.add("hidden")
   cSubCat.current.classList.remove("hidden")
   sSubCat.current.classList.add("hidden")


  }
 }
 const handlebSize = () => {
  if (bCate.current.classList.contains("hidden")){
   cSize.current.classList.add("hidden")
   sSize.current.classList.add("hidden")
   bCate.current.classList.remove("hidden")
   sCate.current.classList.add("hidden")
   cCate.current.classList.add("hidden")
   aCate.current.classList.add("hidden")
   cSubCat.current.classList.add("hidden")
   sSubCat.current.classList.add("hidden")


  }
 }
 const handleaSize = () => {
  if (aCate.current.classList.contains("hidden")){
    cSize.current.classList.add("hidden")
    sSize.current.classList.add("hidden")
    bCate.current.classList.add("hidden")
    sCate.current.classList.add("hidden")
    cCate.current.classList.add("hidden")
    aCate.current.classList.remove("hidden")
    cSubCat.current.classList.add("hidden")

    sSubCat.current.classList.add("hidden")


  }
 }
 const handlerH = () => {
  if (!cSize.current.classList.contains("hidden") || !sSize.current.classList.contains("hidden")){
   cSize.current.classList.add("hidden")
   sSize.current.classList.add("hidden")

  }
 }
 

const createItem = ()=>{
    Axios.post("http://localhost:5000/createItem",{
        label: name,
        itemSize: size,
        Price :price,
        Color :color,
        itemNumber :itemNumber,
        itemImage: img,
        typeofI: typeofI,
        Category: category,

    })
    .then(res=>{
        setName(res.data)
    })
}
    
    
    return (
        <>
      <form className="flex  flex-col space-y-2 p-2 items-center">
        <input className="bg-third-c p-3 rounded-lg w-72" type="text" placeholder="item name" onBlur={e=>setName(e.target.value)}></input>
        <input className="bg-third-c p-3 rounded-lg w-72" type="number" placeholder="item number" onBlur={e=>setNumber(e.target.value)}></input>
        <input className="bg-third-c p-3 rounded-lg w-72" type="number" placeholder="item price" onBlur={e=>setPrice(e.target.value)}></input>
      <div>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>
      <input className="bg-main-c m-1 p-3 text-white rounded-lg w-72" type="text" placeholder="item img" name="img" onBlur={e=>setImg([...img,e.target.value])}></input>

      </div>
      <div>
       <label>  <input  type="radio" name="typeofitem" value="cloths"  onChange={e=>{setTypeofI(e.target.value); handlecSize();}}></input>cloths</label>
        <label>  <input type="radio" name="typeofitem" value="shoes" onChange={e=>{setTypeofI(e.target.value); handlesSize();}}></input>shoes</label>
        <label> <input type="radio" name="typeofitem" value="bags" onChange={e=>{setTypeofI(e.target.value);handlerH();handlebSize()}}></input>bags</label>
        <label>  <input type="radio" name="typeofitem" value="accs" onChange={e=>{setTypeofI(e.target.value);handlerH();handleaSize()}}></input>accs</label>
        </div>
        
        <div ref={cSize} className="hidden w-72 flex flex-wrap">
        <h1 className="font-bold">Size:</h1>
        <label><input type="checkbox"  name="size" value="S" onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>S</label>
        <label> <input type="checkbox" name="size" value="M" onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>M</label>
        <label> <input type="checkbox" name="size" value="L"onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>L</label>  
        <label>  <input type="checkbox" name="size" value="XL" onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>XL</label>
        <label> <input type="checkbox" name="size" value="XXL" onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>XXL</label>
        <label> <input type="checkbox" name="size" value="XXXL"  onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>XXXL</label>
        <label><input type="checkbox"  name="size" value="39" onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>29</label>
        <label> <input type="checkbox" name="size" value="40" onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>30</label>
        <label> <input type="checkbox" name="size" value="41" onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>31</label>  
        <label>  <input type="checkbox" name="size" value="42" onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>32</label>
        <label> <input type="checkbox" name="size" value="43" onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>33</label>
        <label> <input type="checkbox" name="size" value="44"  onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>34</label>
        <label> <input type="checkbox" name="size" value="45"  onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>36</label>
        <label> <input type="checkbox" name="size" value="46" onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>38</label>
      </div>
      
      <div ref={sSize} onSelect={handlesSize} className="hidden  w-72 flex flex-wrap">
        <h1 className="font-bold">Size:</h1>
        <label><input type="checkbox"  name="size" value="39" onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>39</label>
        <label> <input type="checkbox" name="size" value="40" onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>40</label>
        <label> <input type="checkbox" name="size" value="41" onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>41</label>  
        <label>  <input type="checkbox" name="size" value="42" onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>42</label>
        <label> <input type="checkbox" name="size" value="43" onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>43</label>
        <label> <input type="checkbox" name="size" value="44"  onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>44</label>
        <label> <input type="checkbox" name="size" value="45"  onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>45</label>
        <label> <input type="checkbox" name="size" value="46" onChange={(e) => {if (e.target.checked) {setSize([...size,e.target.value])} else {setSize(size.filter((c) => c !== e.target.value))}}}></input>46</label>
      </div>
      
      <div ref={cCate} className="hidden flex items-center w-72 cat flex-wrap">
        <h1 className="font-bold">Cloths:</h1>
      <label><input type="checkbox"  name="category" value="t-shirts" onChange={(e) => {if (e.target.checked) {setCategory([...category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>t-shirts</label>
      <label> <input type="checkbox" name="category" value="shirts" onChange={(e) => {if (e.target.checked) {setCategory([...category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>shirts</label>
      <label> <input type="checkbox" name="category" value="trousers" onChange={(e) => {if (e.target.checked) {setCategory([...category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>trousers</label>  
      <label><input type="checkbox"  name="Category" value="polo"onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>Polo</label>
      <label> <input type="checkbox" name="Category" value="s-short" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>Swimming Short</label>
      <label> <input type="checkbox" name="Category" value="jeans" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>Jeans</label>  
       <label>  <input type="checkbox" name="Category" value="chino" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>Chino</label>
       <label> <input type="checkbox" name="Category" value="sweatpants" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>Sweatpants</label>
       <label> <input type="checkbox" name="Category" value="s-wear"  onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>Sports wear</label>
        <label> <input type="checkbox" name="Category" value="shorts" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>shorts</label>
        <label>  <input type="checkbox" name="Category" value="blazer"onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>blazer</label>
        <label> <input type="checkbox" name="Category" value="basics" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>Basics</label>
        <label> <input type="checkbox" name="Category" value="h-wear" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>Homewear</label>
        <label> <input type="checkbox" name="Category" value="ss-shirts" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>Short Sleeve Shirts</label>
        <label> <input type="checkbox" name="Category" value="o-size" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>Over size</label>
      </div>

      <div ref={sCate} className="hidden flex cat items-center w-72 flex-wrap">
        <h1 className="font-bold">Shoes:</h1>
      <label><input type="checkbox"  name="category" value="sneakers" onChange={(e) => {if (e.target.checked) {setCategory([...category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>sneakers</label>
      <label> <input type="checkbox" name="category" value="classic" onChange={(e) => {if (e.target.checked) {setCategory([...category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>classic</label>
      <label> <input type="checkbox" name="category" value="slippers" onChange={(e) => {if (e.target.checked) {setCategory([...category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>slippers</label>  
      </div>
      
      <div ref={bCate} className="hidden flex cat items-center w-72 flex-wrap">
        <h1 className="font-bold">Bags:</h1>
      <label><input type="checkbox"  name="category" value="backpack" onChange={(e) => {if (e.target.checked) {setCategory([...category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>backpack</label>
      <label> <input type="checkbox" name="category" value="crossbag" onChange={(e) => {if (e.target.checked) {setCategory([...category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>crossbag</label>
      <label> <input type="checkbox" name="category" value="handbag" onChange={(e) => {if (e.target.checked) {setCategory([...category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>handbag</label>  
      </div>    
      
       <div ref={aCate} className="hidden flex cat items-center w-72 flex-wrap">
        <h1 className="font-bold">Accs:</h1>
      <label><input type="checkbox"  name="category" value="belts" onChange={(e) => {if (e.target.checked) {setCategory([...category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>belts</label>
      <label> <input type="checkbox" name="category" value="hats" onChange={(e) => {if (e.target.checked) {setCategory([...category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>hats</label>
      <label> <input type="checkbox" name="category" value="wallets" onChange={(e) => {if (e.target.checked) {setCategory([...category,e.target.value])} else {setCategory(category.filter((c) => c !== e.target.value))}}}></input>wallets</label>  
      </div>
      
      <div ref={cSubCat} className="hidden flex items-center w-72 flex-wrap">
        <h1 className="font-bold">Category:cloths</h1>
      <label><input type="checkbox"  name="Category" value="polo"onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>Polo</label>
      <label> <input type="checkbox" name="Category" value="s-short" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>Swimming Short</label>
      <label> <input type="checkbox" name="Category" value="jeans" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>Jeans</label>  
       <label>  <input type="checkbox" name="Category" value="chino" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>Chino</label>
       <label> <input type="checkbox" name="Category" value="sweatpants" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>Sweatpants</label>
       <label> <input type="checkbox" name="Category" value="s-wear"  onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>Sports wear</label>
        <label> <input type="checkbox" name="Category" value="b-size" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>big size</label>
        <label>  <input type="checkbox" name="Category" value="blazer"onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>blazer</label>
        <label> <input type="checkbox" name="Category" value="basics" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>Basics</label>
        <label> <input type="checkbox" name="Category" value="homewear" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>Homewear</label>
        <label> <input type="checkbox" name="Category" value="ss-shirts" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>Short Sleeve Shirts</label>
        <label> <input type="checkbox" name="Category" value="o-size" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>Over size</label>
      </div> 
      
      <div  ref={sSubCat} className="hidden flex items-center w-72 flex-wrap">
        <h1 className="font-bold">Category:shoes</h1>
      <label><input type="checkbox"  name="Category" value="chelsea" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>chelsea</label>
      <label> <input type="checkbox" name="Category" value="slipper" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>slipper</label>
      <label> <input type="checkbox" name="Category" value="boot" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>boot</label>  
       <label>  <input type="checkbox" name="Category" value="hightop" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>high top</label>
       <label> <input type="checkbox" name="Category" value="zipboot" onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>zip boot</label>
       <label> <input type="checkbox" name="Category" value="soccer"  onChange={(e) => {if (e.target.checked) {setCategory([...Category,e.target.value])} else {setCategory(Category.filter((c) => c !== e.target.value))}}}></input>soccer</label>

      </div> 
      
      

      <div className="flex items-center w-72 flex-wrap">
        <h1 className="font-bold">Color:</h1>
        <label><input type="checkbox"  name="color" value="red" onChange={(e) => {if (e.target.checked) {setColor([...color,e.target.value])} else {setColor(color.filter((c) => c !== e.target.value))}}}></input>red</label>
        <label><input type="checkbox"  name="color" value="yellow" onChange={(e) => {if (e.target.checked) {setColor([...color,e.target.value])} else {setColor(color.filter((c) => c !== e.target.value))}}}></input>yellow</label>
        <label><input type="checkbox"  name="color" value="orange" onChange={(e) => {if (e.target.checked) {setColor([...color,e.target.value])} else {setColor(color.filter((c) => c !== e.target.value))}}}></input>orange</label>
        <label><input type="checkbox"  name="color" value="grey" onChange={(e) => {if (e.target.checked) {setColor([...color,e.target.value])} else {setColor(color.filter((c) => c !== e.target.value))}}}></input>grey</label>
      <label> <input type="checkbox" name="color" value="blue" onChange={(e) => {if (e.target.checked) {setColor([...color,e.target.value])} else {setColor(color.filter((c) => c !== e.target.value))}}}></input>blue</label>
      <label> <input type="checkbox" name="color" value="purple" onChange={(e) => {if (e.target.checked) {setColor([...color,e.target.value])} else {setColor(color.filter((c) => c !== e.target.value))}}}></input>purple</label>  
       <label> <input type="checkbox" name="color" value="pink" onChange={(e) => {if (e.target.checked) {setColor([...color,e.target.value])} else {setColor(color.filter((c) => c !== e.target.value))}}}></input>pink</label>
       <label> <input type="checkbox" name="color" value="black" onChange={(e) => {if (e.target.checked) {setColor([...color,e.target.value])} else {setColor(color.filter((c) => c !== e.target.value))}}}></input>black</label>
       <label> <input type="checkbox" name="color" value="white"  onChange={(e) => {if (e.target.checked) {setColor([...color,e.target.value])} else {setColor(color.filter((c) => c !== e.target.value))}}}></input>white</label>
        <label> <input type="checkbox" name="color" value="green" onChange={(e) => {if (e.target.checked) {setColor([...color,e.target.value])} else {setColor(color.filter((c) => c !== e.target.value))}}}></input>green</label>
        <label>  <input type="checkbox" name="color" value="cyan" onChange={(e) => {if (e.target.checked) {setColor([...color,e.target.value])} else {setColor(color.filter((c) => c !== e.target.value))}}}></input>cyan</label>
        <label> <input type="checkbox" name="color" value="beige" onChange={(e) => {if (e.target.checked) {setColor([...color,e.target.value])} else {setColor(color.filter((c) => c !== e.target.value))}}}></input>beige</label>
        <label> <input type="checkbox" name="color" value="browen" onChange={(e) => {if (e.target.checked) {setColor([...color,e.target.value])} else {setColor(color.filter((c) => c !== e.target.value))}}}></input>brown</label>
        <label> <input type="checkbox" name="color" value="khaki" onChange={(e) => {if (e.target.checked) {setColor([...color,e.target.value])} else {setColor(color.filter((c) => c !== e.target.value))}}}></input>khaki</label>
        <label> <input type="checkbox" name="color" value="mixed" onChange={(e) => {if (e.target.checked) {setColor([...color,e.target.value])} else {setColor(color.filter((c) => c !== e.target.value))}}}></input>mixed</label>
        <label> <input type="checkbox" name="color" value="darkgreen" onChange={(e) => {if (e.target.checked) {setColor([...color,e.target.value])} else {setColor(color.filter((c) => c !== e.target.value))}}}></input>darkgreen</label>
        <label> <input type="checkbox" name="mint" value="darkgreen" onChange={(e) => {if (e.target.checked) {setColor([...color,e.target.value])} else {setColor(color.filter((c) => c !== e.target.value))}}}></input>mint</label>
      </div>
        <button className="bg-main-c w-fit p-5 rounded-lg text-white" onClick={createItem}>Create Item</button>
      </form>
      </>
        )


  }      
