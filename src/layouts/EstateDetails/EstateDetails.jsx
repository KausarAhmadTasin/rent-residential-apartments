import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const apartments = useLoaderData();
  const { id } = useParams();

  const estate = apartments.find((apartment) => apartment.id === id);

  return (
    <div className="container mx-auto flex flex-col md:flex-row">
      <div>
        <img src={estate.image_url} alt="" />
      </div>
      <div>
        <h1>{estate.estate_title}</h1>
        <p>{estate.description}</p>

        <p>Facilities:</p>
        <ul>
          {estate.facilities.map((facility) => {
            <li>{facility}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default EstateDetails;
