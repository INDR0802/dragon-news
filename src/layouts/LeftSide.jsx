import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSide = () => {
  let [catagory, setCatagory] = useState([]);
  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCatagory(data));
  }, []);
  console.log(catagory);
  return (
    <>
      <h1 className="text-xl font-bold mb-5">All Categoty</h1>
      <ul className="menu bg-base-200 w-full rounded-box">
        {catagory.map((item) => {
          return (
            <li key={item.id}>
              <NavLink to={`/category/${item.id}`}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default LeftSide;
