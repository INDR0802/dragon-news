function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${date}-${months[month - 1]}-${year}`;
}
console.log(getDate());

const Navbar = () => {
  return (
    <>
      <div className="text-center my-5 space-y-1">
        <h1 className="text-4xl">The Dragon News</h1>
        <h1 className="text-md">Journalism Without Fear or Favour</h1>
        <h1 className="font-bold">{getDate()}</h1>
      </div>
    </>
  );
};

export default Navbar;
