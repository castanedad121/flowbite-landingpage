import React from "react";
import logo from "../assets/logo-conectate.svg";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-gray-100 md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <a
            href="/"
            className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img src={logo} alt="" className="mr-3 h-8 w-9" />
            CONECTATE AL FUTURO
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            Open-source library of over 400+ web components and interactive
            elements built for better web.
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </li>
            <li>
              <a href="#company" className="mr-4 hover:underline md:mr-6">
                Company
              </a>
            </li>
            <li>
              <a href="#team" className="mr-4 hover:underline md:mr-6 ">
                Team
              </a>
            </li>
            <li>
              <a href="#features" className="mr-4 hover:underline md:mr-6">
                Features
              </a>
            </li>
            <li>
              <a href="#customer" className="mr-4 hover:underline md:mr-6">
                Customer
              </a>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Conéctate al Futuro
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
