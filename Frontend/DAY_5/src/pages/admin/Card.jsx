import React from 'react';

const Card = ({ eventData }) => {
  const { image, title, description } = eventData;

  return (
    <div className="max-w-sm mx-4 my-4 bg-white shadow-md rounded-md overflow-hidden transition duration-300 transform hover:scale-105 hover:bg-yellow-400">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <a
          href="/"
          target="_self"
          rel="noopener noreferrer"
          className="mt-3 block text-sm font-medium text-blue-600 hover:underline"
        >
          Edit Event Info
        </a>
      </div>
    </div>
  );
};

export default Card;
