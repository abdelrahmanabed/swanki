import Link from "next/link"

export default function ToSignButt() {

   
      
      const handlepress = () => {
        const signupdiv = document.getElementById('signup')
            const togsign = document.getElementById('tosign')
        const regdiv = document.getElementById('register')
        if (!regdiv.classList.contains('register')) {
            
            signupdiv.classList.toggle('active')
            togsign.classList.toggle('active')
            regdiv.classList.toggle('active')
        }}

    
    
    return (
         <button href="" id="tosign" onClick={handlepress} className="z-50 md:mx-1 md:bg-third-c  bg-white  p-2 flex justify-center items-center rounded-full"><i class="mx-1 ri-user-3-fill text-xl "></i></button>

        )
  }