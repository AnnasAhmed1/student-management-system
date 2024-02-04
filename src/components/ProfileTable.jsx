import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Type",
    selector: (row) => row.type,
    sortable: true,
    right: true,
  },
];

const data = [
  {
    name: "Nehash",
    type: "Primary",
    // More data fields if needed
  },
  // ...other rows
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

const ProfileTable = () => (
  <div className="py-6">
    <DataTable
      columns={columns}
      data={data}
      customStyles={customStyles}
      onRowClicked={(row) => alert(`Clicked row with name: ${row.name}`)}
      // Add highlightOnHover and pointerOnHover for hover effect
      highlightOnHover
      pointerOnHover
    />
  </div>
);

export default ProfileTable;
