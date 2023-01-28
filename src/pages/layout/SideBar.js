import { Outlet } from "react-router-dom";
import { Tabs } from "../../common/Components/Tabs.tsx";
import { useState } from "react";

const SideBar = () => {
    const [curActive, setCurActive] = useState(0); 

    const TabProps = [
        {"title" : "Search Engine", "path" : "/search"},
        {"title" : "Market Trends", "path" : "/search-results"}
    ]
    
    const setCurrentActiveTab = (curActive) => {
        setCurActive(curActive); 
    }

    return (
        <div className="w-full flex flex-col flex-wrap h-[100vh]">
            <div className="w-1/6 bg-[#A80000] h-full">
                <div className="h-1/6 text-white px-5 py-5 text-2xl text-center font-medium">Market Analysis Data Repository</div>
                <div className="h-5/6">
                    <Tabs tabs={TabProps} curActive={curActive} tabsCallback={setCurrentActiveTab}/>
                </div>
            </div>
            <div className="w-5/6 basis-full h-full">
                <Outlet/>
            </div>
            <div className="absolute bg-black drop-shadow-lg w-[17%] h-3 top-28 left-4"/>
        </div>
    )
}

export default SideBar; 