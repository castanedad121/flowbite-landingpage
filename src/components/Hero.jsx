import React from "react";
import { SliderHero } from "../components/index";

const Hero = () => {
  return (
    <>
      <section className=" bg-white dark:bg-gray-900 pt-20 md:pt-28 pb-3 ">
        <div className="  px-4 mx-auto max-w-screen-xl  lg:px-6    ">
          <div className="flex justify-center w-full gap-4 flex-wrap-reverse md:flex-nowrap ">
            <div className="flex flex-col w-1/2">
              <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none  lg:text-6xl dark:text-white animate-fade-down animate-duration-[3000ms]">
                Innovación para tu empresa
              </h1>
              <p className="mb-6 text-xl text-gray-500 lg:mb-8 lg:text-xl dark:text-gray-400 animate-fade-up animate-duration-[3000ms]">
                Optimiza procesos contables y administrativos con soluciones
                innovadoras y atención personalizada.
              </p>
              <div className="animate-fade-right animate-delay-1000">
                <a
                  href="#products"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Productos
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Servicios
                </a>
              </div>
            </div>

            <div className="flex lg:w-1/2 justify-center items-center relative">
              <img
                src="https://res.cloudinary.com/desaac6ma/image/upload/v1715047629/samples/Conectados%20al%20futuro/laptop_jyz3he.png"
                alt="mockup"
                className=" drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]  dark:drop-shadow-[0_35px_35px_rgba(0,192,243,0.25)] w-80 md:w-96 animate-fade-up animate-duration-[3000ms] "
              />
              <div className="absolute h-[200px] w-[300px] top-0 md:top-3">
                <SliderHero />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
