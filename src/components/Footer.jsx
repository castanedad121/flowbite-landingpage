import { MdLocalPhone } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";

const Footer = (props) => {
  const { theme } = props && props;
  const logoLigth =
    "https://res.cloudinary.com/desaac6ma/image/upload/v1714528059/samples/Conectados%20al%20futuro/CF-Logo-Ligth_naecyq.png";
  const logoDark =
    "https://res.cloudinary.com/desaac6ma/image/upload/v1714528518/samples/Conectados%20al%20futuro/Dise%C3%B1o_sin_t%C3%ADtulo-removebg-preview_cdf4mf.png";
  return (
    <>
      <footer className="p-4 bg-gray-100 md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <a
            href="/"
            className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            {theme === "light" ? (
              <img src={logoLigth} alt="" className="w-64" />
            ) : (
              <img src={logoDark} alt="" className="w-64" />
            )}
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            Siempre conectándote al futuro.
          </p>
          <div className="flex w-full justify-center">
            <div className=" flex w-full lg:w-1/2 py-4 gap-4 justify-center flex-col md:flex-row  text-gray-900 items-center  my-4">
              <div className="flex gap-2 justify-center items-center md:w-1/2 ">
                <div className="flex justify-center ">
                  <MdAlternateEmail className="size-8 dark:text-gray-300" />
                </div>
                <div className="flex w-52 flex-col justify-center items-center flex-grow md:flex-grow-0">
                  <h1 className="text-center w-full font-medium text-sm dark:text-white">
                    Correos
                  </h1>
                  <div className="flex w-full flex-col text-xs font-light text-slate-900 dark:text-slate-200 justify-center items-center">
                    <span>venta@conectatealfuturo.com</span>
                    <span>soporte@conectatealfuturo.com</span>
                    <span>cobranza@conectatealfuturo.com</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center md:w-1/2 ">
                <div className="flex justify-center  ">
                  <MdLocalPhone className="size-8 dark:text-gray-300" />
                </div>
                <div className="flex w-52  flex-col justify-center items-center flex-grow md:flex-grow-0">
                  <h1 className="text-center text-nowrap font-medium text-sm dark:text-white">
                    Números de Contacto{" "}
                  </h1>
                  <div className="flex flex-col text-xs  font-light text-slate-900 dark:text-slate-200">
                    <span>+55 1882 5986</span>
                    <span>+55 8118 0495</span>
                    <span>+55 6205 8956</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="flex w-full  flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
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
