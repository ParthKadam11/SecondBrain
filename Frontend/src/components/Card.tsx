import { DeleteIcon } from "../icons/deleteIcon";
import { PlusIcon } from "../icons/plusIcon";
import { ShareIcon } from "../icons/shareIcon";

interface CardProps{
	title:string,
	link:string,
	type:"twitter"|"youtube",
	desc?:string,
	id: string,
	onDelete: (id: string) => void
}

export function Card({title,link,type,desc, id, onDelete}: CardProps){
	return <div className=" m-3 p-2 min-w-80 max-w-90 min-h-65 bg-Back-300 rounded-md outline-slate-200 border border-slate-200 ">
		<div className="flex justify-between pt-2 pb-2">
			<div className="flex items-center text-md">
				<div className=" pl-2 pr-2"><PlusIcon/></div>
				<div className="pl-2 text-Main-900">{title}</div>
			</div>
			<div className="flex items-center pr-2">
				<div><a target="_blank" href={link}><ShareIcon/></a></div>
				<div className="pl-2 cursor-pointer" onClick={() => onDelete(id)} ><DeleteIcon/></div>
			</div>
		</div>
		<div className="p-2">
			{type==="youtube" && (
				<iframe 
					className="w-full h-48 rounded-lg" 
					src={`${link.replaceAll("watch","embed").replace("?v=","/")}?rel=0&modestbranding=1&autoplay=0`} 
					title="YouTube video player" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					referrerPolicy="strict-origin-when-cross-origin" 
					allowFullScreen
				></iframe>
			)}
			{type==="twitter" && <blockquote className="twitter-tweet"><a href={link.replace("x.com","twitter.com")}></a>
		</blockquote>}	
		</div>
		<div className="pt-4 text-Main-900">
			{desc}
		</div>
	</div>
}