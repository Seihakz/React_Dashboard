import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faHouse,
  faFileInvoice,
  faUser,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { cloneElement } from "react";

const links = [
  {
    name: "Home",
    path: "/",
    icon: <FontAwesomeIcon icon={faHouse} className="mr-2 text-[10px]" />,
  },
  {
    name: "Invoice",
    path: "/invoice",
    icon: <FontAwesomeIcon icon={faFileInvoice} className="mr-2 text-[10px]" />,
  },
  {
    name: "Customer",
    path: "/customer",
    icon: <FontAwesomeIcon icon={faUser} className="mr-2 text-[10px]" />,
  },
];

function Sidebar() {
  return (
    <div className="md:fixed md:w-64  md:h-screen py-4 px-2 flex flex-col w-full">
      {/* Logo Section */}
      <div className="h-20 md:h-40 p-4 bg-blue-600 text-lg rounded-md flex items-end justify-start">
        <a href="/" className="text-white flex flex-row items-center leading-none">
          <h2>
            <FontAwesomeIcon
              icon={faGlobe}
              className="md:text-[42px] text-xl transform rotate-15"
            />
          </h2>
          <span className="text-[44px] font-[lusitana]">Acme</span>
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="mt-1 flex-grow w-full flex flex-row md:flex-col gap-2 md:gap-0">
      {links.map((li) => (
        <NavLink
          key={li.name}
          to={li.path}
          className={({ isActive }) =>
            `p-3 flex items-center text-black my-1 md:gap-1 h-[48px] rounded-md font-medium px-3 flex-grow md:flex-grow-0 justify-center md:justify-start ${
              isActive
                ? "bg-sky-100 text-blue-400"
                : "hover:bg-sky-100 hover:text-blue-400 bg-gray-50"
            }`
          }
        >
          {cloneElement(li.icon, { className: "md:mr-2 text-[24px]" })}
          <p className="hidden md:block">{li.name}</p>
        </NavLink>
      ))}

      {/* Spacer */}
      <div className="flex-grow bg-gray-50 rounded-md hidden md:block my-1"></div>

      {/* Signout Button */}
      <NavLink
        to="/signout"
        className="p-3 flex items-center font-medium text-black h-[48px] bg-gray-50 rounded-sm hover:bg-sky-100 hover:text-blue-400 mt-1"
      >
        <FontAwesomeIcon icon={faPowerOff} className="md:mr-2 text-[24px]" />
        <p className="hidden md:block">Sign Out</p>
      </NavLink>
    </nav>
    </div>
  );
}

export default Sidebar;
