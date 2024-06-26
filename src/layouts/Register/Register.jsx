import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const [successMessage, setSuccsessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordIsOpent, setPasswordIsOpen] = useState(false);

  const { createUser } = useContext(AuthContext);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");
    const photoUrl = formData.get("photoUrl");

    // Reset error and success message
    setErrorMessage("");
    setSuccsessMessage("");
    setPasswordError("");

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    createUser(email, password, name, photoUrl)
      .then(() => {
        setSuccsessMessage("Successfully registered!");
        Swal.fire("Registered successfully!");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Registration failed!",
        });
      });
  };

  return (
    <div className="py-16">
      <Helmet>
        <title>SH - Register</title>
      </Helmet>
      <form onSubmit={handleRegisterSubmit}>
        <h1 className="text-center font-bold text-3xl my-7">
          Please Register{" "}
        </h1>
        <div className="md:mx-auto mx-2 md:w-1/2 space-y-4 rounded-2xl border px-5 py-8">
          {/* 
                    Name
            */}
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="name"
              name="name"
              className="grow"
              placeholder="Name"
              required
            />
          </label>

          {/* 
                Photo URL
          */}
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="photoUrl"
              name="photoUrl"
              className="grow"
              placeholder="Photo URL"
              required
            />
          </label>

          {/* 
                Email
          */}
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
              required
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
              value="Register"
            />{" "}
          </div>
          {/* 
                      Link to register
        */}
          <Link to="/login">
            <p className="text-center text-gray-500 mt-3">
              Already have an account?{" "}
              <span className="text-blue-700 font-semibold  hover:underline hover:underline-offset-1">
                Login
              </span>
            </p>
          </Link>
        </div>
      </form>
      {errorMessage && (
        <p className="text-red-600 text-center my-3 ">{errorMessage}</p>
      )}
      {successMessage && (
        <>
          <p className="text-green-600 text-center my-3">{successMessage}</p>
        </>
      )}
      {passwordError && (
        <>
          <p className="text-red-600 text-center my-3">{passwordError}</p>
        </>
      )}
    </div>
  );
};

export default Register;
