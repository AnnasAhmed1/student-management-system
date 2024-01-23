import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AccountSidebar } from '../pages/Financial/Data';
import AccountSide from '../components/AccountSidebar';
import { useState } from 'react';
import Navbar from '../components/Navbar';

import {
    Route,
    Routes
    
    
  } from "react-router-dom";
import Account from '../pages/Financial/Account';
const AccountLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();

  // Define the current layout's sidebar data
    const currentLayoutSidebarData = AccountSidebar;

  // Scroll to the top when the location changes
    useEffect(() => {
       window.scrollTo(0, 0);
  }, [location.pathname]);
    return (
     <>
       <Navbar pageTitle={getPageTitle(location.pathname, currentLayoutSidebarData)} />
        
        <div className="flex h-[100vh] bg-gray-100">
          <AccountSide isOpen={isSidebarOpen} toggle={() => setSidebarOpen(!isSidebarOpen)} sidebarData={AccountSidebar}/>
          <div className="flex-1 flex flex-col overflow-hidden">
        
              <button className='lg:hidden' onClick={() => setSidebarOpen(!isSidebarOpen)}>
                {isSidebarOpen ? 'Close' : 'Open'} Sidebar
              </button>
         
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-color2">
              <Routes>
              <Route index element={<Account />} />
              </Routes>
            </main>
          </div>
        </div>
        {/* <Footer /> */}
        </>
    );
  };
  const getPageTitle = (currentRoute, sidebarData) => {
    const currentSidebarItem = sidebarData.find(item => item.link === currentRoute);
    return currentSidebarItem ? currentSidebarItem.heading : 'Accounts';
  };

export default AccountLayout