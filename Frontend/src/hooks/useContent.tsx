import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function useContent(){
    const [content,setcontent] =useState([]);
    function refresh(){
        axios.get(`${BACKEND_URL}/api/v1/content`,{
            headers:{
                "authorization":localStorage.getItem("authorization")
            }
        }).then((response)=>{setcontent(response.data.content)})
    }
    
    useEffect(()=>{
        refresh()
        const interval=setInterval(() => {
            refresh()
        }, 10*1000);
        return ()=>{
            clearInterval(interval)
        }
    },[])
    return {content,refresh} 
}