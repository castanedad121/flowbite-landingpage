import React from "react";
import logo from "../assets/logo-conectate.svg";

const Footer = (props) => {
  const { theme } = props && props;
  const logoLigth =
    "https://res.cloudinary.com/desaac6ma/image/upload/v1713800000/samples/Conectados%20al%20futuro/logoLight_rpbhd8.png";
  const logoDark =
    "https://res.cloudinary.com/desaac6ma/image/upload/v1713799197/samples/Conectados%20al%20futuro/logoDark_rajdst.png";
  return (
    <>
      <footer className="p-4 bg-gray-100 md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <a
            href="/"
            className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            {theme === "light" ? (
              <img src={logoLigth} alt="" className="size-64" />
            ) : (
              <img src={logoDark} alt="" className="size-64" />
            )}
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            Transformando empresas, construyendo el futuro.
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a
                href="/"
                className="mr-4 hover:underline md:mr-6"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a href="#features" className="mr-4 hover:underline md:mr-6">
                Servicios
              </a>
            </li>
            <li>
              <a href="#products" className="mr-4 hover:underline md:mr-6">
                Productos
              </a>
            </li>
            <li>
              <a href="#company" className="mr-4 hover:underline md:mr-6">
                Acerca de Nosotros
              </a>
            </li>
            <li>
              <a href="#team" className="mr-4 hover:underline md:mr-6">
                Nuestro Equipo
              </a>
            </li>
            <li>
              <a href="#customer" className="mr-4 hover:underline md:mr-6">
                Clientes
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
