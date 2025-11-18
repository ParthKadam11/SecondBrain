import { useRef, useState } from "react";
import { CrossIcon } from "../icons/crossIcon";
import { Button } from "./Button";
import {Input} from "./Input"
import axios from "axios";
import { BACKEND_URL } from "../config";
interface CreateContentProps {
    Open: boolean;
    onClose: () => void;
}
type ContentType="youtube"|"twitter"|"article";

//Controlled Component
export function CreateContent({Open, onClose}: CreateContentProps){
    const titleRef =useRef<HTMLInputElement >(null);
    const linkRef =useRef<HTMLInputElement >(null);
    const [type,setType]=useState<ContentType>("youtube")
    
    async function AddContent(){
        const title=titleRef.current?.value
        const link=linkRef.current?.value
        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            title:title,
            link:link,
            type:type
        },{
            headers:{
                "authorization":localStorage.getItem("authorization")
            }
        })
        onClose();
    }

    return <div>
        {Open && <div className="w-screen h-screen bg-slate-800/80 flex justify-center fixed top-0 left-0">
            <div className="flex flex-col justify-center">
                <div className="p-6 rounded-lg bg-white opacity-100">
                    <div className="relative w-full flex items-center p-4">
                        <div className="absolute left-1/2 transform -translate-x-1/2">Add Content</div>
                        <div className="ml-auto">  
                            <div className="cursor-pointer"onClick={onClose}><CrossIcon /></div>
                        </div>
                    </div>
                    <div>
                        <Input height="2.5" width="17" ref={titleRef} placeholder={"Title"} />
                        <Input height="2.5" width="17" ref={linkRef} placeholder={"Link"} />
                    </div>
                    <div className="flex justify-center pt-2">
                        Type :
                    </div>
                    <div className="flex gap-5 pt-2 pb-2">
                        <Button onClick={()=>{setType("youtube")}} text="Youtube" variant={type==="youtube" ? "primary" : "secondary"}/>
                        <Button onClick={()=>{setType("twitter")}} text="Twitter" variant={type==="twitter" ? "primary" : "secondary"}/>
                        <Button onClick={()=>{setType("article")}} text="Article" variant={type==="article" ? "primary" : "secondary"}/>
                    </div>
                    <div className="flex justify-center pt-2">
                        <Button onClick={AddContent} fullWidth variant="primary" text="Submit"/>
                    </div>
                </div>
            </div>
        </div>}
    </div>
}