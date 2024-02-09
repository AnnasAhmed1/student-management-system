import React from "react";

import Accordion from "./Accordion";

const Tab1 = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
          <button className="w-1/2 bg-white border mr-auto border-color3 rounded-md py-2 px-4 text-color3 hover:bg-color3 hover:text-white">
            Printable Text
          </button>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox mr-2" />
            Show Enrolled Classes
          </label>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox mr-2" />
            Show Waitlisted Classes
          </label>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox mr-2" />
            Show dropped Classes
          </label>
        </div>
      </div>

      <Accordion title={"MTH 240 Calculus II"} />

      <Accordion title={"CPS 188 Computer Prog. Fundamentals"} />
      <Accordion title={"PCS 125 Physics: Waves and Fields"} />
      <Accordion title={"ELE 202 Electircal Circuit II"} />
      <Accordion title={"FRE 101 French"} />
    </div>
  );
};

export default Tab1;
