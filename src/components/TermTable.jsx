import React from "react";

import H3 from "./headings/H3";
import PSm from "./paragraphs/P_Sm";
import { Link, useLocation, useParams } from "react-router-dom";

const TermTable = (props) => {
  const param = useParams();
  console.log(props.link);
  console.log(JSON.stringify(param));
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
