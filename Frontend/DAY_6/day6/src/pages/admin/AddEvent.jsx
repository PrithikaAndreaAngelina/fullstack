import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddEvent = () => {
  const navigate = useNavigate();
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [logoFile, setLogoFile] = useState(null);

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleEventDescriptionChange = (e) => {
    setEventDescription(e.target.value);
  };

  const handleLogoUpload = (e) => {
    // Assuming single file upload, you can modify for multiple files if needed
    const file = e.target.files[0];
    setLogoFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Process the form data, e.g., send it to a server
    console.log('Event Name:', eventName);
    console.log('Event Description:', eventDescription);
    console.log('Logo File:', logoFile);
     alert("Event SuccessFully Added");
    navigate("/admin/home");
    // Reset the form fields
    setEventName('');
    setEventDescription('');
    setLogoFile(null);
  };

  return (
    <div className="container mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="eventName" className="block text-sm font-semibold text-gray-600">
            Event Name
          </label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={eventName}
            onChange={handleEventNameChange}
            className="form-input mt-1 block w-full rounded-md border-gray-300"
            placeholder="Enter event name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="eventDescription" className="block text-sm font-semibold text-gray-600">
            Event Description
          </label>
          <textarea
            id="eventDescription"
            name="eventDescription"
            value={eventDescription}
            onChange={handleEventDescriptionChange}
            className="form-textarea mt-1 block w-full rounded-md border-gray-300"
            rows="4"
            placeholder="Enter event description"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="logo" className="block text-sm font-semibold text-gray-600">
            Upload Logo
          </label>
          <input
            type="file"
            id="logo"
            name="logo"
            accept="image/*"
            onChange={handleLogoUpload}
            className="form-input mt-1 block w-full rounded-md border-gray-300"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
