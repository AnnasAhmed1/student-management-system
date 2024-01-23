import academic from "../../assets/academics.png";
import classes from "../../assets/manage_classes.png";
import Studentcenter from "../../assets/student_center.svg";
import financial1 from "../../assets/financial_account.png";
import communication from "../../assets/communication.png";
import profile from "../../assets/profile.jpeg";
import financial2 from "../../assets/financial_aid.png";
import task from "../../assets/caution.jpeg";
import eform from "../../assets/eForm.png";
export const cardsData = [
  {
    link: "/",
    heading: "Student Center",
    img: Studentcenter,
    style: "h-24 w-24",
  },
  {
    link: "/academic/",
    heading: "Academic Records",
    img: academic,
    style: "h-24 w-24",
  },
  {
    link: "/class",
    heading: "Manage Classes",
    img: classes,
    style: "h-32 w-32",
  },
  {
    link: "/account/",
    heading: "Financial Account",
    img: financial1,
    style: "h-24 w-24",
  },
  {
    link: "/communication",
    heading: "My Communications",
    img: communication,
    style: "h-24 w-24",
    notification: "2 unread communications",
  },
  {
    link: "/profile/",
    heading: "Profile",
    img: profile,
    style: "h-32 w-32",
  },
  {
    link: "/",
    heading: "Financial Aid",
    img: financial2,
    style: "h-24 w-24",
  },
  {
    link: "/",
    heading: "Tasks",
    img: task,
    style: "h-24 w-24",
    notification: "No current tasks",
  },
  {
    link: "/",
    heading: "eforms center",

    img: eform,
    style: "h-36 w-36",
  },
];
