import React from 'react';
import SidebarItem from './SidebarItem';
import PSm from './paragraphs/P_Sm';
const Sidebar = ({ isOpen, toggle, sidebarData }) => {
  
  
    return (
      <div className={`${isOpen ? 'block' : 'hidden'} w-64   h-full border-r`}>
        {sidebarData && sidebarData.map((item, index) => (
          <SidebarItem key={index} link={item.link}>
           <div className='flex gap-x-2 justify-start items-center'>
            <img src={item.img} className='w-8 h-8' alt="" />
           <PSm>{item.heading}</PSm> 
            </div>
          </SidebarItem>
        ))}
      </div>
    );
  };


// const App = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar isOpen={isSidebarOpen} toggle={setSidebarOpen}  />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <header className="flex justify-between items-center p-4 border-b">
//           <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
//             {isSidebarOpen ? 'Close' : 'Open'} Sidebar
//           </button>
//         </header>
//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-color2">
//           {/* Account Summary and Details Here */}
//         </main>
//       </div>
//     </div>
//   );
// };

export default Sidebar;
