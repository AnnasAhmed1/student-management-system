import React from 'react'
import DataTable from 'react-data-table-component'
import { useState } from 'react'

import H2 from '../../components/headings/H2'
import PSm from '../../components/paragraphs/P_Sm'
import PMd from '../../components/paragraphs/P_Md'
const Addresses = () => {
  const [address, setAddress] = useState([
    { Address: 'abc', From: 'Current' },
    { Address: 'efg', From: 'Current' },
  ]);
  const [newAddress, setNewAddress] = useState('');
  const addAddress = () => {
    if (newAddress) {
      setAddress([...address, { Address: newAddress, From: 'Current' }]);
      setNewAddress('');
    }
  };
  const AddressColumns = [
    {
      name: 'Address',
      selector: row => row.Address,
    },
    {
      name: 'From',
      selector: row => row.From,
    },
    
  ];
  const customStyles = {
    rows: {
      style: {
        fontSize: '14px',
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
    
        textAlign: 'center',
    
      },
    },
  };

  return (
    <div className='p-4'>
      <H2>Addresses</H2>
      <div className="mb-5  py-2 my-4 max-w-6xl">
            <PMd styles={'text-textcol1 px-2'}>Home Address</PMd>
            <div className="flex  mb-2">
            <button onClick={addAddress} className="border px-4 p-2">+</button>
              <input
                type="Address"
                placeholder="Add new Address"
                className="border  p-2 w-full"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
              />
              
            </div>
            <DataTable
              columns={AddressColumns}
              data={address}
              noHeader
              dense
              customStyles={customStyles}
              highlightOnHover
            />
          </div>
      <div className="mb-5  py-2 my-4 max-w-6xl">
            <PMd styles={'text-textcol1 px-2'}>Mailing Address</PMd>
            <div className="flex  mb-2">
            <button onClick={addAddress} className="border px-4 p-2">+</button>
              <input
                type="Address"
                placeholder="Add new Address"
                className="border  p-2 w-full"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
              />
              
            </div>
            <DataTable
              columns={AddressColumns}
              data={address}
              noHeader
              dense
              customStyles={customStyles}
              highlightOnHover
            />
          </div>
      <div className='mb-5 py-2 my-4 max-w-6xl'>
      <div className=' border-b '>
      <PMd styles={'text-textcol1 px-2'}>Business Address</PMd>
      
      </div>
      <br />
      <PSm styles={'px-2'}>No address defined</PSm>
      <br />
      <button className='border border-color3  rounded-lg hover:bg-color3 hover:text-color2 text-color3 px-8 py-2'><PSm>Add Business Address</PSm></button>
      </div>
      <div className='mb-5 py-2 my-4 max-w-6xl'>
      <div className=' border-b '>
      <PMd styles={'text-textcol1 px-2'}>Graduation Address</PMd>
      
      </div>
      <br />
      <PSm styles={'px-2'}>No address defined</PSm>
      <br />
      <button className='border border-color3  rounded-lg hover:bg-color3 hover:text-color2 text-color3 px-8 py-2'><PSm>Add Graduation Address</PSm></button>
      </div>
    </div>
  )
}

export default Addresses