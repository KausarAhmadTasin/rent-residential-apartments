import { useLoaderData } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./layouts/Banner/Banner";

function App() {
  const apartments = useLoaderData();

  return (
    <>
      <Navbar></Navbar>
      <Banner apartments={apartments}></Banner>
    </>
  );
}

export default App;
