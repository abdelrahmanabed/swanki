import { useEffect, useState } from "react";
import Loading from "../Loading";
import  Axios  from "axios";
import Image from "next/image";
import { getApiBaseUrl } from "../../apiConfig";

export default function MyOrder(props) {
    const apiUrl = getApiBaseUrl();

    const [isLoading, setIsLoading] = useState(false);
    const [orderNum, setOrderNum] = useState(0);

    const[ordersList,setOrdersList] = useState([])

        const fetchData = async () => {
          const userId = window.localStorage.getItem('adminID');
          const response = await Axios.get(`${apiUrl}/orders`);
    
          const orders = response.data.filter(item => item.userId === userId);
          setOrdersList(orders);
        };
        useEffect(()=>{
            fetchData();

        },[])
   
    return (
        <div id="my-order" className="  flex flex-wrap bg-white p-2 rounded-large">
            {isLoading? <Loading/> :
            <>
            {ordersList.map(orderss => {
                const order = orderss.items
                return(
                <div className=" bg-third-c flex m-2 w-full justify-center  flex-wrap rounded-large " key={order}>
                    {order.map(o =>{ return (
                        <div key={o} className="flex flex-wrap  w-fit">
                        <div className="bg-white p-2 m-2 flex flex-wrap w-fit rounded-large " key={o}>
                            <Image width={960} height={1200} className="w-20  rounded-large" src={"/"+o.itemImage[0]}/>
                            <div className=" p-2 flex-col">
                                <span className=" text-xs block">{o.label}</span>
                                <span className="text-xs block">{o.Price}</span>
                                <span className="text-xs block">{o.itemSize}</span>
                                <span className="text-xs block">Date {o.date}</span>
                                <span className="text-xs block">ON IT S WAY TO YOU</span>

                            </div >
                        </div></div>)
                    })}
                </div>)
            })}
            </>
            }  

    
        </div>
          
    )
}   