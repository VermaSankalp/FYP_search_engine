import React from "react";

type ButtonProps = {
    children : React.ReactNode; 
    buttonCallback : Function;
    customStyles : string[]; 
}
export const Button = ({children, buttonCallback, customStyles} : ButtonProps) : JSX.Element=> {
    const baseClass = ["py-2", "text-white", "bg-black", "rounded-full", "font-medium", "hover:bg-[#814545]"]
    const finalClass = baseClass.concat(customStyles); 
    return (
        <button className={finalClass.join(" ")} onClick={()=>buttonCallback()}>
            {children}
            <div></div>
        </button>
    )
}