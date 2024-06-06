import { Helmet } from "react-helmet-async";
import { FcApproval } from "react-icons/fc";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EstateDetails = () => {
  const apartments = useLoaderData();
  const { id } = useParams();

  const estate = apartments.find((apartment) => apartment.id === id);

  const handleBuy = () => {
    Swal.fire({
      title: `${estate.status.toUpperCase()} granted!`,
      text: "Congratulation",
      icon: "success",
    });
  };

  return (
    <div className="py-16 mx-3">
      <Helmet>
        <title>SH - Details</title>
      </Helmet>
      <div className="text-[#424141] bg-[#E9EFF4] p-6 md:p-10 rounded-2xl container gap-6 mt-10 mx-auto flex flex-col lg:flex-row">
        <div className="relative ">
          <img
            className="rounded-2xl  md:mx-auto"
            src={estate.image_url}
            alt=""
          />
          <h3 className="absolute top-2 md:right-14 right-2 lg:right-2 bg-[#8BC34A] w-fit px-3 rounded-full text-white py-1">
            {estate.segment_name}
          </h3>
        </div>
        <div className="">
          <h1 className="mb-1 font-bold text-3xl text-[#333232]">
            {estate.estate_title}
          </h1>
          <p className=" text-lg">{estate.description}</p>

          <div className="border my-2"> </div>

          <p className="text-[#333232] font-semibold mt-3 mb-1">Facilities:</p>
          <ul className="">
            {estate.facilities.map((facility, index) => (
              <li className="flex items-center gap-2" key={index}>
                <FcApproval className="text-lg" />
                {facility}
              </li>
            ))}
          </ul>

          <p className="my-3">
            <span className="font-semibold text-[#333232] ">Area:</span>{" "}
            {estate.area}
          </p>

          <p className="my-2">
            <span className="font-semibold text-[#333232] ">Location:</span>{" "}
            {estate.location}
          </p>

          <div className="border my-2"> </div>

          <h2>
            <span className="font-semibold text-[#333232]">Price:</span>{" "}
            <span className="bg-green-200 px-2 py-1 ml-1 rounded-full">
              <span className="text-xl text-black">
                {" "}
                {estate.price.slice(0, 1)}
              </span>
              {estate.price.slice(1)}
            </span>
          </h2>

          <div className="my-3 ">
            <button
              onClick={handleBuy}
              className="btn bg-[#EE6426] rounded-3xl px-6 text-white"
            >
              {estate.status === "sale" ? "Buy" : "Rent"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
