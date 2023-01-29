import React from "react";

type InputFieldProps = {
    customStyles : string[]; 
    inputCallback : Function;
    onKeyDownCallback : Function; 
}

export const InputField = ({customStyles, inputCallback, onKeyDownCallback} : InputFieldProps) : JSX.Element => {
    const baseClass = ["shadow", "appearance-none", "rounded-full", "px-3", "text-gray-700", "mb-3", "leading-tight", "focus:outline-none", "focus:shadow-outline", "shadow-lg", "border-[1px]", "border-black"]
    const finalClass = baseClass.concat(customStyles); 

    const handleKeyDown = (event : any) => {
        if (event.key === 'Enter') {
            onKeyDownCallback(); 
        }
    }

    return (
        <input className={finalClass.join(" ")} type="text" onChange={(e) => inputCallback(e.target.value)} onKeyDown={handleKeyDown}/>
    )
}