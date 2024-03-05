import React from 'react';
import Table from './Table';

const Booking = () => {
  const bookedEvents = [
    {
      eventType: 'Birthday',
      venue: 'Party Hall 1',
      eventDate: '2024-03-15',
      participants: 20,
      totalAmount: 1500,
      status: 'scheduled', // Add the status for each event
    },
    {
      eventType: 'Marriage',
      venue: 'Garden Villa',
      eventDate: '2024-04-20',
      participants: 50,
      totalAmount: 3500,
      status: 'completed',
    },
    {
      eventType: 'Corporate',
      venue: 'Conference Center',
      eventDate: '2024-05-10',
      participants: 100,
      totalAmount: 5000,
      status: 'cancelled',
    },
    // Add more booked events as needed
  ];

  return (
    <div className="container mx-auto mt-8 p-6">
      <Table events={bookedEvents} />
    </div>
  );
};

export default Booking;
