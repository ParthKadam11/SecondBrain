interface InputProps{
    placeholder:string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref?:any,
    width?:string, 
    height?:string, 
    padding?:string, 
    fullWidth?:boolean
}
export function Input({ref, fullWidth, width, height, padding, placeholder }: InputProps) {
    const inputStyle = {
        width: fullWidth ? undefined : (width ? `${width}rem` : undefined),
        height: height ? `${height}rem` : undefined,
        padding: padding? `${padding}rem` : undefined,
    };
    return <div>
        <input ref={ref} placeholder={placeholder} type="text" style={inputStyle} className={ ` pl-2 m-2 border border-gray-600 rounded-md ${fullWidth ? 'w-full' : ''} ` }></input>
    </div>
}