
    import React, { useState } from 'react';
    import DataTable from 'react-data-table-component';
import H2 from '../../components/headings/H2';
import H3 from '../../components/headings/H3';
    
    const ContactForm = () => {
     const [emails, setEmails] = useState([
            { email: 'email1@example.com', type: 'University' },
            { email: 'email2@example.com', type: 'Business' },
          ]);
        
          const [phones, setPhones] = useState([
            { phone: '123-456-7890', type: 'University' },
            { phone: '987-654-3210', type: 'Business' },
          ]);
        
          const [newEmail, setNewEmail] = useState('');
          const [newPhone, setNewPhone] = useState('');
        
          const addEmail = () => {
            if (newEmail) {
              setEmails([...emails, { email: newEmail, type: 'University' }]);
              setNewEmail('');
            }
          };
        
          const addPhone = () => {
            if (newPhone) {
              setPhones([...phones, { phone: newPhone, type: 'Business' }]);
              setNewPhone('');
            }
          };
    
      const emailColumns = [
        {
          name: 'Email',
          selector: row => row.email,
        },
        {
          name: 'Type',
          selector: row => row.type,
        },
        {
          name: 'Preferred',
          cell: () => <div>✔️</div>,
        },
      ];
    
      const phoneColumns = [
        {
          name: 'Phone',
          selector: row => row.phone,
        },
        {
          name: 'Type',
          selector: row => row.type,
        },
        {
          name: 'Preferred',
          cell: () => <div>✔️</div>,
        },
      ];
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
        
            textAlign: 'center',
        
          },
        },
      };
      
    
    //   const addEmail = () => {
    //     if (newEmail) {
    //       setEmails([...emails, { email: newEmail, type: 'University' }]); // Default type can be changed
    //       setNewEmail('');
    //     }
    //   };
    
    //   const addPhone = () => {
    //     if (newPhone) {
    //       setPhones([...phones, { phone: newPhone, type: 'Business' }]); // Default type can be changed
    //       setNewPhone('');
    //     }
    //   };
    
      return (
        <div className="p-5">
          <H2 className="text-2xl font-semibold mb-5">Contact Details</H2>
          
          {/* Email section */}
          <div className="mb-5 border pt-2">
            <H3 className="text-xl mb-3">Email</H3>
            <div className="flex  mb-2">
            <button onClick={addEmail} className="border px-4 p-2">+</button>
              <input
                type="email"
                placeholder="Add new email"
                className="border  p-2 w-full"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              
            </div>
            <DataTable
              columns={emailColumns}
              data={emails}
              customStyles={customStyles}
              dense
              highlightOnHover
            />
          </div>
    
          {/* Phone section */}
          <div className="mb-5 border pt-2">
            <H3 className="text-xl mb-3">Phone</H3>
            <div className="flex  mb-2">
            <button onClick={addPhone} className="border px-4 p-1">+</button>
              <input
                type="tel"
                placeholder="Add new phone"
                className="border p-2 w-full"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
              />
              
            </div>
            <DataTable
              columns={phoneColumns}
              data={phones}
              customStyles={customStyles}
              dense
              highlightOnHover
            />
          </div>
        </div>
      );
    };
    
    export default ContactForm;
    
