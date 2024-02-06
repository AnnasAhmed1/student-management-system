import React from "react";
import GradesTable from "../../components/GradesTable";
import { useLocation } from "react-router-dom";
const ViewGrades = () => {
  const { location } = useLocation();
  const dataReceived = location;
  console.log(dataReceived);
  return (
    <div>
      <GradesTable />
    </div>
  );
};

export default ViewGrades;
