import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Department',
    selector: row => row.department,
    sortable: true,
  },
  {
    name: 'Admission Term',
    selector: row => row.admissionTerm,
    sortable: true,
  },
  {
    name: 'Description',
    selector: row => row.description,
    sortable: true,
  },
  {
    name: 'Action',
    cell: () => <button className="text-blue-600 hover:text-blue-800">View</button>,
    ignoreRowClick: true,
  },
  {
    name: 'Date',
    selector: row => row.date,
    sortable: true,
  },
  {
    name: 'Last Viewed',
    selector: row => row.lastViewed,
    sortable: true,
  },
  {
    name: 'Program Description',
    selector: row => row.programDescription,
    sortable: true,
  },
];

// Sample data
const data = [
    {
      department: 'Student Records',
      admissionTerm: 'Fall 2022',
      description: 'INC Grade',
      date: '08/24/2023',
      lastViewed: '01/19/2024 12:18 PM EST',
      programDescription: 'Bachelor of Engineering - Mechanical Engineering',
    },
    {
      department: 'Academic Advising',
      admissionTerm: 'Winter 2023',
      description: 'Test Score Notification',
      date: '03/10/2023',
      lastViewed: '03/27/2023 9:12 PM EDT',
      programDescription: 'Bachelor of Science - Computer Science',
    },
    {
      department: 'Student Records',
      admissionTerm: 'Fall 2023',
      description: 'Pre-Req Drop Email',
      date: '01/10/2023',
      lastViewed: '03/27/2023 9:32 PM EDT',
      programDescription: 'Bachelor of Arts - History',
    },
    {
      department: 'Student Records',
      admissionTerm: 'Fall 2022',
      description: 'INC Grade',
      date: '08/24/2023',
      lastViewed: '01/19/2024 12:18 PM EST',
      programDescription: 'Bachelor of Engineering - Mechanical Engineering',
    },
    {
      department: 'Academic Advising',
      admissionTerm: 'Winter 2023',
      description: 'Test Score Notification',
      date: '03/10/2023',
      lastViewed: '03/27/2023 9:12 PM EDT',
      programDescription: 'Bachelor of Science - Computer Science',
    },
    {
      department: 'Student Records',
      admissionTerm: 'Fall 2023',
      description: 'Pre-Req Drop Email',
      date: '01/10/2023',
      lastViewed: '03/27/2023 9:32 PM EDT',
      programDescription: 'Bachelor of Arts - History',
    },
    {
      department: 'Student Records',
      admissionTerm: 'Fall 2022',
      description: 'INC Grade',
      date: '08/24/2023',
      lastViewed: '01/19/2024 12:18 PM EST',
      programDescription: 'Bachelor of Engineering - Mechanical Engineering',
    },
    {
      department: 'Academic Advising',
      admissionTerm: 'Winter 2023',
      description: 'Test Score Notification',
      date: '03/10/2023',
      lastViewed: '03/27/2023 9:12 PM EDT',
      programDescription: 'Bachelor of Science - Computer Science',
    },
    {
      department: 'Student Records',
      admissionTerm: 'Fall 2023',
      description: 'Pre-Req Drop Email',
      date: '01/10/2023',
      lastViewed: '03/27/2023 9:32 PM EDT',
      programDescription: 'Bachelor of Arts - History',
    },
    // ... more data objects
  ];
  
const customStyles = {
  rows: {
    style: {
      
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Use your desired hover color
      },
    },
  },
  headCells: {
    style: {
      backgroundColor: '#f8f8f8', // Assuming a grey header background
      fontWeight: 'bold',
    },
  },
  cells: {
    style: {
      fontSize: '14px',
    },
  },
};

const CommTable = () => {
  // State and handlers

  return (
    <DataTable
      columns={columns}
      data={data}
      customStyles={customStyles}
      highlightOnHover
      pagination
    />
  );
};

export default CommTable;
