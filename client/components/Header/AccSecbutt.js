import Link from "next/link"

export default function AccSecButt(props) {


    const handleAccSec = () => {
        const AccSec = document.getElementById('accsecheader')
        const AccSecBut = document.getElementById('accsecbut')

      
        AccSec.classList.toggle('active')
        AccSecBut.classList.toggle('active')

      }
      
      
    
    
    return (
      <>
         <button  onClick={handleAccSec} id="accsecbut" className=" z-50 group  flex items-center  md:bg-third-c active:bg-main-t bg-white font-light rounded-full p-2 mx-1 text-xs duration-100 ">{props.userName}<i class="ri-account-circle-fill mx-1 text-xl duration-200 group-hover:text-main-t font-bold"></i></button>
      </>

        )
  }