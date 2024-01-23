import React from 'react';
import DataTable from 'react-data-table-component';

// Define the columns
const columns = [
  {
    name: 'Term',
    selector: row => row.term,
    sortable: true,
  },
  {
    name: 'Academic Career',
    selector: row => row.academicCareer,
    sortable: true,
  },
  {
    name: 'Institution',
    selector: row => row.institution,
    sortable: true,
  },
];

// Create sample data
const data = [
  { term: 'Winter 2021', academicCareer: 'Undergraduate', institution: 'Toronto Met U' },
  { term: 'Fall 2021', academicCareer: 'Undergraduate', institution: 'Toronto Met U' },
  { term: 'Winter 2022', academicCareer: 'Undergraduate', institution: 'Toronto Met U' },
  { term: 'Winter 2023', academicCareer: 'Undergraduate', institution: 'Toronto Met U' },
  { term: 'Spring/Summer 2023', academicCareer: 'Undergraduate', institution: 'Toronto Met U' },
  { term: 'Fall 2023', academicCareer: 'Undergraduate', institution: 'Toronto Met U' },
  // ... more data
];

// Define custom styles for the hover effect
const customStyles = {
  rows: {
    style: {
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // or your preferred hover color
      },
    },
  },
  headCells: {
    style: {
        backgroundColor: '#f8f8f8', // a light gray background for head cells
      fontWeight: '700', // bold font weight for head cells
    },
  },
  cells: {
    style: {
      fontSize: '14px',
    },
  },
};

const ContractsTable = () => (
  <DataTable
    columns={columns}
    data={data}
    customStyles={customStyles}
    highlightOnHover
    pointerOnHover
    pagination
  />
);

export default ContractsTable;
