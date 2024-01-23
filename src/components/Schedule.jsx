import React from 'react';

import PSm from './paragraphs/P_Sm';
import ScheduleCalendar from './SheduleCalender';
// const hours = [
//   '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
//   '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
//   '7:00 PM', '8:00 PM'
// ];

// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Schedule = () => {
  return (
    <div className='max-w-6xl'>
      {/* Schedule Header */}
      <div className="flex justify-between items-center mb-4">
        <button className="px-8 py-2 border border-color3 text-color3 hover:bg-color3 hover:text-color2 rounded-lg">Previous Week</button>
        <div>Week of 1/15/2024 - 1/21/2024</div>
        <button className="px-8 py-2 border border-color3 text-color3 hover:bg-color3 hover:text-color2 rounded-lg">Next Week</button>
      </div>

      {/* Time Slots Table */}
      <div className='my-8'>
     <ScheduleCalendar/></div> 

      {/* Display Options */ }
      <PSm  styles={'text-textcol2'}>Display Options</PSm>
      <div className="mt-4 max-w-4xl border gap-8 grid grid-cols-4">
        <label>
          <input type="checkbox" />
          Show AM/PM
        </label>
        <label>
          <input type="checkbox" />
          Show AM/PM
        </label>
        <label>
          <input type="checkbox" />
          Show AM/PM
        </label>
        <label>
          <input type="checkbox" />
          Show AM/PM
        </label>
        <label>
          <input type="checkbox" />
          Show AM/PM
        </label>
        <label>
          <input type="checkbox" />
          Show AM/PM
        </label>
        <label>
          <input type="checkbox" />
          Show AM/PM
        </label>
        <label>
          <input type="checkbox" />
          Show AM/PM
        </label>
        <label>
          <input type="checkbox" />
          Show AM/PM
        </label>
        <label>
          <input type="checkbox" />
          Show AM/PM
        </label>
        <label>
          <input type="checkbox" />
          Show AM/PM
        </label>
        
        <button className="px-8 py-2 border border-color3 text-color3 hover:bg-color3 hover:text-color2 rounded-lg">Refresh Calendar</button>
      </div>
    </div>
  );
};

export default Schedule;
