import Marquee from "react-fast-marquee";

const ScrollNews = () => {
  return (
    <div className="flex bg-base-200 p-2 mb-5">
      <button
        className="p-2 px-3 bg-[#D72050] text-white font-bold"
        disabled={true}
      >
        Latest
      </button>
      <Marquee className="text-xl font-bold">
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default ScrollNews;
