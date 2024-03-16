import { Outlet } from "react-router-dom";

import Navber from "../Navber/Navber";
import Footer from "../Footer";


const Layout = () => {
    return (
        <div className="lg:w-3/4 m-auto">
            <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Layout;