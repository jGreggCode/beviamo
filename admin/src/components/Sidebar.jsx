import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { MdDashboard, MdAddCircleOutline, MdChecklist } from "react-icons/md";
import { BiSolidPackage } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2"
          to={"/dashboard"}
        >
          <MdDashboard className="w-5 h-5" />
          <p className="hidden md:block">Dashboard</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2"
          to={"/add"}
        >
          <MdAddCircleOutline className="w-5 h-5" />
          <p className="hidden md:block">Add Products</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2"
          to={"/products"}
        >
          <MdChecklist className="w-5 h-5" />
          <p className="hidden md:block">List Products</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2"
          to={"/orders"}
        >
          <BiSolidPackage className="w-5 h-5" />
          <p className="hidden md:block">Orders</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2"
          to={"/users"}
        >
          <FaUsers className="w-5 h-5" />
          <p className="hidden md:block">Users</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
