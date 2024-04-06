import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";

const Root = () => {
  return (
    <div className="max-w-[1175px] mx-auto">
      <Navbar></Navbar>
      <Heading></Heading>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
