import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyScheduleCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
  });

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

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.start && newEvent.end) {
      setEvents([
        ...events,
        {
          title: newEvent.title,
          start: new Date(newEvent.start),
          end: new Date(newEvent.end),
        },
      ]);
      setNewEvent({ title: "", start: "", end: "" }); // Reset the form
    }
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
        views={["week"]}
        min={new Date(0, 0, 0, 8, 0, 0)} // 8.00 AM
        max={new Date(0, 0, 0, 21, 0, 0)} // 9.00 PM
        style={{ height: "100vh" }}
      />
    </div>
  );
};

export default MyScheduleCalendar;
