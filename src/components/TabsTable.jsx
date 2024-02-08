import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Status',
    selector: row => row.status,
    sortable: true,
  },
  {
    name: 'Units',
    selector: row => row.units,
    sortable: true,
    right: true,
  },
  {
    name: 'Grading Basis',
    selector: row => row.grading,
    left:true,
  },
  {
    name: 'Academic Program',
    selector: row => row.academic,
    sortable: true,
    
  },
  {
    name: 'Requirment Designation',
    selector: row => row.requirement,
    sortable: true,
  },
  
];

const data = [
  {
    status: 'Enrolled',
    units: '1.00',
    grading: 'Graded',
    academic: 'Non-Certificate Program',
    requirement: '',
    // More data fields if needed
  },
  // ...other rows
];

const customStyles = {
  headCells: {
    style: {
      backgroundColor: '#f8f8f8', // Light gray background
      color: '#333', // Dark text color
      fontSize: '14px',
      fontWeight:'bold',
    },
  },
  cells: {
    style: {
      fontSize: '14px',
      // Apply more styles as needed to match the screenshot
    },
  },
  rows: {
    style: {
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#f6f8fa', // Light gray background for hover
      },
    },
  },
};

const TabsTable = () => (
  <div className='py-6'>
    <DataTable
      
      columns={columns}
      data={data}
      customStyles={customStyles}
     
      // Add highlightOnHover and pointerOnHover for hover effect
      highlightOnHover
      pointerOnHover
    />
    
  </div>
);

export default TabsTable;
