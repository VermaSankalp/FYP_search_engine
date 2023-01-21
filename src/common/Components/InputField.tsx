import React from "react";

type InputFieldProps = {
    customStyles : string[]; 
    inputCallback : Function;
}

export const InputField = ({customStyles, inputCallback} : InputFieldProps) : JSX.Element => {
    const baseClass = ["shadow", "appearance-none", "rounded-full", "px-3", "text-gray-700", "mb-3", "leading-tight", "focus:outline-none", "focus:shadow-outline"]
    const finalClass = baseClass.concat(customStyles); 
    return (
        <input className={finalClass.join(" ")} type="text" onChange={(e) => inputCallback(e.target.value)}/>
    )
}