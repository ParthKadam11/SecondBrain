import { Logo } from "../icons/Logo";
import { DocumentIcon } from "../icons/documentIcon";
import { TwitterIcon } from "../icons/twitterIcon";
import { YtIcon } from "../icons/ytIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
    return <div className="border-black-2 w-72 fixed left-0 top-0 bg-Main-900 text-white h-screen">
        <div className="flex justify-center items-center pt-4">
            <div className="p-5"><Logo/></div>
            <div className="pr-10 text-2xl font-medium">SecondBrain</div>

        </div>
        <div>
            <div className="p-2"><SidebarItem text="Twitter" icon={<TwitterIcon/>}/></div>
            <div className="p-2"><SidebarItem text="Articles" icon={<DocumentIcon/>}/></div>
            <div className="p-2"><SidebarItem text="Youtube" icon={<YtIcon/>}/></div>
        </div>
    </div>
}