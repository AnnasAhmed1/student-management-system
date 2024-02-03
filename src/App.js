import './App.css';
// import { useEffect, useState } from "react";
import {
  
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

// Data
// import { AccountSidebar } from './pages/Financial/Data'

// // Components
// import Sidebar from './components/Sidebar'

// // // Pages
// import Home from './pages/Home/Home';
// import Account from './pages/Financial/Account';


import RootLayout from './layouts/RootLayout';
import AccountLayout from './layouts/AccountLayout';
import ProfileLayout from './layouts/ProfileLayout';
import AcademicLayout from './layouts/AcademicLayout';
import CommLayout from './layouts/CommLayout';
import ClassLayout from './layouts/ClassLayout';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root layout with the home page */}
        <Route path="/" element={<RootLayout />} />

        {/* Nested routes for Account, Profile, and Academic sections */}
        <Route path="account/*" element={<AccountLayout />} />
        <Route path="profile/*" element={<ProfileLayout />} />
        <Route path="academic/*" element={<AcademicLayout />} />
        <Route path="communication/*" element={<CommLayout />} />
        <Route path="class/*" element={<ClassLayout />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
