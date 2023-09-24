import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="flex justify-between items-center mx-32 relative z-50 font-bold">
            <div>
                <img src={'https://i.ibb.co/N3Rxhs8/Logo.png'} alt="" />
            </div>
            <div >
                <ul className="flex gap-10">
                    <li>
                        <NavLink
                            to={`/`}
                            className={({ isActive, isPending }) => isActive ? "text-blue-500 underline" : isPending ? "pending" : ""}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={'/donation'}
                            className={({ isActive, isPending }) => isActive ? "text-blue-500 underline" : isPending ? "pending" : ""}
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={`/statistics`}
                            className={({ isActive, isPending }) => isActive ? "text-blue-500 underline" : isPending ? "pending" : ""}
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;