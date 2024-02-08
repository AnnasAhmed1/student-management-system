import React, { useState } from "react";
import TabsTable from "./TabsTable";
import TabsTable1 from "./TabsTable1";
import PSm from "./paragraphs/P_Sm";

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" my-4  overflow-hidden">
      <div
        className="flex justify-start items-center  cursor-pointer"
        onClick={toggleAccordion}
      >
        <svg
          className={`w-6 h-6 ${isOpen ? "transform rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <span className="text-lg">
          <PSm styles={"text-textcol2"}>{props.title} </PSm>
        </span>
      </div>
      {isOpen && (
        <div className="p-4">
          <TabsTable />
          <TabsTable1 />
        </div>
      )}
    </div>
  );
};

export default Accordion;
