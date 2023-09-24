import { NavLink } from "react-router-dom";


const NavBar = () => {

    const NavElement = () => {
        return (
            <>
                <li>
                    <NavLink
                        to={`/`}
                        className={({ isActive, isPending }) => isActive ? "text-red-500 underline" : isPending ? "pending" : ""}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/donation'}
                        className={({ isActive, isPending }) => isActive ? "text-red-500 underline" : isPending ? "pending" : ""}
                    >
                        Donation
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={`/statistics`}
                        className={({ isActive, isPending }) => isActive ? "text-red-500 underline" : isPending ? "pending" : ""}
                    >
                        Statistics
                    </NavLink>
                </li>
            </>
        )
    }
    return (
        <div>
            <div className="flex lg:flex-row flex-row-reverse justify-between items-center py-4 mx-4 lg:mx-32 relative z-50 font-bold  ">
                <div>
                    <img className="w-28 md:w-36 lg:w-44" src={'https://i.ibb.co/N3Rxhs8/Logo.png'} alt="" />
                </div>
                <div >
                    <ul className="lg:flex hidden gap-10 ">
                        {
                            <NavElement></NavElement>
                        }
                    </ul>
                    <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                <NavElement></NavElement>
                            }
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;