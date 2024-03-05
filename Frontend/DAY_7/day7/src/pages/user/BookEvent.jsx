// BookEvent.jsx

import React, { useState } from 'react';
import Payment from './Payment';

const BookEvent = ({ eventType }) => {
  const [venue, setVenue] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [participants, setParticipants] = useState('');
  const [selectedEventType, setSelectedEventType] = useState('');
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [isPaymentConfirmed, setPaymentConfirmed] = useState(false);
  const [serviceAmount, setServiceAmount] = useState(0);
  const [advanceAmount, setAdvanceAmount] = useState(0);

  const calculateServiceAmount = () => {
    // Rough calculation for service amount based on participants and event type
    const baseAmount = 500; // You can set a base amount
    const participantsAmount = participants * 10; // Adjust the multiplier based on your pricing
    const eventTypeAmount = eventType === 'Birthday' ? 100 : eventType === 'Marriage' ? 200 : 150; // Adjust amounts based on your pricing
    const totalAmount = baseAmount + participantsAmount * eventTypeAmount;
    const advancePercentage = 0.2; // 20% advance payment
    const advance = totalAmount * advancePercentage;
    setServiceAmount(totalAmount);
    setAdvanceAmount(advance);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateServiceAmount();
    setFormSubmitted(true);
  };

  const handleConfirmPayment = () => {
    // In a real scenario, you would integrate a payment processing library and handle the transaction securely on the server side.
    // Here, we'll simulate a successful payment after 2 seconds.
    setTimeout(() => {
      setPaymentConfirmed(true);
    }, 2000);
  };

  return (
    <div className="container mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Book {eventType} Event</h2>
      {isFormSubmitted && !isPaymentConfirmed && (
        <>
          <div className="mb-4">
            <p className="font-semibold">Booking Details:</p>
            <p>Event Type: {eventType}</p>
            <p>Event Venue: {venue}</p>
            <p>Event Date: {eventDate}</p>
            <p>Number of Participants: {participants}</p>
            <p className="font-semibold mt-4">Estimated Amount: Rs.{serviceAmount}</p>
            <p className="font-semibold text-red-600">Advance Payment (20%): Rs.{advanceAmount}</p>
          </div>
          <div className="mb-4">
            <button
              onClick={handleConfirmPayment}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full"
            >
              Confirm Advance Payment
            </button>
          </div>
        </>
      )}
      {isPaymentConfirmed && (
        <Payment amount={advanceAmount} />
      )}
      {!isFormSubmitted && (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="venue" className="block text-sm font-semibold text-gray-600">
              Select Event Venue
            </label>
            <input
              type="text"
              id="venue"
              name="venue"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              className="form-input mt-1 block w-full rounded-md border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="eventDate" className="block text-sm font-semibold text-gray-600">
              Select Event Date
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="form-input mt-1 block w-full rounded-md border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="participants" className="block text-sm font-semibold text-gray-600">
              Number of Participants
            </label>
            <input
              type="number"
              id="participants"
              name="participants"
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
              className="form-input mt-1 block w-full rounded-md border-gray-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="eventType" className="block text-sm font-semibold text-gray-600">
              Type of Event
            </label>
            <select
              id="eventType"
              name="eventType"
              value={selectedEventType}
              onChange={(e) => setSelectedEventType(e.target.value)}
              className="form-select mt-1 block w-full rounded-md border-gray-300"
            >
              <option value="" disabled>Select event type</option>
              <option value="Birthday">Birthday</option>
              <option value="Marriage">Marriage</option>
              <option value="Corporate">Corporate</option>
              <option value="Custom">Custom</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Make Payment
          </button>
        </form>
      )}
    </div>
  );
};

export default BookEvent;
