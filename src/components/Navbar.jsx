
// Import necessary dependencies
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PSm from './paragraphs/P_Sm';
import H3 from './headings/H3';
import house from '../assets/house.svg'
import logo from '../assets/browse_course.png'

const Navbar = ({ pageTitle }) => {
  // Get the current location using React Router's useLocation hook
  const location = useLocation();

  // Define a function to check if the current route is the home page
  const isHomePage = () => location.pathname === '/';

  return (
    <div className='w-full bg-colorNav  py-4 '>
      <div className='flex justify-between items-center w-[95%] mx-auto'>
        {/* Conditionally render the logo or back button based on the current page */}
        {isHomePage() ? (
          <img src={logo} className='h-8 w-8' alt="logo" />
        ) : (
          <Link className='text-color2 border px-5 rounded-lg border-color1' to="/">
            Back to Home
          </Link>
        )}
        {/* Render the dynamic page title */}
        <H3 styles={'text-color2'}>{isHomePage() ? 'Home' : pageTitle}</H3>
        <div className='flex text-white space-x-4'>
          <img src={house} alt="house" />
          <PSm>...</PSm>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

