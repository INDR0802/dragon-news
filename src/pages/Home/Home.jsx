import LeftSide from "../../layouts/LeftSide";
import Middle from "../../layouts/Middle";
import RightSide from "../../layouts/RightSide";
import ScrollNews from "./ScrollNews";

const Home = () => {
  return (
    <>
      <ScrollNews />
      <div className="grid grid-cols-4">
        <div className="border-2">
          <RightSide />
        </div>
        <div className="col-span-2">
          <LeftSide />
        </div>
        <div className="border-2">
          <Middle />
        </div>
      </div>
    </>
  );
};

export default Home;
