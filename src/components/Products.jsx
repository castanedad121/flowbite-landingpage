import React from "react";
import Slider from "react-slick";
import { CardProduct } from "./index";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GrInstall } from "react-icons/gr";
import { MdModelTraining } from "react-icons/md";
import { MdDeveloperBoard } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { TbTransformFilled } from "react-icons/tb";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";

const Products = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
  const products = [
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759264/samples/Conectados%20al%20futuro/productos/CONTPAQI_COMERCIAL_PREMIUM_nytizu.png",
      size: "w-28 h-36",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759262/samples/Conectados%20al%20futuro/productos/COMERCIAL_POR_vr702x.png",
      size: "w-28 h-36",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759263/samples/Conectados%20al%20futuro/productos/CONTABILIDAD_rzt5xs.png",
      size: "w-34 h-36",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759259/samples/Conectados%20al%20futuro/productos/BANCOS_h6vmlp.png",
      size: "w-28 h-36",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759251/samples/Conectados%20al%20futuro/productos/NOMINAS_tnitmc.png",
      size: "w-28 h-[145px]",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713761426/samples/Conectados%20al%20futuro/productos/comercial_start_zfwx7g.png",
      size: "w-32 h-36",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759257/samples/Conectados%20al%20futuro/productos/XMLENLINEA_vorvqb.png",
      size: "w-34 h-[140px]",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759262/samples/Conectados%20al%20futuro/productos/CONTABILIZA_bsgcld.png",
      size: "h-[90px] w-50",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759253/samples/Conectados%20al%20futuro/productos/PERSONIA_ifgv1e.png",
      size: "h-[90px] w-[200px]",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759261/samples/Conectados%20al%20futuro/productos/COBRA_de3ert.png",
      size: "h-[90px] w-[150px]",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759255/samples/Conectados%20al%20futuro/productos/VENDE_bey50x.png",
      size: "h-[90px] w-[150px]",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759255/samples/Conectados%20al%20futuro/productos/VIATICOS_dj1xqo.png",
      size: "h-[90px] w-[180px]",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759251/samples/Conectados%20al%20futuro/productos/DECIDE_ybocpt.png",
      size: "h-[90px] w-[150px]",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759253/samples/Conectados%20al%20futuro/productos/RESPALDOS_vdi3kt.png",
      size: "h-[120px] w-[180px]",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759251/samples/Conectados%20al%20futuro/productos/ESCRITORIOVIRTUAL_jj5xoo.png",
      size: "h-[140px] w-[160px]",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759256/samples/Conectados%20al%20futuro/productos/wopenpos_i7arh6.png",
      size: "h-[100px] w-[240px]",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759257/samples/Conectados%20al%20futuro/productos/Aspel_wknojy.png",
      size: "h-[90px] w-[220px]",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759259/samples/Conectados%20al%20futuro/productos/aspelFacture_qotzmd.png",
      size: "w-32 h-36",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759258/samples/Conectados%20al%20futuro/productos/aspelADm_zhwi9m.png",
      size: "w-32 h-36",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759259/samples/Conectados%20al%20futuro/productos/aspelCOI_qzkwc0.png",
      size: "w-32 h-36",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759254/samples/Conectados%20al%20futuro/productos/sigonube_rkz8m8.png",
      size: "w-32 h-28",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759250/samples/Conectados%20al%20futuro/productos/control_xtxszz.png",
      size: "w-46 h-32",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759250/samples/Conectados%20al%20futuro/productos/nominac2k_yoqlsx.png",
      size: "w-28 h-32",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759263/samples/Conectados%20al%20futuro/productos/contafiscalc2k_ty0mye.png",
      size: "w-28 h-36",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759260/samples/Conectados%20al%20futuro/productos/bancos2ck_fo7h4n.png",
      size: "w-28 h-32",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759253/samples/Conectados%20al%20futuro/productos/produccionc2k_cnprnk.png",
      size: "w-28 h-32",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759252/samples/Conectados%20al%20futuro/productos/oracle_wtbtep.png",
      size: "w-58 h-24",
    },
    {
      img: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759254/samples/Conectados%20al%20futuro/productos/sap_yi4crk.png",
      size: "w-58 h-[100px]",
    },
  ];
  return (
    <>
      <section className="bg-white dark:bg-gray-900 text-center ">
        <div className=" px-4 mx-auto max-w-screen-xl pt-24 pb-24 lg:px-6 ">
          <div className="w-full mb-8 lg:mb-16 ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Suite Integral de Software Empresarial
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Sumérgete en nuestra suite integral de software empresarial, donde
              encontrarás una amplia variedad de soluciones diseñadas para
              impulsar la eficiencia y el rendimiento en todos los aspectos de
              tu negocio.
            </p>
          </div>
          <Slider
            {...settings}
            className="w-full flex justify-center items-center pb-8"
          >
            {products.map((product, i) => (
              <div key={i} className="">
                <CardProduct product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Products;
