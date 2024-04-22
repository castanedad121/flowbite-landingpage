import React from "react";

const ContentSection = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              ¿Quiénes somos?
            </h2>
            <p className="mb-4">
              Somos una organización preocupada en mejorar los procesos que se
              llevan a cabo en los diferentes sistemas Contables
              Administrativos, ofreciendo las mejoras alternativas y soluciones
              a algún proceso que se vea perjudicado. Así mismo brindamos la
              atención en soporte o capacitación, según tu necesidad.
            </p>
            <p>
              En <span className="font-bold">CONECADOS AL FUTURO</span> nos
              distinguimos por innovar y ofrecerte mejoras para los procesos de
              tu empresa así mismo creamos diferentes tipos de servicios
              dependiendo la necesidad de tu empresa, pensando en la
              optimización de tus procesos y obteniendo múltiples beneficios.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 ">
            <div className="overflow-hidden h-min rounded-lg shadow-lg shadow-gray-800">
              <img
                className="w-full  max-w-xs transition duration-300 ease-in-out hover:scale-110"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                alt="office content 1"
              />
            </div>
            <div className="overflow-hidden h-min rounded-lg shadow-lg shadow-gray-800 mt-4 lg:mt-10">
              <img
                className="w-full max-w-xs transition duration-300 ease-in-out hover:scale-110"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                alt="office content 2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSection;
