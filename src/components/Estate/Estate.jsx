import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Estate = ({ apartment }) => {
  return (
    <div className="estate-card-container">
      <div className="relative flex flex-col card h-full lg:w-96 bg-base-100 shadow-xl">
        <figure className="h-48 overflow-hidden">
          <img
            src={apartment.image_url}
            alt="Estate"
            className="w-full h-full object-cover"
          />
          <p className="absolute top-2 right-2 bg-yellow-500 px-3 rounded-full py-2 font-semibold text-lg">
            <span className="font-normal italic text-sm">for </span>
            {apartment.status}
          </p>
        </figure>
        <div className="card-body flex flex-col flex-grow">
          <h2 className="card-title flex-grow">{apartment.estate_title}</h2>
          <div className="border my-1"></div>

          <div className="apartment-details flex flex-col flex-grow">
            <p className="flex justify-between">
              <span className="font-semibold flex-1">Area:</span>
              <span className="flex-2 text-right">{apartment.area}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-semibold flex-1">Location:</span>
              <span className="flex-2 text-right">{apartment.location}</span>
            </p>
            <p className="flex justify-between">
              <span className="font-semibold flex-1">Price:</span>
              <span className="flex-2 text-right">{apartment.price}</span>
            </p>
          </div>

          <div className="border my-1"></div>

          <div className="card-actions mt-2 justify-end">
            <Link to={`/${apartment.id}`}>
              <button className="btn bg-green-500 text-white rounded-3xl">
                View Property
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Estate.propTypes = {
  apartment: PropTypes.object.isRequired,
};

export default Estate;
