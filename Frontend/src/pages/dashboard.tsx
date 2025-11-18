import { useEffect, useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { CreateContent } from "../components/CreateComponent"
import { Button } from "../components/Button"
import { ShareIcon } from "../icons/shareIcon"
import { PlusIcon } from "../icons/plusIcon"
import { Card } from "../components/Card"
import {useContent} from "../hooks/useContent"
import { BACKEND_URL } from "../config"
import axios from "axios"
export default function Dashboard() {
  const [modalOpen,setModalOpen]=useState(false)
  const {content,refresh}=useContent();
    useEffect(()=>{
      refresh();
    },[modalOpen,refresh])
  return <div>
    <div><Sidebar/></div>
    <div className="p-4 ml-76 h-min-screen  ">
      <CreateContent Open={modalOpen} onClose={()=>{
        setModalOpen(false)
      }}/>
      <div className="flex pb-6 p-4 gap-4 justify-end ">
        <Button variant="primary" text="Add Content" onClick={()=>{setModalOpen(true)}} startIcon={<PlusIcon/>}/>
        <Button onClick={async()=>{
          const response=await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
            share:true
          },{headers:{
            "authorization":localStorage.getItem("authorization")
          }})
          const ShareURL=`http://localhost:5173/share:${response.data.hash}`
          navigator.clipboard.writeText(ShareURL)
          alert("Link Copied to clipboard")
        }} variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}/>
      </div>
      <div className="flex flex-wrap gap-2 justify-between">
        {content.map(({type,link,title})=>(
          <Card type={type} link={link} title={title} />
        ))}
      </div>
    </div>
  </div>
}

