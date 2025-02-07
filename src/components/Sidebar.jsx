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
    icon: <FontAwesomeIcon icon={faHouse} className="mr-2 text-[24px]" />,
  },
  {
    name: "Invoice",
    path: "/invoice",
    icon: <FontAwesomeIcon icon={faFileInvoice} className="mr-2 text-[24px]" />,
  },
  {
    name: "Customer",
    path: "/customer",
    icon: <FontAwesomeIcon icon={faUser} className="mr-2 text-[24px]" />,
  },
];

function Sidebar() {
  return (
    <div className="sm:w-64 text-white h-screen py-4 px-2 flex flex-col w-full">
      {/* Logo Section */}
      <div className="h-20 md:h-40 p-4 bg-blue-600 text-lg rounded-md flex items-end justify-start">
        <a href="/" className="text-white flex flex-row items-center leading-none">
          <h2>
            <FontAwesomeIcon
              icon={faGlobe}
              className="md:text-[42px] text-xl transform rotate-15"
            />
          </h2>
          <span className="text-[44px] font-[Lusitana]">Acme</span>
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="mt-1 flex-grow flex flex-row md:flex-col">
          
          {links.map((li) => (
            <NavLink
              key={li.name}
              to={li.path}
              className={({ isActive }) =>
                `p-3 flex items-center text-black my-1 gap-1 h-[48px] rounded-md font-medium px-3 ${
                  isActive
                    ? "bg-sky-50 text-blue-400"
                    : "hover:bg-sky-100 hover:text-blue-600 bg-gray-50"
                }`
              }
            >
              {cloneElement(li.icon, { className: "md:mr-2 text-[24px]" })}
              <p className="hidden md:block">{li.name}</p>
            </NavLink>
          ))}

          {/* Spacer */}
          <div className="flex-grow bg-gray-50 rounded-md hidden md:block my-1"></div>

          {/* Logout Button */}
          <NavLink
            to="/logout"
            className="p-3 flex items-center font-medium text-black h-[48px] bg-gray-50 rounded-sm hover:bg-sky-100 hover:text-blue-600 mt-auto"
          >
            <FontAwesomeIcon icon={faPowerOff} className="md:mr-2 text-[24px]" />
            <p className="hidden md:block">Sign Out</p>
          </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
