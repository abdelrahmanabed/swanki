import Loading from "@/components/Loading";
import Link from "next/link"
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false); // Set isLoading to true initially

  useEffect(() => {
    window.Loading = () => {
      setIsLoading(true);
    };
  }, []);

  return (
    <>
      {isLoading ? ( // Display the spinner when isLoading is true
        <Loading/>
      ) : (
        // Display the page content when isLoading is false
        <main className="my- mx-auto overflow-x-hidden p-0 pt-0 duration-500">
          <div className="items-center  text-center w-full   duration-500 grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1  text-white ">
            <Link href="/clothes" className="group   h-full duration-500 relative bg-main-c flex justify-center items-center     duration-300  overflow-hidden"><img src="wear2.jpg" className="  h-full "></img><span className=" text-sm md:text-xl font-bold p-2 rounded-full bg-sub-c absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 group-hover:-top-2/4 duration-300">CLOTHES</span> <span className="text-xl font-bold p-2 rounded-full bg-white text-main-c absolute -top-2/4 group-hover:top-2/4 group-hover:text-4xl left-2/4 -translate-x-2/4 -translate-y-2/4 duration-300 ">GO!</span></Link>
            <Link href="/shoes" className="group     relative bg-main-c duration-500  h-full    flex justify-center items-center     overflow-hidden  duration-300 "><img src="shoes2.jpg" className="  h-full  "></img><span className="text-sm  md:text-xl font-bold p-2 rounded-full bg-sub-c  absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 group-hover:-top-2/4 duration-300">SHOES</span> <span className="text-xl font-bold p-2 rounded-full bg-white text-main-c absolute -top-2/4 group-hover:top-2/4 group-hover:text-4xl left-2/4 -translate-x-2/4 -translate-y-2/4 duration-300 ">GO!</span></Link>
            <Link href="/bags" className="group   relative  bg-main-c h-full  duration-500 flex justify-center items-center  overflow-hidden  duration-300"><img src="bag2.jpg" className="   h-full "></img><span className="text-sm  md:text-xl font-bold p-2 rounded-full bg-sub-c  absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 group-hover:-top-2/4 duration-300">BAGS</span> <span className="text-xl font-bold p-2 rounded-full bg-white text-main-c absolute -top-2/4 group-hover:top-2/4 group-hover:text-4xl left-2/4 -translate-x-2/4 -translate-y-2/4 duration-300 ">GO!</span></Link>
            <Link href="/accs" className="group duration-500 relative bg-main-c  h-full  flex  items-center justify-center   overflow-hidden  duration-300"><img src="accs2.jpg" className="  h-full"></img><span className="text-sm  md:text-xl font-bold p-2 rounded-full bg-sub-c  absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 group-hover:-top-2/4 duration-300"> ACCESSORIS</span> <span className="text-xl font-bold p-2 rounded-full bg-white text-main-c absolute -top-2/4 group-hover:top-2/4 group-hover:text-4xl left-2/4 -translate-x-2/4 -translate-y-2/4 duration-300 ">GO!</span></Link>
          </div>
        </main>
      )}
    </>
  )
}