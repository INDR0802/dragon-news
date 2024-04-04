import { useEffect, useState } from "react";

const LeftSide = () => {
  let [catagory, setCatagory] = useState(null);
  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCatagory(data));
  }, []);
  console.log(catagory);
  return (
    <div>
      <h1>left</h1>
    </div>
  );
};

export default LeftSide;
