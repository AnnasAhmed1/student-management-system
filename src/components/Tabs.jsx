import React, { useState } from "react";
import Tab1 from "./Tab1";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full">
      <div className="flex">
        <button
          className={`w-1/2 p-3 text-center ${
            activeTab === 1
              ? "bg-blue-200 text-white/ border border-blue-500"
              : "bg-gray-200 border  text-textcol"
          }`}
          onClick={() => handleTabClick(1)}
        >
          By Class
        </button>
        <button
          className={`w-1/2 p-3 text-center ${
            activeTab === 2
              ? "bg-blue-200 text-white/ border border-blue-500"
              : "bg-gray-200 border  text-textcol"
          }`}
          onClick={() => handleTabClick(2)}
        >
          By Date
        </button>
      </div>
      <div className="p-4">
        {activeTab === 1 && <Tab1 />}
        {activeTab === 2 && <Tab1 />}
      </div>
    </div>
  );
};

export default Tabs;
