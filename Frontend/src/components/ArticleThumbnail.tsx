import { Link } from "react-router-dom";
import { DocumentIcon } from "../icons/documentIcon";

interface ArticleThumbnailProps{
    title:string,
    link?: string,
}
export function ArticleThumbnail({title}:ArticleThumbnailProps){
    
return <div className="w-full h-48 bg-Main-900 rounded-lg flex flex-col justify-center items-center">
        <div><DocumentIcon color="text-white"/></div>
        <Link className="cursor-pointer text-white mt-2 text-center overflow wrap-anywhere w-3/4" target="_blank" to={title}>{title}</Link>
    </div>
}