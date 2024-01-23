import React from "react";
import DataTable from "react-data-table-component";
import PSm from "./paragraphs/P_Sm";

const columns = [
  {
    name: "Class",
    selector: (row) => row.class,
    sortable: true,
  },
  {
    name: "Units",
    selector: (row) => row.units,
    sortable: true,
  },
  {
    name: "Grading",
    selector: (row) => row.grading,
    sortable: true,
  },
  {
    name: "Grade",
    selector: (row) => row.grade,
    sortable: true,
  },
  {
    name: "Grade Points",
    selector: (row) => row.gradePoints,
    sortable: true,
    right: false,
  },
];

const data = [
  {
    class: "CEN 199",
    units: "1.00",
    grading: "Pass/Fail",
    grade: "INP",
    gradePoints: " ",
  },
  {
    class: "CMN 432",
    units: "1.00",
    grading: "Graded",
    grade: "D+",
    gradePoints: "1.330",
  },
  {
    class: "ECN 801",
    units: "1.00",
    grading: "Graded",
    grade: "A-",
    gradePoints: "3.670",
  },
  {
    class: "EES 512",
    units: "1.00",
    grading: "Graded",
    grade: "B-",
    gradePoints: "2.670",
  },
  {
    class: "ENG 101",
    units: "1.00",
    grading: "Graded",
    grade: "C+",
    gradePoints: "2.330",
  },
];

const customStyles = {
  headCells: {
    style: {
      backgroundColor: "#f8f8f8", // Light gray background
      color: "#333", // Dark text color
      fontSize: "14px",
    },
  },
  cells: {
    style: {
      fontSize: "14px",
      // Apply more styles as needed to match the screenshot
    },
  },
  rows: {
    style: {
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "#f6f8fa", // Light gray background for hover
      },
    },
  },
};

const GradeDetails = ({ termGPA, cumulativeGPA, academicStanding }) => (
  <div className="m-4">
    <div className="mb-4">
      <h2 className="text-lg">View Grades</h2>
      <div className="flex flex-col justify-between  p-2">
        <div className="flex flex-row items-center justify-center py-2 border bg-color1">
          <PSm> Term GPA: {termGPA}</PSm>
        </div>
        <div className="flex flex-row items-center justify-center py-2 border bg-color1">
          <PSm> Cumulative GPA: {cumulativeGPA}</PSm>
        </div>
        <div className="flex flex-row items-center justify-center py-2 border bg-color1">
          <PSm> Academic Standing: {academicStanding}</PSm>
        </div>
      </div>
    </div>
    <DataTable
      columns={columns}
      data={data}
      customStyles={customStyles}
      // Optional: onRowClicked handler
      highlightOnHover
      pointerOnHover
    />
  </div>
);

const GradesTable = () => {
  return (
    <GradeDetails
      termGPA="0.000"
      cumulativeGPA="1.130"
      academicStanding="Academic Standing, Permanent Program Withdrawal"
    />
  );
};

export default GradesTable;
