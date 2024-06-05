import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="btn text-blue-500 font-semibold">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
