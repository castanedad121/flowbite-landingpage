import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Slider() {
  const slides = [
    {
      url: "https://cdn.hswstatic.com/gif/operating-systems-1.jpg",
    },
    {
      url: "https://isil.pe/wp-content/uploads/2017/08/sistemas-de-informacion.jpg",
    },
    {
      url: "https://pcfixercomputerrepairs.co.uk/wp-content/uploads/2023/10/AdobeStock_635926259-scaled.jpeg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(true);

  let timer;
  const runTimer = () => {
    timer = window.setTimeout(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 8000);
  };

  if (active) {
    runTimer();
  }

  const prevSlide = () => {
    clearInterval(timer);
    setActive(false);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    clearInterval(timer);
    setActive(false);
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    clearInterval(timer);
    setActive(false);
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full h-[600px] m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled
              className={`${
                currentIndex == slideIndex
                  ? "text-primary-600 dark:text-primary-600 scale-125"
                  : "text-black dark:text-white"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
