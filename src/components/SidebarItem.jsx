// SidebarItem.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarItem = ({ link, children }) => {
  const location = useLocation();
  const isSelected = location.pathname === link;

  return (
    <Link
      to={link}
      className={`block px-4 py-2 text-colornav border ${isSelected ? 'bg-focuscol' : 'hover:bg-hovcolor1'}`}
    >
      {children}
    </Link>
  );
};

export default SidebarItem;
