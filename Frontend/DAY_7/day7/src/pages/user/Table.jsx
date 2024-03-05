import React from 'react';

const Table = ({ events }) => {
  return (
    <div className="container mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Booked Events</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="border bg-gray-100 p-2">Event Type</th>
              <th className="border bg-gray-100 p-2">Event Venue</th>
              <th className="border bg-gray-100 p-2">Event Date</th>
              <th className="border bg-gray-100 p-2">Participants</th>
              <th className="border bg-gray-100 p-2">Total Amount</th>
              <th className="border bg-gray-100 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="border p-2">{event.eventType}</td>
                <td className="border p-2">{event.venue}</td>
                <td className="border p-2">{event.eventDate}</td>
                <td className="border p-2">{event.participants}</td>
                <td className="border p-2">Rs. {event.totalAmount}</td>
                <td className={`border p-2 ${event.status === 'completed' ? 'text-green-500' : event.status === 'cancelled' ? 'text-red-500' : 'text-blue-500'}`}>
                  {event.status ? event.status.charAt(0).toUpperCase() + event.status.slice(1) : 'Unknown'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
