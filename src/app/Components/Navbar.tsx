import { FiMenu } from "react-icons/fi";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="w-full bg-black sm:h-[56px] px-[16px] flex justify-between items-center">
      <div className="h-full border-2 border-gray-500">
        <FiMenu />
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
