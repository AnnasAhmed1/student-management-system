import React from 'react';
import DataTable from 'react-data-table-component';

// Define your columns
const columns = [
  { name: 'Time', selector: row => row.time, sortable: true, grow: 0 },
  { name: 'Monday', selector: row => row.monday, grow: 2 },
  { name: 'Tuesday', selector: row => row.tuesday, grow: 2 },
  { name: 'Wednesday', selector: row => row.wednesday, grow: 2 },
  { name: 'Thursday', selector: row => row.thursday, grow: 2 },
  { name: 'Friday', selector: row => row.friday, grow: 2 },
  { name: 'Saturday', selector: row => row.saturday, grow: 2 },
  { name: 'Sunday', selector: row => row.sunday, grow: 2 },
];

// Generate sample data for each time slot
const times = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];
const data = times.map(time => ({
  time,
  monday: '',
  tuesday: '',
  wednesday: '',
  thursday: '',
  friday: '',
  saturday: '',
  sunday: '',
}));

const customStyles = {
  rows: {
    style: {
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  headCells: {
    style: {
      backgroundColor: '#f8f8f8',
      fontWeight: 'bold',
    },
  },
  cells: {
    style: {
      fontSize: '14px',
      textAlign: 'center',
      border: '0.5px solid',
    },
  },
};

const ScheduleTable = () => (
  <DataTable
    columns={columns}
    data={data}
    customStyles={customStyles}
    noHeader
    highlightOnHover
    pointerOnHover
    dense
  />
);

export default ScheduleTable;
