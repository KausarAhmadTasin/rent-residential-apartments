import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navLink = (
    <>
      {" "}
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Update Profile</a>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut();
  };

  return (
    <div>
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
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>

        <div className="navbar-end space-x-3">
          <div>
            {user?.photoURL && (
              <img className="rounded-full w-11" src={user.photoURL} alt="" />
            )}
          </div>
          {user ? (
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
