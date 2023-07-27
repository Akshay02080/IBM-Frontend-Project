import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Rootlayout.css"
function Rootlayout()
{
    return(
        <div className="rootlayout">
            <div>
                <Sidebar></Sidebar>
            </div>
            <div className="outlet">
                <Outlet></Outlet>
            </div>

        </div>
    )
}
export default Rootlayout;