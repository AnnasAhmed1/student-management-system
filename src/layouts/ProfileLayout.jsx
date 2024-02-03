import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ProfileSidebar } from '../pages/Profile/Data';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Route, Routes } from "react-router-dom";
import Profile from '../pages/Profile/Profile';
// import Grades from '../pages/AcademicRec/Grades';
// import ViewGrades from '../pages/AcademicRec/ViewGrades';
// import NameUpdate from '../pages/Profile/NameUpdate';
import ContactDetails from '../pages/Profile/ContactDetails';
import Diversity from '../pages/Profile/Diversity';
import NameUpdate from '../pages/Profile/NameUpdate';
import Addresses from '../pages/Profile/Addresses';
import PSm from '../components/paragraphs/P_Sm';

const ProfileLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  // Define the current layout's sidebar data
  const currentLayoutSidebarData = ProfileSidebar;

  // Scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
    <Navbar pageTitle={getPageTitle(location.pathname, currentLayoutSidebarData)} />
    <div className='w-full bg-color1 border '>
        <div className='flex flex-col justify-between  items-start w-[95%] mx-auto'>
          <PSm>ID</PSm>
          <PSm>0345749</PSm>
       
        </div>
      </div>
      <div className="flex h-full bg-gray-100">
        <Sidebar isOpen={isSidebarOpen} toggle={() => setSidebarOpen(!isSidebarOpen)} sidebarData={ProfileSidebar} />
        <div className="flex-1 flex flex-col overflow-hidden">

          <button className='lg:hidden' onClick={() => setSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? 'Close' : 'Open'} Sidebar
          </button>

          <main className="flex-1 overflow-x-hidden  bg-color2">
            <Routes>
            <Route index element={<Profile />} />
          <Route path='contact' element={<ContactDetails />} />
          <Route path='update' element={<NameUpdate />} />
          <Route path='addresses' element={<Addresses />} />
          <Route path='diversity' element={<Diversity />} />
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
  return currentSidebarItem ? currentSidebarItem.heading : 'Profile';
};

export default ProfileLayout;
