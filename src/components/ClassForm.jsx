import React, { useState } from 'react';
import H3 from './headings/H3';
import PSm from './paragraphs/P_Sm';
const ClassForm = () => {
  const [courseNumber, setCourseNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [term, setTerm] = useState('');
  const [showOpenClassesOnly, setShowOpenClassesOnly] = useState(false);
  const [openEntryExitClassesOnly, setOpenEntryExitClassesOnly] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    // Implement your search logic here
    console.log({
      courseNumber,
      subject,
      term,
      showOpenClassesOnly,
      openEntryExitClassesOnly,
    });
  };

  const handleClear = () => {
    setCourseNumber('');
    setSubject('');
    setTerm('');
    setShowOpenClassesOnly(false);
    setOpenEntryExitClassesOnly(false);
  };

  return (
    <div className="container mx-auto ">
      <H3 className="text-xl font-bold mb-4">Enter Search Criteria</H3>
      <br /><br />
      <form className='max-w-3xl w-full block ' onSubmit={handleSearch}>
        <div className="mb-4 mx-auto">
          <label htmlFor="term" className="   flex gap-2  items-center text-sm  mb-2"><PSm>Term</PSm>
          <select
            id="term"
            className="shadow border max-w-xs py-1 w-1/2 rounded "
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          >
            <option value="">Select term</option>
            {/* Populate with actual terms */}
            <option value="spring">Spring 2024</option>
            <option value="fall">Fall 2024</option>
          </select>
          </label>
          <PSm>Select atleast 2 search criteria Select search to view your search results.</PSm>
        </div>
        <div>
          <PSm>Class Search</PSm>
          <button
            className=" hover:bg-color3 my-4 text-color3 hover:text-white border border-color3 py-2 px-4 rounded"
            type="submit"
          >
            select subject
          </button>
          <div className="mb-4 mx-auto flex flex-col ">
          <label htmlFor="term" className="   flex gap-2  items-center text-sm  mb-2"><PSm>Course</PSm>
          <select
            id="term"
            className="shadow border max-w-xs py-1 w-1/2 rounded "
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          >
            <option value="">Select Course</option>
            {/* Populate with actual terms */}
            <option value="spring">is exactly</option>
            <option value="fall">less than equal to</option>
          </select>
          <input className='shadow border  py-1 w-[24] rounded'  type="text" />
          </label>
          <div className='flex gap-x-2'> 
          <select
            id="term"
            className="shadow border max-w-xs text-sm  w-1/2 rounded "
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          >
            <option value="">Select </option>
            {/* Populate with actual terms */}
            <option value="spring">Graduate</option>
            <option value="fall">Studying</option>
          </select><input className='shadow border  py-1 w-[24] text-sm rounded'  type="text" /></div>
        
        </div>
         
        </div>
        {/* <div className="mb-4">
          <label htmlFor="courseNumber" className="block text-gray-700 text-sm font-bold mb-2">Course Number</label>
          <input
            type="text"
            id="courseNumber"
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            value={courseNumber}
            onChange={(e) => setCourseNumber(e.target.value)}
            placeholder="Enter course number"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">Subject</label>
          <input
            type="text"
            id="subject"
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter subject"
          />
        </div> */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={showOpenClassesOnly}
              onChange={(e) => setShowOpenClassesOnly(e.target.checked)}
            />
            <span className="ml-2">Show Open Classes Only</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={openEntryExitClassesOnly}
              onChange={(e) => setOpenEntryExitClassesOnly(e.target.checked)}
            />
            <span className="ml-2">Open Entry/Exit Classes Only</span>
          </label>
        </div>
        <div className="flex items-center gap-4 justify-center">
          <button
            className="bg-color1 hover:bg-gray-300 text-black font-bold py-2 px-8 rounded"
            type="button"
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            className=" hover:bg-color3 my-4 text-color3 hover:text-white border border-color3 py-2 px-8 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClassForm;
