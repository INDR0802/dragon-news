import { useEffect, useState } from "react";
import News from "../components/News";

const Middle = () => {
  let [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/data/news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div>
      {news.map((news) => (
        <News key={news._id} data={news} />
      ))}
    </div>
  );
};

export default Middle;
