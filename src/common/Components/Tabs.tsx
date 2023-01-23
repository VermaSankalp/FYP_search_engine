import React from "react"

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
    return (
        <>
            {
                tabs.map((elem, idx) => {
                    return (
                        curActive === idx ? 
                            <div className="bg-[#900000] text-white" onClick={()=>
                                tabsCallback(idx)}>{elem.title}</div> :
                            <div className="bg-[#A80000] text-white" onClick={()=>tabsCallback(idx)}>{elem.title}</div>
                    )
                })
            }
        </>
    )
}