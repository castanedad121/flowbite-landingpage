import React, { useState, useEffect } from "react";
import logo from "../assets/logo-conectate.svg";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";

const Header = (props) => {
  const logoLigth =
    "https://res.cloudinary.com/desaac6ma/image/upload/v1714528055/samples/Conectados%20al%20futuro/CF-LogoP-Ligth_ru2sdq.png";
  const logoDark =
    "https://res.cloudinary.com/desaac6ma/image/upload/v1714528673/samples/Conectados%20al%20futuro/CF-LogoPq-Dark_beeapw.png";

  const {
    theme,
    handleDarkMode,
    isHome,
    isFeatures,
    isProducts,
    isCompany,
    isTeam,
    isCustomer,
    showContact,
  } = props && props;
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (theme === "light" || !theme) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  return (
    <>
      <header>
        <nav
          className={
            showContact
              ? "w-full  bg-gray-200 py-1 px-4 lg:px-6 lg:py-2.5 dark:bg-gray-800"
              : "fixed z-[999999] w-full  bg-gray-200 py-1 px-4 lg:px-6 lg:py-2.5 dark:bg-gray-800"
          }
        >
          <div className="flex justify-center lg:justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <img
                src={theme === "light" ? logoLigth : logoDark}
                className="mr-3 h-11"
                alt="Conectate al futuro Logo"
              />
              <span className="hidden lg:block self-center text-2xl font-bold whitespace-nowrap dark:text-white">
                <span className="text-base font-normal text-[#9C0505]">
                  {" "}
                  CONECTADOS AL{" "}
                </span>{" "}
                FUTURO
              </span>
            </a>
            <div className="flex w-full pt-2 sm:pt-0 sm:w-auto justify-end  lg:order-2">
              {theme === "light" ? (
                <button
                  className="text-gray-800 dark:text-white hover:bg-sky-300  font-medium rounded-lg text-2xl lg:text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 "
                  onClick={handleDarkMode}
                >
                  <FaMoon />
                </button>
              ) : (
                <button
                  className="text-gray-800 dark:text-white hover:bg-gray-50 font-medium rounded-lg text-2xl lg:text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700"
                  onClick={handleDarkMode}
                >
                  <FaSun />
                </button>
              )}

              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="text-gray-800 dark:text-white hover:bg-sky-300  font-medium rounded-lg text-2xl lg:text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 lg:hidden"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={() => setMenu(!menu)}
              >
                {menu ? <CgClose className="text-3xl" /> : <FaBars />}
              </button>
              {menu && (
                <div
                  className="justify-center items-center w-full "
                  id="mobile-menu-2"
                >
                  <ul className="flex flex-col mt-1 font-medium ">
                    <li>
                      <a
                        href="/"
                        className={
                          isHome
                            ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                            : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                        }
                        aria-current="page"
                        onClick={() => setMenu(!menu)}
                      >
                        Inicio
                      </a>
                    </li>
                    <li>
                      <a
                        href="#features"
                        className={
                          isFeatures
                            ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                            : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                        }
                        onClick={() => setMenu(!menu)}
                      >
                        Servicios
                      </a>
                    </li>
                    <li>
                      <a
                        href="#products"
                        className={
                          isProducts
                            ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                            : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                        }
                        onClick={() => setMenu(!menu)}
                      >
                        Productos
                      </a>
                    </li>
                    <li>
                      <a
                        href="#company"
                        className={
                          isCompany
                            ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                            : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                        }
                        onClick={() => setMenu(!menu)}
                      >
                        Acerca de Nosotros
                      </a>
                    </li>
                    <li>
                      <a
                        href="#team"
                        className={
                          isTeam
                            ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                            : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                        }
                        onClick={() => setMenu(!menu)}
                      >
                        Nuestro Equipo
                      </a>
                    </li>
                    <li>
                      <a
                        href="#customer"
                        className={
                          isCustomer
                            ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                            : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                        }
                        onClick={() => setMenu(!menu)}
                      >
                        Clientes
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    href="/"
                    className={
                      isHome
                        ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                        : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    }
                    aria-current="page"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className={
                      isFeatures
                        ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                        : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    }
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className={
                      isProducts
                        ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                        : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    }
                  >
                    Productos
                  </a>
                </li>
                <li>
                  <a
                    href="#company"
                    className={
                      isCompany
                        ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                        : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    }
                  >
                    Acerca de Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className={
                      isTeam
                        ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                        : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    }
                  >
                    Nuestro Equipo
                  </a>
                </li>
                <li>
                  <a
                    href="#customer"
                    className={
                      isCustomer
                        ? "block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                        : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    }
                  >
                    Clientes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
