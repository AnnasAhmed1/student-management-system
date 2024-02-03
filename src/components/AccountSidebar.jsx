import React from 'react';
import SidebarItem from './SidebarItem';
import PSm from './paragraphs/P_Sm';
import balance from '../assets/account_balance.png'
const AccountSidebar = ({ isOpen, sidebarData }) => {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} w-64 h-[100vh] border-r`}>
      {sidebarData && sidebarData.length > 0 && (
        <>
          {/* Render the first item separately */}
          <SidebarItem link={sidebarData[0].link}>
            <div className='flex justify-start gap-x-2 items-center'>
              <img src={sidebarData[0].img} className='w-8 h-8' alt='' />
              <PSm>{sidebarData[0].heading}</PSm>
            </div>
          </SidebarItem>
            <SidebarItem>
            <div className='flex justify-start gap-x-2 items-center'>
                <img src={balance} className='w-8 h-8' alt="" />
                <div>
                    <PSm>Account Balance</PSm>
                    <PSm>
                        <span className='font-medium '>Credit  <span className='text-textcol2 px-2'> -300</span> <br /> Balance
                        </span ></PSm>
                </div>
                </div>
            </SidebarItem>
          {/* Map the rest of <t></t>he items */}
          {sidebarData.slice(1).map((item, index) => (
            <SidebarItem key={index} link={item.link}>
              <div className='flex gap-x-2 justify-start items-center'>
                <img src={item.img} className='w-8 h-8' alt='' />
                <PSm>{item.heading}</PSm>
              </div>
            </SidebarItem>
          ))}
        </>
      )}
    </div>
  );
};

export default AccountSidebar;
