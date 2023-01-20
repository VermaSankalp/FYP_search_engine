import { Outlet } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="h-full w-full overflow-hidden flex flex-row">
            <div className="w-1/6">Sidebar</div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default SideBar; 