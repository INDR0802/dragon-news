import Heading from "../../components/Heading";
import LeftSide from "../../layouts/LeftSide";
import Middle from "../../layouts/Middle";
import RightSide from "../../layouts/RightSide";
import ScrollNews from "./ScrollNews";

const Home = () => {
  return (
    <>
      <Heading />
      <ScrollNews />
      <div className="grid grid-cols-4 gap-4">
        <div>
          <LeftSide />
        </div>
        <div className="col-span-2 mx-auto">
          <Middle />
        </div>
        <div>
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default Home;
