import { useEffect, useState, useCallback } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function useContent(){
    const [content,setcontent] =useState([]);
    const refresh = useCallback(() => {
        axios.get(`${BACKEND_URL}/api/v1/content`,{
            headers:{
                "authorization":localStorage.getItem("authorization")
            }
        }).then((response)=>{setcontent(response.data.content)})
    }, []);
    
    async function deleteContent(contentId: string) {
        try {
            await axios.delete(`${BACKEND_URL}/api/v1/content`, {
                headers: {
                    "authorization": localStorage.getItem("authorization")
                },
                data: { contentId }
            });
            refresh();
        } catch (error) {
            console.error("Error deleting content:", error);
        }
    }
    
    useEffect(()=>{
        refresh()
    },[refresh])
    return {content,refresh, deleteContent} 
}