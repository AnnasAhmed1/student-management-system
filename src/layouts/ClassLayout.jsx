import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {ClassSidebar} from '../pages/Class/Data';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import Navbar from '../components/Navbar';

import {
    Route,
    Routes
    
    
  } from "react-router-dom";
import Cart from '../pages/Class/Cart';
import ViewClass from '../pages/Class/ViewClass';
import ClassSearch from '../pages/Class/ClassSearch';
import WeeklySchedule from '../pages/Class/WeeklySchedule';
const ClassLayout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();

  // Define the current layout's sidebar data
  const currentLayoutSidebarData = ClassSidebar;

  // Scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
  <Navbar pageTitle={getPageTitle(location.pathname, currentLayoutSidebarData)} />
    
    <div className="flex  bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggle={() => setSidebarOpen(!isSidebarOpen)} sidebarData={ClassSidebar}/>
      <div className="flex-1 flex flex-col overflow-hidden">
    
          <button className='lg:hidden' onClick={() => setSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? 'Close' : 'Open'} Sidebar
          </button>
     
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-color2">
          <Routes>
          <Route index element={<ViewClass/>} />
          <Route path='cart' element={<Cart />} />
          <Route path='search' element={<ClassSearch />} />
          <Route path='schedule' element={<WeeklySchedule />} />
          </Routes>
        </main>
      </div>
    </div>
    {/* <Footer /> */}
    </>
  )
}
const getPageTitle = (currentRoute, sidebarData) => {
    const currentSidebarItem = sidebarData.find(item => item.link === currentRoute);
    return currentSidebarItem ? currentSidebarItem.heading : 'Class';
  };

export default ClassLayout