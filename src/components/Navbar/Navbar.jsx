import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthContext";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const navLink = (
    <>
      {" "}
      <li className="">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#7AA93C] px-2 py-1 rounded-lg  border border-[#EC6325]"
              : "text-white"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#7AA93C] px-2 py-1 rounded-lg  border border-[#EC6325]"
              : "text-white"
          }
          to="/updateProfile"
        >
          Update Profile
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut();
  };

  return (
    <div>
      <div className="navbar fixed z-40 top-0 bg-[#0D263C]">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white text-xl md:ml-0 -ml-4 lg:hidden"
            >
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
              className="menu-sm bg-[#0d263cd3] dropdown-content mt-1 -ml-2 z-20 px-4 py-6 text-center space-y-4 shadow rounded-box w-40 "
            >
              {navLink}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-2xl md:ml-0 -ml-6 font-bold font-dm-serif text-[#7aa93c]"
          >
            Sweet<span className="text-[#EC6325]">Home</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-5 menu-horizontal px-1">{navLink}</ul>
        </div>

        <div className="navbar-end space-x-3 mr-2">
          <div>
            {user?.photoURL && (
              <img
                className="rounded-full w-9 md:w-11"
                src={user.photoURL}
                alt=""
              />
            )}
          </div>
          {user ? (
            <button
              onClick={handleLogout}
              className="btn bg-[#EC6325] btn-sm md:btn-md rounded-2xl text-white border-none"
            >
              Logout
            </button>
          ) : (
            <>
              {" "}
              <Link
                to="/login"
                className="btn bg-[#7AA93C] btn-sm md:btn-md rounded-2xl text-white  border-none"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn bg-[#EC6325] btn-sm md:btn-md rounded-2xl text-white  border-none"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
