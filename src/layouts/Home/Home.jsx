import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Estates from "../Estates/Estates";

const Home = () => {
  const apartments = useLoaderData();
  return (
    <div>
      <Banner apartments={apartments}></Banner>
      <Estates apartments={apartments}></Estates>
    </div>
  );
};

export default Home;
