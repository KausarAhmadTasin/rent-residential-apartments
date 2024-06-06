import PropTypes from "prop-types";
import Estate from "../../components/Estate/Estate";

const Estates = ({ apartments }) => {
  // console.log(apartments);
  return (
    <div className="bg-[#e7e6e6] py-7 my-16">
      <div className="container mx-auto  ">
        <h1 className="text-center text-3xl font-bold mb-10">
          Find Your Next Home
        </h1>
        <div className="grid grid-cols-3 gap-8">
          {apartments.map((apartment) => (
            <Estate key={apartment.id} apartment={apartment}></Estate>
          ))}
        </div>
      </div>
    </div>
  );
};

Estates.propTypes = {
  apartments: PropTypes.array.isRequired,
};

export default Estates;
