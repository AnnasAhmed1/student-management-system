

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AcademicSidebar } from '../pages/AcademicRec/Data';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Route, Routes } from 'react-router-dom';
import PSm from '../components/paragraphs/P_Sm';
import Grades from '../pages/AcademicRec/Grades';
import ViewGrades from '../pages/AcademicRec/ViewGrades';
import H3 from '../components/headings/H3';
import Academic from '../pages/AcademicRec/Academic';
import Graduation from '../pages/AcademicRec/Graduation';
import ChangePlan from '../pages/AcademicRec/ChangePlan';
import CourseHistory from '../pages/AcademicRec/CourseHistory';
import Minor from '../pages/AcademicRec/Minor';
import Transcript from '../pages/AcademicRec/Transcript';
import Probation from '../pages/AcademicRec/Probation';
import ChangeCertificate from '../pages/AcademicRec/ChangeCertificate';
const AcademicLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = React.useState(true);
  const location = useLocation();

  // Define the current layout's sidebar data
  const currentLayoutSidebarData = AcademicSidebar;

  // Scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar pageTitle={getPageTitle(location.pathname, currentLayoutSidebarData)} />
      <div className='w-full bg-gray-200 border '>
        <div className='flex flex-col   text-start w-[95%] mx-auto'>
          <H3>Fall 2022</H3>
          <PSm>Undergraduate </PSm>
        </div>
      </div>
      <div className='flex  bg-gray-100'>
        <Sidebar isOpen={isSidebarOpen} toggle={() => setSidebarOpen(!isSidebarOpen)} sidebarData={currentLayoutSidebarData} />
        <div className='flex-1 flex flex-col overflow-hidden'>
          <button className='lg:hidden' onClick={() => setSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? 'Close' : 'Open'} Sidebar
          </button>
          <main className='flex-1 overflow-x-hidden overflow-y-auto bg-color2'>
            <Routes>
              <Route index element={<Academic />} />
              <Route path='grades' element={<Grades />} />
              <Route path='apply-graduation' element={<Graduation />} />
              <Route path='change-plan' element={<ChangePlan />} />
              <Route path='select-minor' element={<Minor />} />
              <Route path='request-transcript' element={<Transcript />} />
              <Route path='probationary-contracts' element={<Probation />} />
              <Route path='course-history' element={<CourseHistory />} />
              <Route path='change-certificate' element={<ChangeCertificate />} />
              <Route path='grades/viewgrades' element={<ViewGrades />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
};

// Function to get the page title based on the current route
const getPageTitle = (currentRoute, sidebarData) => {
  const currentSidebarItem = sidebarData.find(item => item.link === currentRoute);
  return currentSidebarItem ? currentSidebarItem.heading : 'Academics';
};

export default AcademicLayout;

