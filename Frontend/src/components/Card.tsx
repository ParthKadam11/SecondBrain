import { DeleteIcon } from "../icons/deleteIcon";
import { ShareIcon } from "../icons/shareIcon";
import { ArticleThumbnail } from "./ArticleThumbnail";
import { useEffect, useRef, useState } from "react";
import { extractTweetId, embedTweet } from "../utils/twitterEmbed";

interface CardProps{
	title:string,
	link:string,
	type:"twitter"|"youtube"|"article"
	desc?:string,
	id: string,
	onDelete: (id: string) => void
}

export function Card({title,link,type,desc, id, onDelete}: CardProps){
	return <div className=" m-3 p-2 min-w-80 max-w-90 min-h-65 bg-Back-300 rounded-md outline-slate-200 border border-slate-200 ">
		<div className="flex justify-between pt-2 pb-2">
			<div className="flex items-center text-md">
				<div className="pl-3 text-md text-Main-900">{title}</div>
			</div>
			<div className="flex items-center pr-2">
				<div><a target="_blank" href={link}><ShareIcon color="Main-900"/></a></div>
				<div className="pl-2 cursor-pointer" onClick={() => onDelete(id)} ><DeleteIcon color="text-Main-900"/></div>
			</div>
		</div>
		<div className="p-2">
			<ContentRenderer type={type} link={link} />
		</div>
		<div className="pt-4 text-Main-900">
			{desc}
		</div>
	</div>
}

function ContentRenderer({ type, link }: { type: "twitter" | "youtube" | "article"; link: string }) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [visible, setVisible] = useState(false);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const el = containerRef.current;
		if (!el) return;
		let observer: IntersectionObserver | null = null;
		if ("IntersectionObserver" in window) {
			observer = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					setVisible(true);
					observer?.disconnect();
				}
			});
			observer.observe(el);
		} else {
			setVisible(true);
		}
		return () => observer?.disconnect();
	}, []);

	useEffect(() => {
		if (!visible || loaded) return;
		if (type === "twitter") {
			const tweetId = extractTweetId(link.replace("x.com", "twitter.com"));
			if (!tweetId) {
				setLoaded(true);
				return;
			}
			embedTweet(tweetId, containerRef.current!).finally(() => setLoaded(true));
		} else {
			const t = setTimeout(() => setLoaded(true), 100);
			return () => clearTimeout(t);
		}
	}, [visible, type, link, loaded]);

	return (
		<div ref={containerRef} className="w-full">
			{!loaded && (
				<div className="animate-pulse bg-Main-900 rounded-md w-full aspect-video flex items-center justify-center text-md text-white">
					Loading...
				</div>
			)}
			{loaded && (
				<div>
					{type === "youtube" && (
						<iframe
							loading="lazy"
							className="w-full aspect-video rounded-lg"
							src={`${link.replaceAll("watch", "embed").replace("?v=", "/")}?rel=0&modestbranding=1&autoplay=0`}
							title="YouTube video player"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						/>
					)}
					{type === "article" && <ArticleThumbnail title={link} />}
					{type === "twitter" && !extractTweetId(link) && (
						<a className="text-blue-600 underline" href={link} target="_blank" rel="noopener noreferrer">View Tweet</a>
					)}
					{type === "twitter" && extractTweetId(link) && (
						<div />
					)}
				</div>
			)}
		</div>
	);
}