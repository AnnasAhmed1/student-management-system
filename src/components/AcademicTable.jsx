import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Class',
    selector: row => row.class,
    sortable: true,
  },
  {
    name: 'Description',
    selector: row => row.description,
    sortable: true,
  },
  {
    name: 'Term',
    selector: row => row.term,
    sortable: true,
  },
  {
    name: 'Grade',
    selector: row => row.grade,
    sortable: true,
  },
  {
    name: 'Units',
    selector: row => row.units,
    sortable: true,
  },
  {
    name: 'Status',
    cell: row => (
      <div style={{ textAlign: 'center' }}>
        <div style={{ display: 'inline-block', color: row.status === 'Taken' ? 'green' : 'red' }}>
          {row.status}
        </div>
      </div>
    ),
  },
];

const data = [
  {
    class: 'CPS 188',
    description: 'Computer Programming Fundamentals',
    term: 'Winter 2024',
    grade: 'A',
    units: '1.00',
    status: 'Taken',
  },
  {
    class: 'CPS 188',
    description: 'Computer Programming Fundamentals',
    term: 'Winter 2024',
    grade: 'A',
    units: '1.00',
    status: 'Taken',
  },
  {
    class: 'CPS 188',
    description: 'Computer Programming Fundamentals',
    term: 'Winter 2024',
    grade: 'A',
    units: '1.00',
    status: 'Taken',
  },
  {
    class: 'CPS 188',
    description: 'Computer Programming Fundamentals',
    term: 'Winter 2024',
    grade: 'A',
    units: '1.00',
    status: 'Taken',
  },
  {
    class: 'CPS 188',
    description: 'Computer Programming Fundamentals',
    term: 'Winter 2024',
    grade: 'A',
    units: '1.00',
    status: 'Taken',
  },
  {
    class: 'CPS 188',
    description: 'Computer Programming Fundamentals',
    term: 'Winter 2024',
    grade: 'A',
    units: '1.00',
    status: 'Taken',
  },
  {
    class: 'CPS 188',
    description: 'Computer Programming Fundamentals',
    term: 'Winter 2024',
    grade: 'A',
    units: '1.00',
    status: 'Taken',
  },
  {
    class: 'CPS 188',
    description: 'Computer Programming Fundamentals',
    term: 'Winter 2024',
    grade: 'A',
    units: '1.00',
    status: 'Taken',
  },
  {
    class: 'CPS 188',
    description: 'Computer Programming Fundamentals',
    term: 'Winter 2024',
    grade: 'A',
    units: '1.00',
    status: 'Taken',
  },
  {
    class: 'CPS 188',
    description: 'Computer Programming Fundamentals',
    term: 'Winter 2024',
    grade: 'A',
    units: '1.00',
    status: 'Taken',
  },
  {
    class: 'CPS 188',
    description: 'Computer Programming Fundamentals',
    term: 'Winter 2024',
    grade: 'A',
    units: '1.00',
    status: 'Taken',
  },
  {
    class: 'CPS 188',
    description: 'Computer Programming Fundamentals',
    term: 'Winter 2024',
    grade: 'A',
    units: '1.00',
    status: 'Taken',
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
      backgroundColor: '#f8f8f8',
      fontWeight: 'bold',
    },
  },
  cells: {
    style: {
      fontSize: '14px',
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
