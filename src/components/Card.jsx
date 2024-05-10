import React from "react";

const Card = ({ feature }) => {
  const { title, description, svg, img } = feature && feature;
  return (
    <div className="flex justify-center items-center flex-col  bg-gray-50 rounded-lg shadow  mx-2 dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <div className="relative w-full h-[240px] overflow-hidden">
        <div className="flex justify-center items-center mb-4 w-14 h-14 rounded-full bg-primary-100 lg:h-16 lg:w-16 dark:bg-primary-900 absolute top-0 bottom-0 left-0 right-0 m-auto">
          {svg}
        </div>
        <img src={img} alt="" className="m-auto" />
      </div>

      <div className="pt-2 h-14 flex justify-center items-center  w-full ">
        <h3 className="sm:text-wrap hover:text-clip   hover:text-wrap truncate m-auto text-xl font-bold dark:text-white text-center justify-center">
          {title}
        </h3>
      </div>
      <div className="pt-4 h-32 flex">
        <p className=" text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Card;
