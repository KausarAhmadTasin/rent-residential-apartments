import PropTypes from "prop-types";

const Estate = ({ apartment }) => {
  return (
    <div>
      <div className="relative card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={apartment.image_url} alt="Shoes" />
          <p className="absolute top-2 right-2 bg-yellow-500  px-3 rounded-full py-2 font-semibold">
            <span className="font-thin italic">for </span>
            {apartment.status}
          </p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{apartment.estate_title}</h2>
          <div className="border my-1"></div>
          <p>
            <span className="font-semibold">Area:</span> {apartment.area}
          </p>
          <p>
            <span className="font-semibold">Location:</span>{" "}
            {apartment.location}
          </p>
          <p>
            <span className="font-semibold">Price:</span> {apartment.price}
          </p>
          <div className="card-actions justify-end">
            <button className="btn bg-green-500 text-white rounded-3xl">
              View Details
            </button>
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
