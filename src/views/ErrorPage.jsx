import React, { useEffect, useState } from "react";
import { Header, Footer } from "../components/index";
import { IoReturnUpBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
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
  setTimeout(() => {
    setCount(count - 1);
    if (count === 0) {
      Navigate("/");
    }
  }, 1000);
  useEffect(() => {
    if (theme === "light" || !theme) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);
  return (
    <>
      <Header theme={theme} handleDarkMode={handleDarkMode} />
      <section className="bg-white dark:bg-gray-900">
        <div className=" px-4 mx-auto max-w-screen-xl py-20 lg:py-24 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Algo falta, algo está faltando.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Lo sentimos, no podemos encontrar esa página. Encontrarás mucho
              que explorar en el pagina de inicio{" "}
            </p>
            <a
              href="/"
              className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              {`Inicio (${count})`}
              <IoReturnUpBackSharp className="w-5 h-5 ml-2 -mr-1" />
            </a>
          </div>
        </div>
      </section>
      <Footer theme={theme} />
    </>
  );
};

export default ErrorPage;
