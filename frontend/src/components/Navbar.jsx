import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { BiMenuAltRight } from "react-icons/bi";
import { useState, useEffect, useContext } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const navigation = useNavigate();
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  // Inside Navbar component
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Optional: cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <div className="flex h-20 items-center justify-between  py-5 font-normal">
      <Link to={"/"}>
        <img src={assets.logo} className="w-[120px]" alt="Beviamo Logo" />
      </Link>
      <ul className="hidden sm:flex gap-7 text-sm text-amber-900">
        <NavLink to={"/"} className="flex flex-col items-center gap-1">
          <p className="">HOME</p>
          <hr className="w-full border-none h-[1.5px] mt-[-5px] bg-amber-900 hidden" />
        </NavLink>
        <NavLink
          to={"/collection"}
          className="flex flex-col items-center gap-1"
        >
          <p className="">OUR PRODUCTS</p>
          <hr className="w-full border-none h-[1.5px] mt-[-5px] bg-amber-900 hidden" />
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col items-center gap-1">
          <p className="">ABOUT</p>
          <hr className="w-full border-none h-[1.5px] mt-[-5px] bg-amber-900 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col items-center gap-1">
          <p className="">CONTACT</p>
          <hr className="w-full border-none h-[1.5px] mt-[-5px] bg-amber-900 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center justify-center">
        <CiSearch
          onClick={() => {
            setShowSearch(true);
            navigation("/collection");
          }}
          className="w-10 text-amber-900 cursor-pointer hover:scale-110"
          size={25}
        />
        <div className="group relative">
          <CiUser
            className="w-10 text-amber-900 cursor-pointer hover:scale-110"
            size={25}
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-1 pt-4 z-50">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer font-light text-amber-950">
                My Profile
              </p>
              <p className="cursor-pointer font-light text-amber-950">Order</p>
              <p className="cursor-pointer font-light text-amber-950">Logout</p>
            </div>
          </div>
        </div>
        <Link to={"/cart"} className="relative">
          <CiShoppingCart
            className="w-10 text-amber-900 cursor-pointer hover:scale-110"
            size={25}
          />
          {getCartCount() > 0 && (
            <p className="absolute right-1 bottom-[-3px] w-4 text-center leading-4 bg-amber-900 text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          )}
        </Link>

        <BiMenuAltRight
          onClick={() => setVisible(true)}
          className="w-10 justify-center text-amber-900 cursor-pointer hover:scale-110 sm:hidden"
          size={25}
        />
      </div>

      {/* Sidebar */}
      <div
        className={`z-50 h-[100dvh] absolute top-[80px] right-0 bottom-0 overflow-hidden bg-white transition-all duration-500 ease-in-out ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-2 p-3 cursor-pointer"
          >
            <TiArrowBackOutline size={25} />
            <p>Go Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="smNav mb-1 py-2 pl-6 text-amber-900"
            to={"/"}
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="smNav mb-1 py-2 pl-6 text-amber-900"
            to={"/collection"}
          >
            OUR PRODUCTS
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="smNav mb-1 py-2 pl-6 text-amber-900"
            to={"/about"}
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="smNav mb-1 py-2 pl-6 text-amber-900"
            to={"/contact"}
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
