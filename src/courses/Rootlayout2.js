import { Outlet } from "react-router-dom";
import Sidenavbar2 from "./Sidenavbar2";
import "../components/Rootlayout.css"
function Rootlayout2()
{
    return(
        <div className="rootlayout">
            <div>
                <Sidenavbar2></Sidenavbar2>
            </div>
            <div className="outlet container">
                <Outlet></Outlet>
            </div>

        </div>
    )
}
export default Rootlayout2;