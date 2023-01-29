import React from "react";
import { ReactComponent as MagGlassSvg } from '../../assets/svgs/mag-glass.svg';



type InputFieldProps = {
    customStyles : string[]; 
    inputCallback : Function;
    onKeyDownCallback : Function; 
    query? : string;
}

export const InputField = ({customStyles, inputCallback, onKeyDownCallback, query} : InputFieldProps) : JSX.Element => {
    const baseClass = ["flex", "flex-row", "shadow", "appearance-none", "rounded-full", "px-3", "text-gray-700", "mb-3", "leading-tight", "focus:outline-none", "focus:shadow-outline", "shadow-lg", "border-[1px]", "border-black"]
    const finalClass = baseClass.concat(customStyles); 

    const handleKeyDown = (event : any) => {
        if (event.key === 'Enter') {
            onKeyDownCallback(); 
        }
    }

    return (
        <div className={finalClass.join(" ")}>
            <MagGlassSvg width="30px" height="30px"/>
            <input className="focus:outline-0 w-full ml-2" value={query} type="text" onChange={(e) => inputCallback(e.target.value)} onKeyDown={handleKeyDown}/>
        </div>
    )
}