import React from "react";
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

const Features = () => {
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
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1714536033/happy-customer-service-representative-using-computer-having-video-call-with-clients-while-working-call-center_1_dkzn0c.jpg",
    },
    {
      title: "Configuración e Instalación",
      description:
        "Configuramos e instalamos sistemas contables y administrativos para garantizar un funcionamiento sin problemas desde el principio.",
      svg: (
        <GrInstall className="size-8 text-primary-600 lg:size-10 dark:text-primary-300" />
      ),
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1714537476/adult-men-working-project-office_1_fpuqin.jpg",
    },
    {
      title: "Capacitación",
      description:
        "Impartimos capacitación especializada para que tu equipo domine las herramientas y procesos necesarios para el éxito.",
      svg: (
        <MdModelTraining className="size-8 text-primary-600 lg:size-10 dark:text-primary-300" />
      ),
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1714537683/young-business-people-modern-office-working-solution-having-meeting-about-new-project_1_ch3ogj.jpg",
    },
    {
      title: "Desarrollos a la medida",
      description:
        "Creamos soluciones personalizadas para abordar las necesidades específicas de tu empresa.",
      svg: (
        <MdDeveloperBoard className="size-8 text-primary-600 lg:size-10 dark:text-primary-300" />
      ),
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1714537804/html-css-collage-concept-with-person_1_filvns.jpg",
    },
    {
      title: "Implementación de proyectos de mejora",
      description:
        "Colaboramos contigo en la implementación de proyectos estratégicos para mejorar la eficiencia y la productividad.",
      svg: (
        <FaProjectDiagram className="size-8 text-primary-600 lg:size-10 dark:text-primary-300" />
      ),
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1714538049/close-up-young-business-team-working_1_fowi4p.jpg",
    },
    {
      title: "Migración de información de sistema a sistema",
      description:
        "Facilitamos la transición de datos de un sistema a otro de manera segura y eficiente.",
      svg: (
        <TbTransformFilled className="size-8 text-primary-600 lg:size-10 dark:text-primary-300" />
      ),
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1714538390/modern-equipped-computer-lab_1_pse6mt.jpg",
    },
    {
      title: "Asesoría Contable",
      description:
        "Nuestros expertos en contabilidad ofrecen asesoramiento especializado para optimizar tus procesos financieros.",
      svg: (
        <MdAccountBalanceWallet className="size-8 text-primary-600 lg:size-10 dark:text-primary-300" />
      ),
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1714537378/portrait-adult-male-working-from-office_1_mqu2t9.jpg",
    },
    {
      title: "Software",
      description:
        "Proporcionamos acceso a software de calidad para apoyar tus operaciones diarias y facilitar la toma de decisiones informadas.",
      svg: (
        <FaLaptopCode className="size-8 text-primary-600 lg:size-10 dark:text-primary-300" />
      ),
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1714538480/team-developing-additional-layers-security-order-sustain-good-functionality-system-mixed-race-back-end-network-developers-analyzing-interface-database-cloud-processing-method_1_sav3lf.jpg",
    },
  ];
  return (
    <>
      <section className="bg-white dark:bg-gray-900 text-center">
        <div className=" px-4 mx-auto max-w-screen-xl pt-24 lg:pt-16 lg:px-6">
          <div className="w-full mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Soluciones Integrales para la Excelencia Empresarial
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Te ofrecemos una amplia gama de servicios diseñados para optimizar
              y fortalecer los procesos contables y administrativos de tu
              empresa. Nuestros servicios incluyen:
            </p>
          </div>
          <Slider {...settings} className="w-full  pb-8">
            {features.map((feature, i) => (
              <div key={i} className="">
                <Card feature={feature} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Features;
