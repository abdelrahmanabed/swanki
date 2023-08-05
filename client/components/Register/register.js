import Axios from "axios"
import Link from "next/link"
import { useState } from "react"
import { useCookies } from "react-cookie"
import { getApiBaseUrl } from "../../apiConfig";

export default function Register() {
  const apiUrl = getApiBaseUrl();

const [useremail, setEmail] = useState("")
const [password, setPassword] = useState("")
const [firstname, setFirstName] = useState("")
const [lastname, setLastName] = useState("")
const [phone, setPhone] = useState("")
const [invaild , setInvaild] = useState("")
const [passwordcon , setPasswordCon] = useState("")
const [_,setCookies] = useCookies('access_token')
const [error, setError] = useState("");



const onSubR = async (e) => {
  e.preventDefault();

  try {
    if (!firstname || !lastname) {
      throw new Error('Please enter your full name');
    }

    if (firstname.search(/[0-9]/) > 0 || lastname.search(/[0-9]/) > 0) {
      throw new Error('Your Name cannot include Link number');
    }

    if (!useremail) {
      throw new Error('Please enter your correct Email Address');
    }

    if (!phone || phone.length !== 13) {
      throw new Error('Please enter your correct phone number');
    }

    if (!/[a-z]/i.test(password)) {
      throw new Error('Your password needs at least one letter');
    }

    if (password.search(/[0-9]/) <= 0) {
      throw new Error('Your password needs at least one number');
    }

    if (password.length < 8) {
      throw new Error('Your password needs Link minimum of 8 characters');
    }

    if (password !== passwordcon) {
      throw new Error("Your password doesn't match the confirmation password");
    }

    if (!firstname || !useremail || !password || !lastname || !phone) {
      throw new Error('All fields are required');
    }

    const response = await Axios.post(`${apiUrl}/register`, {
      email: useremail,
      password,
      firstname,
      lastname,
      phone,
    });

    console.log(response);
    window.location.reload();
  } catch (error) {
    if (error.response && error.response.status >= 400 && error.response.status <= 500) {
      setError(error.response.data.message);
    } else {
      // This is not an Axios error, so we can display the error message directly.
      setError(error.message);
    }
  }
};
const onSubl = async (e) => {
  e.preventDefault();

  if (!useremail) {
    setInvaild('please enter your correct Email Address')
  }
  if (password.length < 8) {
  }
  if (!useremail || !password) {
    setInvaild("All fields are required")
  }

  Axios.post(`${apiUrl}/login`, {
    email: useremail,
    password
  }).then((response) => {
    const token = response.data.token;
    const adminID = response.data.adminID;
    const Favourites = response.data.Favourites
    const Cart = response.data.Cart
    const firstName = response.data.firstName
    const lastName = response.data.lastName

    setCookies('access_token', token)
    localStorage.setItem('adminID', adminID)
    localStorage.setItem("favourites", JSON.stringify(Favourites));
    localStorage.setItem("cart", JSON.stringify(Cart));
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)

    console.log(response)
    window.location.reload()
  }).catch((error) => {
    if (error.response && error.response.status >= 400 && error.response.status <= 500) {
      setError(error.response.data.message);
    } else {
      // This is not an Axios error, so we can display the error message directly.
      setError(error.message);
    }
  });
}

   
    const clickToLogin = ()=>{
        
        const signindiv = document.getElementById('Login')
    const signupdiv = document.getElementById('signup')
        const signinbtn = document.getElementById('signinbtn')
        const signupbtn =document.getElementById('signupbtn')

        if (signupdiv.classList.contains('aactive')) {
        signindiv.classList.add('aactive')
        signupdiv.classList.remove('aactive')
        signinbtn.classList.add('aactive')
        signupbtn.classList.remove('aactive')
        
        }
         
        
        }
        const clickToreg = ()=>{
            const signindiv = document.getElementById('Login')
            const signupdiv = document.getElementById('signup')
            
        if (signindiv.classList.contains('aactive')) {
            signupdiv.classList.add('aactive')
            signindiv.classList.remove('aactive')
            signinbtn.classList.remove('aactive')
            signupbtn.classList.add('aactive')
           }
        }
        
    return (
<div id="register" className=" w-full md:w-fit h-screen p-2 duration-300md:bg-opacity-0  z-50  justify-center md:justify-end  items-start bg-third-c  active:right-0 -right-full  md:p-2 absolute  flex ">
 <div className=" bg-third-c md:float-right w-fit flex items-center justify-center p-5 md:p-5 md:px-24  space-x-10  rounded-full ">
<button onClick={clickToLogin} id='signinbtn' className="  font-bold  p-2 px-4 rounded-full aactive duration-300"> Sign in </button>  
<button id='signupbtn' onClick={clickToreg} className=" duration-300 font-bold  p-2 px-4 rounded-full">Sign up</button>
</div>



<div id="Login" onSubmit={onSubl} className="aactive duration-300  w-full  md:w-fit  bg-third-c p-5 absolute top-24 -right-full opacity-0  rounded-large  ">

<form  className="flex-col flex justify-center  sm:items-center space-y-3 md:space-y-5">

<input type="text"
 placeholder="Email or Phone" 
 className="bg-white p-3 rounded-full sm:w-2/3 md:w-96 md:text-xl "
 value={useremail}
 onChange={e=> setEmail(e.target.value)}  >
 </input>

<input type="password" 
placeholder="password" 
value={password}
onChange={e=> setPassword(e.target.value)}
className="bg-white p-3 rounded-full sm:w-2/3 md:w-96 md:text-xl ">
</input>

<div className="block sm:w-2/3 md:w-96 justify-between sm:justify-around  md:space-x-64 ">
 <span><Link href="/" className=" text-sm text-blackfaint-c">Forgot your password?</Link > </span>   
 <input id="login" type="submit" className=" float-right  bg-main-t  w-fit p-4 px-6 rounded-full font-extrabold items-self-end" value="Login"></input>
 </div>

</form>
<span> {error && <div>{error}</div>} </span>
<span className="text-sm mr-2">First time?</span><Link href="/" className="text-sm bg-white p-2 rounded-full"> Create  new account</Link >
</div>



<div id="signup" className=" w-full md:w-fit  bg-third-c p-5 absolute top-24  -right-full duration-300   ">
<form onSubmit={onSubR} className="flex-col flex sm:items-center space-y-3 md:space-y-5">
<div className="sm:w-2/3 md:w-96 space-x-2 flex">
<input type="text" onChange={e=> setFirstName(e.target.value)} 
 placeholder="First Name" className="bg-white p-3 rounded-full  md:text-xl w-full"></input>

<input onChange={e=> setLastName(e.target.value)}
 type="text" placeholder="Last Name" className="bg-white p-3 rounded-full md:text-xl w-full"></input>
</div>
<input  value={useremail} onChange={e=> setEmail(e.target.value)} type="Email"  placeholder="Email Address" className="bg-white p-3 rounded-full sm:w-2/3 md:w-96 md:text-xl "></input>

<div className="flex sm:w-2/3 md:w-96 space-x-2"><input type="tel" readOnly value={'+20'} className="p-3 rounded-full bg-white w-14" ></input> <input onChange={e=> setPhone(e.target.value)}  type="tel" placeholder="Phone Number : ex 1023456789" className="bg-white p-3 rounded-full w-full md:text-xl "></input></div>

<input value={password} onChange={e=> setPassword(e.target.value)} type="password" placeholder="password" className="bg-white p-3 rounded-full sm:w-2/3 md:w-96 md:text-xl"></input>
<input value={passwordcon} onChange={e=> setPasswordCon(e.target.value)} type="password" placeholder="confirm password" className="bg-white p-3 rounded-full sm:w-2/3 md:w-96 md:text-xl"></input>

<div className="w-full sm:w-2/3 md:w-96">
<span className=" text-xs text-pink-c self-start">{invaild}</span>
<span> {error && <div>{error}</div>} </span>
 <input type="submit" className="   float-right  bg-main-t w-fit p-4 px-6 rounded-full font-extrabold  " value="Sign Up"></input>
</div>

</form>

<span className="text-sm mr-3">Already have account</span><Link href="" className="text-sm bg-white p-2 rounded-full"> Sign in</Link >
</div>

</div>

        )
  }