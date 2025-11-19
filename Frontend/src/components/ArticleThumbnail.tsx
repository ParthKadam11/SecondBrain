import { DocumentIcon } from "../icons/documentIcon";

interface ArticleThumbnailProps{
    title:string,
}
export function ArticleThumbnail({title}:ArticleThumbnailProps){
    return <div className="w-full h-48 bg-white rounded-lg flex flex-col justify-center items-center">
        <div><DocumentIcon color="text-Main-900"/></div>
        <div className="text-Main-900 mt-2 text-center overflow wrap-anywhere w-3/4">{title}</div>
    </div>
}