import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Class",
    selector: (row) => row.class,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row) => row.description,
    sortable: true,
  },
  {
    name: "Term",
    selector: (row) => row.term,
    sortable: true,
  },
  {
    name: "Grade",
    selector: (row) => row.grade,
    sortable: true,
  },
  {
    name: "Units",
    selector: (row) => row.units,
    sortable: true,
  },
  {
    name: "Status",
    cell: (row) => (
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "inline-block",
            color: row.status === "In Progress" ? "green" : "green",
          }}
        >
          {row.status}
        </div>
      </div>
    ),
  },
];

const data = [
  // {
  //   class: "MTH 240",
  //   description: "Calculus II",
  //   term: "Winter 2024",
  //   grade: " ",
  //   units: "1.00",
  //   status: "In Progress",
  // },
  // {
  //   class: "CPS 188",
  //   description: "Computer Prog. Fundamentals",
  //   term: "Winter 2024",
  //   grade: " ",
  //   units: "1.00",
  //   status: "In Progress",
  // },
  // {
  //   class: "PCS 125",
  //   description: "Physics: Waves and Fields",
  //   term: "Winter 2024",
  //   grade: " ",
  //   units: "1.00",
  //   status: "In Progress",
  // },
  // {
  //   class: "ELE 202",
  //   description: "Electircal Circuit II",
  //   term: "Winter 2024",
  //   grade: " ",
  //   units: "1.00",
  //   status: "In Progress",
  // },
  // {
  //   class: "FRE 101",
  //   description: "French",
  //   term: "Winter 2024",
  //   grade: " ",
  //   units: "1.00",
  //   status: "In Progress",
  // },
  {
    class: "CEN 199",
    description: "Writing Skills",
    term: "Fall 2023",
    grade: "PASS",
    units: "1.00",
    status: "Taken",
  },
  {
    class: "CMN 432",
    description: "Comm in Engin Professions",
    term: "Fall 2023",
    grade: "D+",
    units: "1.00",
    status: "Taken",
  },
  {
    class: "ECN 801",
    description: "Priciples of Eng Economics",
    term: "Fall 2023",
    grade: "A-",
    units: "1.00",
    status: "Taken",
  },
  {
    class: "EES 512",
    description: "Electric Circits",
    term: "Fall 2023",
    grade: "B-",
    units: "1.00",
    status: "Taken",
  },
  {
    class: "ENG 101",
    description: "Comedy and Tragedy",
    term: "Fall 2023",
    grade: "C+",
    units: "1.00",
    status: "Taken",
  },
  {
    class: "MTH 240",
    description: "Calculus II",
    term: "Spring/Summer 2023",
    grade: "F",
    units: "1.00",
    status: "Taken",
  },
  {
    class: "PCS 211",
    description: "Physics Mechanics",
    term: "Spring/Summer 2023",
    grade: "C+",
    units: "1.00",
    status: "Taken",
  },
  {
    class: "CEN 199",
    description: "Writing Skills",
    term: "Fall 2022",
    grade: "PASS",
    units: "1.00",
    status: "Taken",
  },
  {
    class: "CHY 102",
    description: "General Chemistry",
    term: "Fall 2022",
    grade: "INP",
    units: "1.00",
    status: "Taken",
  },
  {
    class: "CEN 199",
    description: "Writing Skills",
    term: "Winter 2022",
    grade: "PASS",
    units: "1.00",
    status: "Taken",
  },
  {
    class: "CHY 102",
    description: "General Chemistry",
    term: "Winter 2022",
    grade: "A",
    units: "1.00",
    status: "Taken",
  },
  {
    class: "MTH 140",
    description: "Calculus I",
    term: "Winter 2022",
    grade: "C-",
    units: "1.00",
    status: "Taken",
  },

  // ...more rows
];
// const data = [
//   {
//     class: 'CPS 188',
//     description: 'Computer Programming Fundamentals',
//     term: 'Winter 2024',
//     grade: 'A',
//     units: '1.00',
//     status: 'Taken',
//   },
//   {
//     class: 'CPS 188',
//     description: 'Computer Programming Fundamentals',
//     term: 'Winter 2024',
//     grade: 'A',
//     units: '1.00',
//     status: 'Taken',
//   },
//   {
//     class: 'CPS 188',
//     description: 'Computer Programming Fundamentals',
//     term: 'Winter 2024',
//     grade: 'A',
//     units: '1.00',
//     status: 'Taken',
//   },
//   {
//     class: 'CPS 188',
//     description: 'Computer Programming Fundamentals',
//     term: 'Winter 2024',
//     grade: 'A',
//     units: '1.00',
//     status: 'Taken',
//   },
//   {
//     class: 'CPS 188',
//     description: 'Computer Programming Fundamentals',
//     term: 'Winter 2024',
//     grade: 'A',
//     units: '1.00',
//     status: 'Taken',
//   },
//   {
//     class: 'CPS 188',
//     description: 'Computer Programming Fundamentals',
//     term: 'Winter 2024',
//     grade: 'A',
//     units: '1.00',
//     status: 'Taken',
//   },
//   {
//     class: 'CPS 188',
//     description: 'Computer Programming Fundamentals',
//     term: 'Winter 2024',
//     grade: 'A',
//     units: '1.00',
//     status: 'Taken',
//   },
//   {
//     class: 'CPS 188',
//     description: 'Computer Programming Fundamentals',
//     term: 'Winter 2024',
//     grade: 'A',
//     units: '1.00',
//     status: 'Taken',
//   },
//   {
//     class: 'CPS 188',
//     description: 'Computer Programming Fundamentals',
//     term: 'Winter 2024',
//     grade: 'A',
//     units: '1.00',
//     status: 'Taken',
//   },
//   {
//     class: 'CPS 188',
//     description: 'Computer Programming Fundamentals',
//     term: 'Winter 2024',
//     grade: 'A',
//     units: '1.00',
//     status: 'Taken',
//   },
//   {
//     class: 'CPS 188',
//     description: 'Computer Programming Fundamentals',
//     term: 'Winter 2024',
//     grade: 'A',
//     units: '1.00',
//     status: 'Taken',
//   },
//   {
//     class: 'CPS 188',
//     description: 'Computer Programming Fundamentals',
//     term: 'Winter 2024',
//     grade: 'A',
//     units: '1.00',
//     status: 'Taken',
//   },
//   // ...more rows
// ];

const customStyles = {
  headCells: {
    style: {
      backgroundColor: "#f8f8f8",
      fontWeight: "bold",
    },
  },
  cells: {
    style: {
      fontSize: "14px",
    },
  },
};

const AcademicTable = () => (
  <DataTable
    columns={columns}
    data={data}
    customStyles={customStyles}
    pagination
    filter
    highlightOnHover
  />
);

export default AcademicTable;
