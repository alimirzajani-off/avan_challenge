import { Link } from "react-router-dom";
let tab = [
  { label: "خانه", path: "/" },
  { label: "هزینه", path: "/Expense" },
  { label: "بودجه", path: "/Budget" },
];
const Header = () => {
  return (
    <div className="Header sticky top-0 bg-white z-10 shadow-md rounded-md	">
      <div className="flex flew-row flex-wrap py-3">
        <div className="border-l-2 pl-2 mr-6">چالش شرکت اعوان</div>
        <div className="flex flew-row flex-wrap">
          {tab.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="mr-6 hover:bg-neutral-200 rounded-lg "
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
