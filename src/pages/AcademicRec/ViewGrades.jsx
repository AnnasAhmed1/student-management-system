import React from "react";
import GradesTable from "../../components/GradesTable";
import { useLocation } from "react-router-dom";
const ViewGrades = () => {
  const location = useLocation();

  // Parse the query string to extract the parameter value
  const searchParams = new URLSearchParams(location.search);
  const sem = searchParams.get("sem");
  console.log(sem);

  const data = {
    "Fall-2023": {
      termGPA: "2.930",
      cumGPA: "2.100",
      academicStanding: "Probationary",
      subjects: [
        {
          class: "CEN 199",
          units: "1.00",
          grading: "Pass/Fail",
          grade: "INP",
          gradePoints: " ",
        },
        {
          class: "CMN 432",
          units: "1.00",
          grading: "Graded",
          grade: "D+",
          gradePoints: "1.330",
        },
        {
          class: "ECN 801",
          units: "1.00",
          grading: "Graded",
          grade: "A-",
          gradePoints: "3.670",
        },
        {
          class: "EES 512",
          units: "1.00",
          grading: "Graded",
          grade: "B-",
          gradePoints: "2.670",
        },
        {
          class: "ENG 101",
          units: "1.00",
          grading: "Graded",
          grade: "C+",
          gradePoints: "2.330",
        },
      ],
    },
    "Spring/Summer-2023": {
      termGPA: "1.660",
      cumGPA: "1.890",
      academicStanding: "Probationary",
      subjects: [
        {
          class: "MTH 240",
          units: "1.00",
          grading: "Graded",
          grade: "F",
          gradePoints: " ",
        },
        {
          class: "PCS 211",
          units: "1.00",
          grading: "Graded",
          grade: "C+",
          gradePoints: "2.330",
        },
      ],
    },
    "Fall-2022": {
      termGPA: "0.000",
      cumGPA: "2.830",
      academicStanding: "Probationary",
      subjects: [
        {
          class: "CEN 199",
          units: "1.00",
          grading: "Pass/Fail",
          grade: "INP",
          gradePoints: " ",
        },
        {
          class: "ECN 801",
          units: "1.00",
          grading: "Graded",
          grade: "F",
          gradePoints: " ",
        },
        {
          class: "PCS 211",
          units: "1.00",
          grading: "Graded",
          grade: "F",
          gradePoints: " ",
        },
      ],
    },
    "Fall-2020": {
      termGPA: "3.330",
      cumGPA: "3.330",
      academicStanding: "Probationary",
      subjects: [
        {
          class: "CEN 100",
          units: "1.00",
          grading: "Graded",
          grade: "B+",
          gradePoints: "3.330",
        },
        {
          class: "CEN 199",
          units: "1.00",
          grading: "Pass/Fail",
          grade: "INP",
          gradePoints: " ",
        },
        {
          class: "CHY 102",
          units: "1.00",
          grading: "Graded",
          grade: "F",
          gradePoints: " ",
        },
        {
          class: "MTH 140",
          units: "1.00",
          grading: "Graded",
          grade: "F",
          gradePoints: " ",
        },
        {
          class: "MTH 141",
          units: "1.00",
          grading: "Graded",
          grade: "F",
          gradePoints: " ",
        },
        {
          class: "PCS 211",
          units: "1.00",
          grading: "Graded",
          grade: "F",
          gradePoints: " ",
        },
      ],
    },
    "Winter-2022": {
      termGPA: "2.670",
      cumGPA: "2.830",
      academicStanding: "Clear",
      subjects: [
        {
          class: "CEN 199",
          units: "1.00",
          grading: "Pass/Fail",
          grade: "INP",
          gradePoints: " ",
        },
        {
          class: "CHY 102",
          units: "1.00",
          grading: "Graded",
          grade: "A",
          gradePoints: "4.000",
        },
        {
          class: "MTH 140",
          units: "1.00",
          grading: "Graded",
          grade: "C-",
          gradePoints: "1.670",
        },
        {
          class: "MTH 141",
          units: "1.00",
          grading: "Graded",
          grade: "C+",
          gradePoints: "2.330",
        },
      ],
    },
    "Fall-2021": {
      termGPA: "0.000",
      cumGPA: "3.330",
      academicStanding: "Probationary",
      subjects: [
        {
          class: "CEN 199",
          units: "1.00",
          grading: "Pass/Fail",
          grade: "INP",
          gradePoints: " ",
        },
        {
          class: "CHY 102",
          units: "1.00",
          grading: "Graded",
          grade: "F",
          gradePoints: " ",
        },
        {
          class: "MTH 140",
          units: "1.00",
          grading: "Graded",
          grade: "D",
          gradePoints: "1.000",
        },
      ],
    },
  };
  console.log(data[sem]);
  return (
    <div>
      <GradesTable data={data[sem]} />
    </div>
  );
};

export default ViewGrades;
