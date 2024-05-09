import { useState } from "react";

function SliderHero() {
  const slides = [
    {
      url: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759263/samples/Conectados%20al%20futuro/productos/CONTABILIDAD_rzt5xs.png",
      style: "h-36 md:h-40 animate-fade-down",
    },
    {
      url: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759264/samples/Conectados%20al%20futuro/productos/CONTPAQI_COMERCIAL_PREMIUM_nytizu.png",
      style: "h-36 md:h-40 animate-fade-left ",
    },
    {
      url: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759262/samples/Conectados%20al%20futuro/productos/CONTABILIZA_bsgcld.png",
      style: "h-20 animate-fade-up",
    },
    {
      url: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759264/samples/Conectados%20al%20futuro/productos/CONTPAQI_COMERCIAL_PREMIUM_nytizu.png",
      style: "h-36 md:h-40 animate-fade-right",
    },
    {
      url: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759261/samples/Conectados%20al%20futuro/productos/COBRA_de3ert.png",
      style: "h-20 animate-fade-down",
    },
    {
      url: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759262/samples/Conectados%20al%20futuro/productos/COMERCIAL_POR_vr702x.png",
      style: "h-36 md:h-40 animate-fade-left ",
    },
    {
      url: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759259/samples/Conectados%20al%20futuro/productos/BANCOS_h6vmlp.png",
      style: "h-36 md:h-40 animate-fade-up",
    },
    {
      url: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759257/samples/Conectados%20al%20futuro/productos/XMLENLINEA_vorvqb.png",
      style: "h-36 md:h-40 animate-fade-right",
    },
    {
      url: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759255/samples/Conectados%20al%20futuro/productos/VIATICOS_dj1xqo.png",
      style: "h-20 animate-fade-down",
    },
    {
      url: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759253/samples/Conectados%20al%20futuro/productos/RESPALDOS_vdi3kt.png",
      style: "h-24  animate-fade-left ",
    },
    {
      url: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759255/samples/Conectados%20al%20futuro/productos/VENDE_bey50x.png",
      style: "h-20 animate-fade-up",
    },
    {
      url: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759253/samples/Conectados%20al%20futuro/productos/PERSONIA_ifgv1e.png",
      style: "h-20 animate-fade-right",
    },
    {
      url: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759251/samples/Conectados%20al%20futuro/productos/NOMINAS_tnitmc.png",
      style: "h-36 md:h-40 animate-fade-down",
    },
    {
      url: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759251/samples/Conectados%20al%20futuro/productos/FACTURA_ELECTRONICA_kuaevw.png",
      style: "h-36 md:h-40 animate-fade-left ",
    },
    {
      url: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759251/samples/Conectados%20al%20futuro/productos/ESCRITORIOVIRTUAL_jj5xoo.png",
      style: "h-36 md:h-40 animate-fade-up",
    },
    {
      url: "https://res.cloudinary.com/desaac6ma/image/upload/v1713759251/samples/Conectados%20al%20futuro/productos/DECIDE_ybocpt.png",
      style: "h-20 animate-fade-right",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const runTimer = () => {
    window.setTimeout(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 4000);
  };

  runTimer();

  return (
    <div className="flex w-full h-full justify-center items-center animate-fade animate-duration-1000 animate-delay-1000">
      <div className="animate-pulse animate-duration-3000">
        {slides.map(
          (slide, index) =>
            currentIndex === index && (
              <img
                key={index}
                src={slide.url}
                alt=""
                className={`${slide.style}    `}
              />
            )
        )}
      </div>
    </div>
  );
}

export default SliderHero;
