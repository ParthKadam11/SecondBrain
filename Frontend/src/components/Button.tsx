import type { ReactElement } from "react"

interface ButtonProps{
    size?:"sm"|"md"|"lg",
    variant:"primary"|"secondary",
    text:string,
    startIcon?:ReactElement,
    endIcon?:ReactElement,
    onClick?:()=>void,
    fullWidth?:boolean,
    loading?:boolean
}
const variantClass={
    "primary":"bg-Main-900 text-white",
    "secondary":"bg-Back-300 text-Main-900"
}
const defaultStyle="px-4 py-2 rounded-md flex items-center justify-center cursor-pointer disabled:cursor-not-allowed whitespace-nowrap"
export function Button({variant,text,startIcon,endIcon,onClick,fullWidth,loading}:ButtonProps){
    return <button onClick={onClick} className={variantClass[variant] +" "+ defaultStyle + `${fullWidth ? " w-full flex justify-center items-center ":""}`} disabled={loading}>
        <div className="flex pr-1">{startIcon && <span className="inline-flex">{startIcon}</span>}</div>
        {text}
        {endIcon && <span className="inline-flex">{endIcon}</span>}
    </button>
}