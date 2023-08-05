

export default function Footer() {

    return (
      
<div id="Footer" className=" flex-col justify-self-end    overflow-hidden mb-0 flex ">

        <div className="  bg-third-c flex items-center px-3 py-2 justify-between">
            <div className="items-center flex  ">
            <span className=" mr-3 text-sm font-light hidden md:block ">DOWNLOAD MOBILE APP</span> <a className="     hover:text-sub-t mr-2 duration-300  text-2xl  md:text-4xl"><i class="ri-google-play-fill"></i></a> <a className="  hover:text-blue-c duration-300 text-2xl  rounded-lg  md:text-4xl"><i class="ri-app-store-fill"></i></a> </div>
            <div className=" text-2xl p-1 rounded-large flex space-x-3 items-center justify-center "><span className="ml-3  text-sm mr-3 hidden font-light md:block">FOLLOW US</span> 
            <a><i class="ri-facebook-circle-fill bg-opacity-50 p-1 md:text-4xl rounded-full hover:bg-main-c hover:text-blue-c duration-300"></i></a>
            <a><i class="ri-instagram-line  bg-opacity-50 p-1 md:text-4xl rounded-full hover:bg-main-c hover:text-white duration-300"></i></a>
            <a><i class="ri-youtube-fill   bg-opacity-50 p-1 md:text-4xl rounded-full  hover:bg-main-c hover:text-red duration-300"></i></a>
            <a><i class="ri-twitter-fill  bg-opacity-50 p-1 md:text-4xl rounded-full hover:bg-main-c hover:text-blue-c duration-300"></i></a>
            <a><i class="ri-tiktok-fill  bg-opacity-50 p-1 md:text-4xl rounded-full hover:bg-main-c hover:text-bluef-c duration-300"></i></a>
            <a><i class="ri-pinterest-fill  bg-opacity-50 p-1 md:text-4xl rounded-full hover:bg-main-c hover:text-red duration-300"></i></a>

            </div>
        </div>

        <div className="bg-third-c ">
        <div className="flex text-xs md:text-sm lg:text-base space-x-2 my-5 mx-3 items-center">
            <span className=" font-extralight ">Help</span>
            <a className="bg-white p-2 rounded-full">Questions</a>
            <a className="bg-white p-2 rounded-full">Returns and exchange</a>
            <a className="bg-white p-2 rounded-full">Instructions of use</a>
        </div>
        <div className="flex text-xs md:text-sm lg:text-base space-x-2  my-5 mx-3 items-center">
        <span className="font-extralight ">We</span>
            <a className="bg-white p-2 rounded-full">About us</a>
            <a className="bg-white p-2 rounded-full">Address</a>
            
        </div>
        <div className="flex text-xs md:text-sm lg:text-base space-x-2  my-5 mx-3 items-center">
        <span className="font-extralight ">Policies</span>
            <a className="bg-white p-2 rounded-full">Data privacy and security policy</a>
            
        </div>
        <div className="flex text-xs md:text-sm lg:text-base space-x-2 my-5 mx-3 items-center">
        <span className="font-extralight ">Support</span>
        <div className="flex text-xs md:text-sm lg:text-base space-x-2 ">
            <a className=" bg-sub-c p-2 text-white rounded-full">Call Us</a>
            <a className=" bg-sub-c text-white p-2 rounded-full">Whatsapp</a>
            <a className=" bg-main-c text-white p-2 rounded-full">Track your order</a>

            </div>
            
        </div>
        <div className="flex justify-center mx-5 my-4">
            <h1 className="font-bold text-xs">SWANKY - MENS WEAR STORE</h1>
        </div>
        </div>
       
</div>
    )
  }