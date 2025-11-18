import type { ReactElement } from "react"

export function SidebarItem({text,icon}:{
    text:string,
    icon:ReactElement
}){
    return <div className="pl-8 flex hover:bg-Main-600 rounded-lg max-w-67 transition-all-discrete duration-500">
        <div className="p-2">{icon}</div>
        <div className="p-2">{text}</div>
    </div>
}