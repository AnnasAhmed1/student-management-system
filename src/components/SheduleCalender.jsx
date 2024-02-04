import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyScheduleCalendar = () => {
  // const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });
  let today = new Date().getDate();
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  let currentDay = new Date().getDay();
  let currentDate = new Date().getDate() - currentDay;

  const [events, setEvents] = useState([
    {
      title: "MTH240 Lecture",
      start: new Date(currentYear, currentMonth, currentDate + 1, 8, 0),
      end: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
    },
    {
      title: "CPS188 Lecture",
      start: new Date(currentYear, currentMonth, currentDate + 1, 10, 0),
      end: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
    },
    {
      title: "PCS125 Lab/Tutorial",
      start: new Date(currentYear, currentMonth, currentDate + 1, 12, 0),
      end: new Date(currentYear, currentMonth, currentDate + 1, 14, 0),
    },
    {
      title: "CPS188 Lab",
      start: new Date(currentYear, currentMonth, currentDate + 1, 14, 0),
      end: new Date(currentYear, currentMonth, currentDate + 1, 16, 0),
    },
    {
      title: "MTH240 Lecture",
      start: new Date(currentYear, currentMonth, currentDate + 2, 8, 0),
      end: new Date(currentYear, currentMonth, currentDate + 2, 10, 0),
    },
    {
      title: "ELE202 Lecture",
      start: new Date(currentYear, currentMonth, currentDate + 2, 10, 0),
      end: new Date(currentYear, currentMonth, currentDate + 2, 12, 0),
    },
    {
      title: "MTH240 Lab",
      start: new Date(currentYear, currentMonth, currentDate + 2, 12, 0),
      end: new Date(currentYear, currentMonth, currentDate + 2, 13, 0),
    },
    {
      title: "FRE101 Lecture",
      start: new Date(currentYear, currentMonth, currentDate + 2, 18, 0),
      end: new Date(currentYear, currentMonth, currentDate + 2, 21, 0),
    },
    {
      title: "PCS125 Lecture",
      start: new Date(currentYear, currentMonth, currentDate + 3, 11, 0),
      end: new Date(currentYear, currentMonth, currentDate + 3, 12, 0),
    },
    {
      title: "CPS188 Lecture",
      start: new Date(currentYear, currentMonth, currentDate + 3, 14, 0),
      end: new Date(currentYear, currentMonth, currentDate + 3, 16, 0),
    },
    {
      title: "PCS125 Lecture",
      start: new Date(currentYear, currentMonth, currentDate + 4, 8, 0),
      end: new Date(currentYear, currentMonth, currentDate + 4, 10, 0),
    },
    {
      title: "CPS188 Lecture",
      start: new Date(currentYear, currentMonth, currentDate + 4, 10, 0),
      end: new Date(currentYear, currentMonth, currentDate + 4, 12, 0),
    },
    {
      title: "ELE202 Lab/Tutorial",
      start: new Date(currentYear, currentMonth, currentDate + 4, 15, 0),
      end: new Date(currentYear, currentMonth, currentDate + 4, 18, 0),
    },
  ]);

  // State to hold the calendar's date range
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date(moment().endOf("week")));

  // Function to refresh the calendar, which could fetch new events and reset state
  const refreshCalendar = () => {
    // Fetch new events and update state
    // setEvents(fetchedEvents);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    return {
      style: {
        backgroundColor: "rgb(60, 207, 60)", // Background color
        color: "black", // Text color
        borderRadius: "0px", // Optional: Adjust border radius
        border: "1px solid #ccc", // Optional: Add border
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        // margin:"auto",
        // paddingTop:"100%"
      },
    };
  };

  const handleAddEvent = () => {
    // if (newEvent.title && newEvent.start && newEvent.end) {
    //   setEvents([
    //     ...events,
    //     {
    //       title: newEvent.title,
    //       start: new Date(newEvent.start),
    //       end: new Date(newEvent.end),
    //     },
    //   ]);
    //   setNewEvent({ title: "", start: "", end: "" }); // Reset the form
    // }
  };

  return (
    <div>
      {/* <div className="mb-4 flex gap-4">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleInputChange}
        />
        <input
          type="datetime-local"
          name="start"
          placeholder="Start Date and Time"
          value={newEvent.start}
          onChange={handleInputChange}
        />
        <input
          type="datetime-local"
          name="end"
          placeholder="End Date and Time"
          value={newEvent.end}
          onChange={handleInputChange}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div> */}

      <div className="mb-4 flex gap-4 justify-between border-2 py-6 px-6">
        <div className="flex gap-2 items-center">
          <label
            htmlFor="week"
            onClick={() => setStart(moment().startOf("week").toDate())}
          >
            Show Week Of
          </label>
          <input
            id="week"
            type="date"
            name="start"
            placeholder="Start Date and Time"
            value={newEvent.start}
            onChange={handleInputChange}
            className="border px-2 border-gray-400"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="start_time">End Time</label>
          <input
            id="start_time"
            type="time"
            value={moment(start).format("HH:mm")}
            onChange={(e) =>
              setStart(
                moment(start)
                  .hour(e.target.value.split(":")[0])
                  .minute(e.target.value.split(":")[1])
                  .toDate()
              )
            }
            className="border px-2 border-gray-400"
          />
        </div>
        <div className="flex gap-2 items-center">
          <label htmlFor="end_time">End Time</label>
          <input
            id="end_time"
            type="time"
            value={moment(end).format("HH:mm")}
            onChange={(e) =>
              setEnd(
                moment(end)
                  .hour(e.target.value.split(":")[0])
                  .minute(e.target.value.split(":")[1])
                  .toDate()
              )
            }
            className="border px-2 border-gray-400"
          />
        </div>
        <button
          className="bg-blue-500 text-white px-12"
          onClick={refreshCalendar}
        >
          Refresh Calendar
        </button>
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
        eventPropGetter={eventStyleGetter}
        views={["week"]}
        min={new Date(0, 0, 0, 8, 0, 0)} // 8.00 AM
        max={new Date(0, 0, 0, 21, 0, 0)} // 9.00 PM
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default MyScheduleCalendar;
