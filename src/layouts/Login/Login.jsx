import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const { logIn, googleLogin, githubLogin } = useContext(AuthContext);
  const [passwordIsOpent, setPasswordIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const loginData = new FormData(e.currentTarget);
    const email = loginData.get("email");
    const password = loginData.get("password");

    logIn(email, password)
      .then(() => {
        Swal.fire("Logged in successfully!");
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login failed!",
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire("Logged in with Google!");
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Google login failed!",
        });
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        Swal.fire("Logged in with GitHub!");
        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "GitHub login failed!",
        });
      });
  };

  return (
    <div className="py-16">
      <Helmet>
        <title>SH - Login</title>
      </Helmet>
      <form onSubmit={handleLogin} className="">
        <h1 className="text-center font-bold text-3xl my-7">Please Login </h1>
        <div className="md:mx-auto mx-2 md:w-1/2 space-y-4 rounded-2xl border px-5 py-8">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              name="email"
              className="grow"
              placeholder="Email"
            />
          </label>
          {/* 
              Password
       
       */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type={passwordIsOpent ? "text" : "password"}
              name="password"
              className="grow"
              placeholder="password"
              required
            />
            <div onClick={() => setPasswordIsOpen(!passwordIsOpent)}>
              {" "}
              {passwordIsOpent ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
            </div>
          </label>
          {/* 
                      Submit Button 
        */}
          <div className="flex justify-center">
            {" "}
            <input
              type="submit"
              className="btn w-full text-lg text-white btn-success"
              value="Login"
            />{" "}
          </div>
          {/* 
                      Link to register
        */}
          <Link to="/register">
            <p className="text-center text-gray-500 mt-3">
              Don&apos;t have an account?{" "}
              <span className="text-blue-700 font-semibold  hover:underline hover:underline-offset-1">
                Register
              </span>
            </p>
          </Link>
        </div>
      </form>
      {/* 
                Auth login options
        */}
      <div className="flex lg:flex-row flex-col justify-center gap-3 my-6">
        <button
          onClick={handleGoogleLogin}
          className="btn lg:w-1/4 md:w-1/3 md:mx-auto mx-4 lg:mx-0 rounded-full text-base "
        >
          <FcGoogle className="text-xl mx-1" /> Sign in with Google
        </button>
        <button
          onClick={handleGithubLogin}
          className="btn lg:w-1/4 md:w-1/3 md:mx-auto mx-4 lg:mx-0 rounded-full text-base "
        >
          <VscGithub className="text-xl mx-1" /> Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;
