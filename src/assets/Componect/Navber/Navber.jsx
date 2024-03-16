import { NavLink } from "react-router-dom";

const Navber = () => {
    const Item = <>

        <li><NavLink
         className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }
         to="/">Home</NavLink></li>
        <li><NavLink
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
    }
        to="/about">About</NavLink></li>
        <li><NavLink
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
    }
        to="/service">Service</NavLink></li>
        <li><NavLink
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
    } to="/skills">Skills</NavLink></li>
        <li><NavLink
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
    } to="/project">Project</NavLink></li>
        <li><NavLink
        className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
    } to="/contact">Contact</NavLink></li>
    </>
    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {Item}
                        </ul>
                    </div>
                    <img className="h-10 w-10 rounded-full" src="https://i.ibb.co/8sGX3p0/429950054-1089135052304048-4070605959564964644-n-removebg-preview-1.png" alt="" />
                    <a className="btn btn-ghost text-xl italic">BIPLOB</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Item}
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default Navber;