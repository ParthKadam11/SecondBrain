import { Logo } from "../icons/Logo";
import { DocumentIcon } from "../icons/documentIcon";
import { TwitterIcon } from "../icons/twitterIcon";
import { YtIcon } from "../icons/ytIcon";
import { SidebarItem } from "./SidebarItem";
import { useNavigate } from "react-router-dom";
export function Sidebar(){
    const navigate = useNavigate()
    return <div className="w-72 fixed left-0 top-0 bg-Main-900 text-white h-screen overflow-y-auto">
        <div onClick={()=>{
            navigate('/')
        }} className="flex justify-center items-center pt-4">
            <div className="p-5"><Logo size="3"/></div>
            <div className="pr-10 text-2xl font-medium">SecondBrain</div>
        </div>
        <div>
            <div className="p-2"><SidebarItem text="Twitter" icon={<TwitterIcon/>}/></div>
            <div className="p-2"><SidebarItem text="Articles" icon={<DocumentIcon color="white"/>}/></div>
            <div className="p-2"><SidebarItem text="Youtube" icon={<YtIcon/>}/></div>
        </div>
    </div>
}