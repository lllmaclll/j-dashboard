'use client'
import React, { useState } from 'react';
import { Link } from 'react-router'
import { AiFillHome, AiOutlineGold } from 'react-icons/ai';
import { MdOutlineAir, MdOutlineMeetingRoom } from 'react-icons/md';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaPlug } from "react-icons/fa";
import ThemeToggle from './ThemeToggle';
import Hamburger from './Hamburger';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
    console.log("sdsdsdsd")
  };

  const menuItems = [
    { icon: <AiFillHome size={24} />, label: 'Home', path: '/' },
    { icon: <MdOutlineAir size={24} />, label: 'Air', path: '/air' },
    { icon: <MdOutlineMeetingRoom size={24} />, label: 'Air Room', path: '/air-room' },
    { icon: <AiOutlineGold size={24} />, label: 'Gold', path: '/gold' },
    { icon: <FaPlug size={24} />, label: 'Plug', path: '/plug' },
  ]

  return (
    <aside className={`
      bg-base-200 flex justify-between transition-all
      sm:flex-col
      py-0 sm:p-4
      ${isCollapsed ? 'sm:w-20' : 'sm:w-64'}
      w-screen
      sm:h-screen
      ${isCollapsed ? 'h-[50px]' : 'h-screen'}
      sticky top-0
    `}>
      <div>
        <div className='flex justify-between items-center w-screen h-[50px] sm:hidden'>
          <Hamburger toggleCollapse={toggleCollapse} isCollapsed={isCollapsed} />
          <ThemeToggle />
        </div>

        {/* Logo */}
        <div className={`my-8 justify-center ${isCollapsed ? 'hidden' : 'flex'} sm:mb-8 sm:flex`}>
          <img
            src="/I.PNG"
            alt="Logo"
            className={`transition-all duration-300 ${isCollapsed ? 'w-10 h-10' : 'w-70 h-70 sm:w-50 sm:h-50'}  rounded-xl`}
          />
        </div>

        {/* Menu */}
        <div className={`flex justify-center`}>
          <ul className={`menu p-0 hidden sm:block`}>
            {menuItems.map((item, idx) => (
              <li key={idx} className="mb-2">
                <Link to={item.path} className="flex items-center gap-2">
                {/* <a className="flex items-center gap-2"> */}
                  {item.icon}
                  {!isCollapsed && <span className='font-bold'>{item.label}</span>}
                {/* </a> */}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Mobile */}
        <div className={`${isCollapsed ? 'hidden' : 'flex justify-center'} sm:hidden`}>
          <ul className={`menu p-0 block`}>
            {menuItems.map((item, idx) => (
              <li key={idx} className="mb-2">
                <Link to={item.path} className={`flex items-center gap-5`}>
                {/* <a className={`flex items-center gap-5`}> */}
                  {/* เพิ่มขนาด icon เฉพาะ mobile */}
                  {React.cloneElement(item.icon, { size: 32 })}
                  {!isCollapsed && <span className='font-bold text-3xl'>{item.label}</span>}
                {/* </a> */}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className={`${isCollapsed ? 'flex-col' : 'flex-row justify-center'} gap-4 items-center hidden sm:flex`}>
        <ThemeToggle /> {/* ✅ ใช้ component ที่แยกออกมา */}
        <button className="btn btn-circle border-0" type='button' onClick={toggleCollapse}>
          {isCollapsed ? <FiChevronRight size={24} /> : <FiChevronLeft size={24} />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
