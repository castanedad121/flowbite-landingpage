import React, { useEffect, useState } from "react";
import { Header, Footer } from "../components/index";
import { useNavigate } from "react-router-dom";
import { IoReturnUpBackSharp } from "react-icons/io5";
const Thanks = () => {
  const Navigate = useNavigate();
  const [count, setCount] = useState(30);
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("darkMode"))
      ? JSON.parse(localStorage.getItem("darkMode"))
      : "light"
  );
  const handleDarkMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("darkMode", JSON.stringify(newTheme));
  };
  useEffect(() => {
    if (theme === "light" || !theme) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  setTimeout(() => {
    setCount(count - 1);
    if (count === 0) {
      Navigate("/");
    }
  }, 1000);
  return (
    <>
      <Header theme={theme} handleDarkMode={handleDarkMode} />
      <section className="bg-white dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center pt-24 lg:pt-44 lg:pb-20 text-center">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none  dark:text-white">
            ¡Gracias por contactarnos!
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Hemos recibido tu mensaje, nos pondremos en contacto a la brevedad.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            {`Inicio (${count})`}

            <IoReturnUpBackSharp className="w-5 h-5 ml-2 -mr-1" />
          </a>
        </div>
      </section>
      <Footer theme={theme} />
    </>
  );
};

export default Thanks;
