import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const menuItems = [
  {
    icons: <MdOutlineDashboard size={30} />,
    label: "Dashboard",
    route: "/",
  },
  {
    icons: <FaStar size={30} color="gold" />,
    label: "Favourites",
    route: "/favourites",
  },
];

const SideBar = () => {
  const [open, setOpen] = useState(true);
  return (
    <nav
      className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-sky-300 ${
        open ? "w-[250px]" : "w-[90px]"
      } `}
    >
      <div>
        <AiOutlineMenu
          size={34}
          className={` duration-500 cursor-pointer ${!open && " rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <ul className="flex-1">
        {menuItems.map((item, index) => {
          return (
            <li
              key={index}
              className="px-3 py-2 my-2 hover:bg-blue-800 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group"
            >
              <div>{item.icons}</div>
              <Link
                style={{
                  textDecoration: "none",
                }}
                to={item.route}
                className={`${
                  !open && "w-0 translate-x-24"
                } duration-500 overflow-hidden`}
              >
                {item.label}
              </Link>
              <p
                className={`${
                  open && "hidden"
                } absolute left-32 shadow-md rounded-md
                 w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
                `}
              >
                {item.label}
              </p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default SideBar;
