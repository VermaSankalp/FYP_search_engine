import React from "react"
import { useNavigate } from "react-router-dom";


type Tab = {
    title : string,
    path : string
}

type TabsProps = {
    tabs : Tab[],
    curActive : number,
    tabsCallback : Function,
}



export const Tabs = ({tabs, curActive, tabsCallback} : TabsProps) : JSX.Element => {
    const navigate = useNavigate(); 
    const navigateToPath = (path : string) : void => navigate(path); 

    return (
        <>
            {
                tabs.map((elem, idx) => {
                    return (
                        curActive === idx ? 
                            <button className="w-full mx-auto bg-[#900000] text-white px-5 py-5 hover:bg-[#814545] text-[22px] font-medium" onClick={() => {
                                tabsCallback(idx); 
                                navigateToPath(elem.path);
                            }}>
                                {elem.title}
                            </button> :
                            <button className="w-full mx-auto bg-[#A80000] text-white px-5 py-5 hover:bg-[#814545] text-[22px] font-medium" onClick={() => {
                                tabsCallback(idx); 
                                navigateToPath(elem.path);
                            }}>
                                {elem.title}
                            </button>
                    )
                })
            }
        </>
    )
}