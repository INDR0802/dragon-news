import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";

const Heading = () => {
  let links = (
    <div className="flex gap-10">
      <NavLink to={"/"}>
        <li className="hover:bg-base-300 p-2 rounded-xl">Home</li>
      </NavLink>
      <NavLink to={"/about"}>
        <li className="hover:bg-base-300 p-2 rounded-xl">About</li>
      </NavLink>
      <NavLink to={"/register"}>
        <li className="hover:bg-base-300 p-2 rounded-xl">Register</li>
      </NavLink>
    </div>
  );

  let authInfo = useContext()

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-5">{links}</ul>
        </div>
        <div className="navbar-end">
          <NavLink
            to={"/login"}
            className="btn text-xl bg-black text-white py-2 px-5"
          >
            <FaRegUserCircle size={30} />
            Login
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Heading;
