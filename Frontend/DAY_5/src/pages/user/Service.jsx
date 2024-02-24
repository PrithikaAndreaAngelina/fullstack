import React from 'react'
import Card from './Card';
import marriage from '../..//assets/images/marriage.jpeg'
import corporate from '../..//assets/images/corporate.jpeg'
import custom from '../..//assets/images/custom.jpeg'
import cake from '../..//assets/images/cake.jpg'

const Service = () => {
  const eventsData = [
    {
      image: cake,
      title: 'Birthday Event',
      description: 'Celebrate the joyous occasion of the Birthday Event with friends and family. This social gathering accommodates up to 50 participants, offering a delightful experience with cake, music, and laughter. The event charges are set at $500.',
    },
    {
      image: marriage,
      title: 'Marriage Event',
      description: 'Join us in commemorating the union of two hearts at the Marriage Event. This social gathering can host up to 100 participants, providing a blend of love, joy, and unforgettable moments. The event charges stand at $1000.',
    },
    {
      image: corporate,
      title: 'Corporate Event',
      description: 'Participate in our exclusive Corporate Event designed for professionals. With a capacity for 200 participants, the event focuses on networking, presentations, and innovation. The charges for this professional gathering are set at $1500.',
    },
    {
      image: custom,
      title: 'Custom Event',
      description: 'Create a custom experience for your special event with our flexible offerings. Tailor the name, type, max participants, and charges to make your event truly unique and memorable!',
    },
    // Add more events as needed
  ];

  return (
    <>
    <h1 className="text-3xl font-bold text-center my-6">
    Elevate Your Occasion: Book Unforgettable Moments for Birthdays, Marriages, and Corporate Gatherings!
    </h1>
    <div className="flex flex-wrap justify-center">
    {eventsData.map((event, index) => (
      <Card key={index} eventData={event} />
      ))}
      </div>
      </>
  )
}

export default Service