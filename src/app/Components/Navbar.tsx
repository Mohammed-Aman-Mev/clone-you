import { FaPlay } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="w-full bg-black h-[56px] px-[8px] sm:px-[16px] flex justify-between items-center">
      <div className="h-full flex justify-between items-center w-[140px]">
        <FiMenu className="text-[25px]"/>
        <div className="flex items-center w-[90px] justify-between">
          <div className="bg-[#ff1111] w-[35px] h-[22px] dicen rounded-md">
            <FaPlay className="bg-[#ff1111] text-[10px]" />
          </div>
          <h3 className="font-semibold">UTube</h3>
        </div>
      </div>
      <div className="h-full border-2 border-gray-500">
        <IoIosSearch />
      </div>
      <div className="h-full border-2 border-gray-500">
        <IoMdNotificationsOutline />
      </div>
    </nav>
  );
};

export default Navbar;
