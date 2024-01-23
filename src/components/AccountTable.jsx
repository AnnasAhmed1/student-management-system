import React from 'react'

import DataTable from 'react-data-table-component';
const columns = [
    {
      name: 'Account Type',
      selector: row => row.chargeType,
      sortable: true,
    },
    {
      name: 'Account Number',
      selector: row => row.accountNumber,
      sortable: true,
    },
    {
      name: 'Term',
      selector: row => row.term,
      sortable: true,
    },
    {
      name: 'Balance',
      selector: row => row.balance,
      sortable: true,
      right: true,
    },
  ];
  const data = [
    // Populate with your data
    {
      chargeType: 'Fees',
      accountNumber: 'FEE001',
      term: 'Winter 2024',
      balance: '-300.41 CAD',
    },
    {
      chargeType: 'Fees',
      accountNumber: 'FEE001',
      term: 'Winter 2024',
      balance: '-300.41 CAD',
    },
    {
      chargeType: 'Fees',
      accountNumber: 'FEE001',
      term: 'Winter 2024',
      balance: '-300.41 CAD',
    },
    {
      chargeType: 'Fees',
      accountNumber: 'FEE001',
      term: 'Winter 2024',
      balance: '-300.41 CAD',
    },
    {
      chargeType: 'Fees',
      accountNumber: 'FEE001',
      term: 'Winter 2024',
      balance: '-300.41 CAD',
    },
    {
      chargeType: 'Fees',
      accountNumber: 'FEE001',
      term: 'Winter 2024',
      balance: '-300.41 CAD',
    },
    // ...other rows
  ];
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: '#f8f8f8', // This is a gray background color
        color: '#1a202c', // This is a near-black color
        fontSize: '14px',
      },
    },
    cells: {
      style: {
        fontSize: '14px',
        '&:not(:last-of-type)': {
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          borderBottomColor: '#cbd5e0', // Light gray border color
        },
      },
    },
    rows: {
      style: {
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: '#edf2f7', // Lighter gray for hover state
        },
      },
      highlightOnHoverStyle: {
        backgroundColor: '#ebf4ff', // Even lighter gray for highlight on hover
        borderBottomColor: '#9ae6b4', // A green color for the bottom border
        outline: '1px solid #9ae6b4', // A green outline
      },
    },
  };
const AccountTable = () => {

  return (
    <div><DataTable
    
    columns={columns}
    data={data}
    customStyles={customStyles}
 
  /></div>
  )
}

export default AccountTable