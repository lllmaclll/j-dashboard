import { useState } from 'react';
import { AiFillHome, AiOutlineGold } from 'react-icons/ai';
import { MdOutlineAir, MdOutlineMeetingRoom } from 'react-icons/md';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaPlug } from "react-icons/fa";
import ThemeToggle from './ThemeToggle';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const menuItems = [
    { icon: <AiFillHome size={24} />, label: 'Home' },
    { icon: <MdOutlineAir size={24} />, label: 'Air' },
    { icon: <MdOutlineMeetingRoom size={24} />, label: 'Air Room' },
    { icon: <AiOutlineGold size={24} />, label: 'Gold' },
    { icon: <FaPlug size={24} />, label: 'Plug' },
  ];

  return (
    <div className={`h-screen ${isCollapsed ? 'w-20' : 'w-64'} transition-all bg-base-200 p-4 flex flex-col justify-between`}>
      <div>
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src="/logo.jpg"
            alt="Logo"
            className={`transition-all duration-300 ${isCollapsed ? 'w-10 h-10' : 'w-50 h-50'
              } rounded-xl`}
          />
        </div>

        {/* Menu */}
        <ul className="menu p-0">
          {menuItems.map((item, idx) => (
            <li key={idx} className="mb-2">
              <a className="flex items-center gap-2">
                {item.icon}
                {!isCollapsed && <span className='font-bold'>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-4 items-center">
        <ThemeToggle /> {/* ✅ ใช้ component ที่แยกออกมา */}
        <button className="btn btn-square btn-sm" onClick={toggleCollapse}>
          {isCollapsed ? <FiChevronRight size={24} /> : <FiChevronLeft size={24} />}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
