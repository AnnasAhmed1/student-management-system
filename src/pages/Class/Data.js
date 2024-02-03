
import classimg from '../../assets/calender.svg'
import search from '../../assets/search.svg'
import add from '../../assets/task-list-add.svg'
import exam from '../../assets/exam-multiple-choice.svg'
import browse from '../../assets/gui-browse-computer.svg'
import uselink from '../../assets/regional-indicator-symbol-letter-i.svg'
import cart from '../../assets/cart.png'
import swap from '../../assets/swap_arrows.png'
import week from '../../assets/weekly.svg'
import subtract from '../../assets/file-subtract.svg'
import classimg1 from '../../assets/manage_classes.png'
export const ClassSidebar = [
    {
      heading: "View My Classes",
      img: classimg1,
      link: "/class"
    },
    {
      heading: "View My Enrollment Dates",
      img: classimg,
      link: "/class/viewMyEnrollmentDates"
    },
     {
      heading: "Class Search and Enroll",
      img: search,
      link: "/class/search"
    },
  {
      heading: "Add Classes",
      img: add,
      link: "/class/addClasses"
    },
    {
      heading: "Drop Classes",
      img:subtract,
      link: "/class/classdropClasses"
    },
     {
      heading: "Swap Classes",
      img: swap,
      link: "/class/swapClasses"
    },
    {
      heading: "Enrollment Shopping Cart",
      img: cart,
      link: "/class/cart"
    },
    {
      heading: "My Weekly Schedule",
      img: week,
      link: "/class/schedule"
    },
   {
      heading: "Browse Course Catalog",
      img:browse,
      link: "/class/browseCourseCatalog"
    },
    {
      heading: "View My Exam Schedule",
      img: exam,
      link: "/class/viewMyExamSchedule"
    },
    {
      heading: "Useful Links",
      img: uselink,
      link: "/class/usefulLinks"
    }
]
  