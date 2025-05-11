// Library
import React, { useState } from 'react';
import { Link, useLocation } from "react-router";
import { AiFillHome, AiOutlineGold } from 'react-icons/ai';
import { MdLanguage, MdOutlineAir, MdOutlineMeetingRoom } from 'react-icons/md';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaPlug } from "react-icons/fa";

// Context
import { useLanguage } from '@context/LanguageContext';

// Components
import ThemeToggle from '@components/ThemeToggle';
import Hamburger from '@components/Hamburger';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { translations, language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'th' : 'en');
  };

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const menuItems = [
    { icon: <AiFillHome size={24} />, label: translations.pages.home, path: '/' },
    { icon: <MdOutlineAir size={24} />, label: translations.pages.air, path: '/air' },
    { icon: <MdOutlineMeetingRoom size={24} />, label: translations.pages.airRoom, path: '/air-room' },
    { icon: <AiOutlineGold size={24} />, label: translations.pages.gold, path: '/gold' },
    { icon: <FaPlug size={24} />, label: translations.pages.plug, path: '/plug' },
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
      z-11
    `}>
      <div>
        {/* Navbar Mobile */}
        <div className='flex justify-between items-center w-screen h-[50px] sm:hidden'>
          <Hamburger toggleCollapse={toggleCollapse} isCollapsed={isCollapsed} />
          <div className='flex items-center'>
            <ThemeToggle />
            <div className='flex items-center gap-2 me-5'>
              <MdLanguage className='cursor-pointer btn btn-circle' size={32} onClick={toggleLanguage} />
              <span className='font-bold'>{language === 'en' ? 'EN' : 'TH'}</span>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className={`my-8 justify-center ${isCollapsed ? 'hidden' : 'flex'} sm:mb-8 sm:flex`}>
          <img
            src="/I.PNG"
            alt="Logo"
            className={`transition-all duration-300 ${isCollapsed ? 'w-10 h-10' : 'w-70 h-70 sm:w-50 sm:h-50'}  rounded-xl`}
          />
        </div>

        {/* Menu Mobile */}
        <div className={`${isCollapsed ? 'hidden' : 'flex justify-center'} sm:hidden`}>
          <ul className={`menu p-0 block`}>
            {menuItems.map((item, idx) => (
              <li key={idx} className="mb-2">
                <Link to={item.path} className={`flex items-center gap-5 ${location.pathname === item.path ? 'menu-active' : ''}`} onClick={() => setIsCollapsed(true)}>
                  {/* เพิ่มขนาด icon เฉพาะ mobile */}
                  {React.cloneElement(item.icon, { size: 32 })}
                  {!isCollapsed && <span className='font-bold text-3xl'>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu */}
        <div className={`flex justify-center`}>
          <ul className={`menu p-0 hidden sm:block`}>
            {menuItems.map((item, idx) => (
              <li key={idx} className="mb-2">
                <Link to={item.path} className={`flex items-center gap-2 ${location.pathname === item.path ? 'menu-active' : ''}`}>
                  {item.icon}
                  {!isCollapsed && <span className='font-bold'>{item.label}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className={`${isCollapsed ? 'flex-col' : 'flex-row justify-center'} gap-4 items-center hidden sm:flex`}>
        <ThemeToggle /> {/* ✅ ใช้ component ที่แยกออกมา */}
        <button className="btn btn-circle border-0" onClick={toggleCollapse}>
          {isCollapsed ? <FiChevronRight size={24} /> : <FiChevronLeft size={24} />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar