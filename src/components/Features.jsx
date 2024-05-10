import React, { useState } from "react";
import Slider from "react-slick";
import { Card } from "../components/index";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GrInstall } from "react-icons/gr";
import { MdModelTraining } from "react-icons/md";
import { MdDeveloperBoard } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { TbTransformFilled } from "react-icons/tb";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import useIntersection from "../hooks/useIntersection";

const Features = () => {
  const [title, istitle] = useIntersection({
    threshold: 0.4,
  });
  const [visibility, setVisibility] = useState(false);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const features = [
    {
      title: "Soporte Técnico",
      description:
        "Estamos aquí para resolver cualquier problema técnico que surja, brindando asistencia rápida y efectiva.",
      svg: (
        <MdOutlineSupportAgent className="size-8 text-primary-600 lg:size-10 dark:text-primary-300" />
      ),
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1715212486/samples/Conectados%20al%20futuro/servicios/Soporte_T%C3%A9cnico_f9mkfi.jpg",
    },
    {
      title: "Configuración e Instalación",
      description:
        "Configuramos e instalamos sistemas contables y administrativos para garantizar un funcionamiento sin problemas desde el principio.",
      svg: (
        <GrInstall className="size-8 text-primary-600 lg:size-10 dark:text-primary-300" />
      ),
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1715212486/samples/Conectados%20al%20futuro/servicios/Configuraci%C3%B3n_e_Instalaci%C3%B3n_l7pia2.jpg",
    },
    {
      title: "Capacitación",
      description:
        "Impartimos capacitación especializada para que tu equipo domine las herramientas y procesos necesarios para el éxito.",
      svg: (
        <MdModelTraining className="size-8 text-primary-600 lg:size-10 dark:text-primary-300" />
      ),
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1715212486/samples/Conectados%20al%20futuro/servicios/Capacitaci%C3%B3n_q4n44t.jpg",
    },
    {
      title: "Desarrollos a la medida",
      description:
        "Creamos soluciones personalizadas para abordar las necesidades específicas de tu empresa.",
      svg: (
        <MdDeveloperBoard className="size-8 text-primary-600 lg:size-10 dark:text-primary-300" />
      ),
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1715212486/samples/Conectados%20al%20futuro/servicios/Desarrollos_a_la_medida_unlnzs.jpg",
    },
    {
      title: "Implementación de proyectos de mejora",
      description:
        "Colaboramos contigo en la implementación de proyectos estratégicos para mejorar la eficiencia y la productividad.",
      svg: (
        <FaProjectDiagram className="size-8 text-primary-600 lg:size-10 dark:text-primary-300" />
      ),
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1715212486/samples/Conectados%20al%20futuro/servicios/Implementaci%C3%B3n_de_proyectos_de_mejora_w4dzud.jpg",
    },
    {
      title: "Migración de información de sistema a sistema",
      description:
        "Facilitamos la transición de datos de un sistema a otro de manera segura y eficiente.",
      svg: (
        <TbTransformFilled className="size-8 text-primary-600 lg:size-10 dark:text-primary-300" />
      ),
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1715212487/samples/Conectados%20al%20futuro/servicios/Migraci%C3%B3n_de_informaci%C3%B3n_de_sistema_a_sistema_ldpelj.jpg",
    },
    {
      title: "Asesoría Contable",
      description:
        "Nuestros expertos en contabilidad ofrecen asesoramiento especializado para optimizar tus procesos financieros.",
      svg: (
        <MdAccountBalanceWallet className="size-8 text-primary-600 lg:size-10 dark:text-primary-300" />
      ),
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1715212486/samples/Conectados%20al%20futuro/servicios/Asesor%C3%ADa_Contable_hneqbk.jpg",
    },
    {
      title: "Software",
      description:
        "Proporcionamos acceso a software de calidad para apoyar tus operaciones diarias y facilitar la toma de decisiones informadas.",
      svg: (
        <FaLaptopCode className="size-8 text-primary-600 lg:size-10 dark:text-primary-300" />
      ),
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1715212487/samples/Conectados%20al%20futuro/servicios/Software_ktauhm.jpg",
    },
  ];
  return (
    <>
      <section ref={title} className="bg-white dark:bg-gray-900 text-center  ">
        {istitle || visibility ? (
          <div className=" px-4 mx-auto max-w-screen-xl pt-20 md:pt-24  lg:px-6">
            <div className="w-full mb-2 ">
              <h2
                className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white animate-fade-up "
                onAnimationStart={() => setVisibility(true)}
              >
                Soluciones Integrales para la Excelencia Empresarial
              </h2>

              <p className="text-gray-500 sm:text-xl dark:text-gray-400 animate-fade-up animate-delay-200 ">
                Te ofrecemos una amplia gama de servicios diseñados para
                optimizar y fortalecer los procesos contables y administrativos
                de tu empresa. Nuestros servicios incluyen:
              </p>
            </div>
            <Slider
              {...settings}
              className="w-full pb-1 animate-fade animate-delay-1000 "
            >
              {features.map((feature, i) => (
                <div key={i}>
                  <Card feature={feature} />
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className=" px-4 mx-auto max-w-screen-xl pt-24  lg:px-6 h-screen"></div>
        )}
      </section>
    </>
  );
};

export default Features;
