import React from "react";

const Card = ({ feature }) => {
  const { title, description, svg } = feature && feature;
  return (
    <div className="flex justify-center items-center flex-col bg-gray-50 rounded-lg shadow p-8 mx-4 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
        {svg}
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default Card;
