import React from "react";

import H3 from "./headings/H3";
import PSm from "./paragraphs/P_Sm";
import { Link } from "react-router-dom";
// const termColumns = [
//   {
//     name: 'Term',
//     selector: row => row.term,
//     sortable: true,
//   },
//   {
//     name: 'Status',
//     selector: row => row.status,
//     sortable: true,
//     right: true,
//   },
// ];

// const termData = [
//   {
//     term: 'Fall 2023',
//     status: 'Undergraduate',
//   },
//   {
//     term: 'Summer 2023',
//     status: 'Undergraduate',
//   },
//   {
//     term: 'Fall 2023',
//     status: 'Undergraduate',
//   },
//   // ...other terms
// ];

const TermTable = (props) => {
  return (
    <Link to={props.link}>
      <div className="w-full bg-color1 hover:bg-hovcolor1 border pl-2 flex flex-col items-start justify-center">
        <H3>{props.term}</H3>
        <PSm>{props.status}</PSm>
      </div>
    </Link>
  );
};

export default TermTable;
