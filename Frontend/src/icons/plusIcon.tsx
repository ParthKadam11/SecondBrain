import type { IconProps } from "../types/IconProps"
export function PlusIcon({color,size}:IconProps){
  const sizeInPx = Number(size) * 16; 
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={sizeInPx} height={sizeInPx} strokeWidth="1.5" stroke="currentColor" className={`text-${color}`}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
}
