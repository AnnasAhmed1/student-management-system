import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Class',
    selector: row => row.class,
    sortable: true,
  },
  {
    name: 'Start/End Dates',
    selector: row => row.dates,
 
  },
  {
    name: 'Days And Times',
    selector: row => row.days,
  
  },
  {
    name: 'Room',
    selector: row => row.room,
    
    
  },
  
  
];

const data = [
  {
    class: 'lecture-5563',
    dates: '01/15/2024 - 04/19/2024',
    days: 'Days: to be announced Time: to be anounced',
    room: 'Online',
 
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

const TabsTable1 = () => (
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

export default TabsTable1;
