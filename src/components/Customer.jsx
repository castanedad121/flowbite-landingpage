import React, { useEffect, useState } from "react";
import useIntersection from "../hooks/useIntersection";

const Customer = (props) => {
  const [title, istitle] = useIntersection({
    threshold: 0.4,
  });
  const [visibility, setVisibility] = useState(false);
  const { theme } = props && props;

  useEffect(() => {
    if (theme === "light" || !theme) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);
  return (
    <>
      <section
        ref={title}
        className="bg-white dark:bg-gray-900 pt-20 md:pt-24  pb-14"
      >
        {istitle || visibility ? (
          <div className=" mx-auto w-full px-4">
            <h2
              className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl animate-fade "
              onAnimationStart={() => setVisibility(true)}
            >
              Empresas que Confían en Nosotros
            </h2>
            <div className="overflow-hidden w-full animate-flip-up">
              <div className="flex items-center whitespace-nowrap animate-scroll w-[88000px]">
                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724118/samples/Conectados%20al%20futuro/novoadark_ackmmf.png"
                      alt=""
                      className="m-auto  h-36  opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724108/samples/Conectados%20al%20futuro/novoaligth_htg6cb.png"
                      alt=""
                      className="m-auto h-36 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>
                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724113/samples/Conectados%20al%20futuro/institutodark_wquozq.png"
                      alt=""
                      className="m-auto h-24 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724114/samples/Conectados%20al%20futuro/institutoligth_dnwkvd.png"
                      alt=""
                      className="m-auto h-24 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>

                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724109/samples/Conectados%20al%20futuro/vargasdark_enbzde.png"
                      alt=""
                      className="m-auto h-40 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724110/samples/Conectados%20al%20futuro/vargasligth_ilvepz.png"
                      alt=""
                      className="m-auto h-40 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>

                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724108/samples/Conectados%20al%20futuro/trejosdark_a6mmif.png"
                      alt=""
                      className="m-auto h-40 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724109/samples/Conectados%20al%20futuro/trejosligth_atqpga.png"
                      alt=""
                      className="m-auto h-40 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>

                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724111/samples/Conectados%20al%20futuro/fabuladark_rmwqvy.png"
                      alt=""
                      className="m-auto h-44 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724112/samples/Conectados%20al%20futuro/fabulaligth_r8riqn.png"
                      alt=""
                      className="m-auto h-44 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>

                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724110/samples/Conectados%20al%20futuro/campillodark_lilk6a.png"
                      alt=""
                      className="m-auto h-44 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724111/samples/Conectados%20al%20futuro/campilloligth_ll9q8t.png"
                      alt=""
                      className="m-auto h-44 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>
                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724114/samples/Conectados%20al%20futuro/ipsumdark_fxzlpv.png"
                      alt=""
                      className=" m-auto  h-44  opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724114/samples/Conectados%20al%20futuro/ipsumligth_a3hzrt.png"
                      alt=""
                      className=" m-auto  h-44  opacity-50  hover:opacity-100"
                    />
                  )}
                </a>

                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724108/samples/Conectados%20al%20futuro/senimexdark_hroxsf.png"
                      alt=""
                      className="m-auto h-16 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724108/samples/Conectados%20al%20futuro/senimexligth_h8jct0.png"
                      alt=""
                      className="m-auto h-16 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>

                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724116/samples/Conectados%20al%20futuro/multidentdark_y3kg6p.png"
                      alt=""
                      className="m-auto h-24 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724115/samples/Conectados%20al%20futuro/multidenkligth_el4d16.png"
                      alt=""
                      className="m-auto h-24 opacity-50  hover:opacity-100 "
                    />
                  )}
                </a>

                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724108/samples/Conectados%20al%20futuro/racopdark_aarcbs.png"
                      alt=""
                      className="m-auto h-36 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724107/samples/Conectados%20al%20futuro/racopligth_o24h8o.png"
                      alt=""
                      className="m-auto h-36 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>

                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724117/samples/Conectados%20al%20futuro/nizbaligth_o6idhk.png"
                      alt=""
                      className="m-auto h-20 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724117/samples/Conectados%20al%20futuro/nizbadark_vqkrf1.png"
                      alt=""
                      className="m-auto h-20 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>
                {/* segunda ronda */}
                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724118/samples/Conectados%20al%20futuro/novoadark_ackmmf.png"
                      alt=""
                      className="m-auto  h-36  opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724108/samples/Conectados%20al%20futuro/novoaligth_htg6cb.png"
                      alt=""
                      className="m-auto h-36 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>
                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724113/samples/Conectados%20al%20futuro/institutodark_wquozq.png"
                      alt=""
                      className="m-auto h-24 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724114/samples/Conectados%20al%20futuro/institutoligth_dnwkvd.png"
                      alt=""
                      className="m-auto h-24 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>

                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724109/samples/Conectados%20al%20futuro/vargasdark_enbzde.png"
                      alt=""
                      className="m-auto h-40 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724110/samples/Conectados%20al%20futuro/vargasligth_ilvepz.png"
                      alt=""
                      className="m-auto h-40 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>

                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724108/samples/Conectados%20al%20futuro/trejosdark_a6mmif.png"
                      alt=""
                      className="m-auto h-40 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724109/samples/Conectados%20al%20futuro/trejosligth_atqpga.png"
                      alt=""
                      className="m-auto h-40 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>

                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724111/samples/Conectados%20al%20futuro/fabuladark_rmwqvy.png"
                      alt=""
                      className="m-auto h-44 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724112/samples/Conectados%20al%20futuro/fabulaligth_r8riqn.png"
                      alt=""
                      className="m-auto h-44 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>

                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724110/samples/Conectados%20al%20futuro/campillodark_lilk6a.png"
                      alt=""
                      className="m-auto h-44 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724111/samples/Conectados%20al%20futuro/campilloligth_ll9q8t.png"
                      alt=""
                      className="m-auto h-44 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>
                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724114/samples/Conectados%20al%20futuro/ipsumdark_fxzlpv.png"
                      alt=""
                      className=" m-auto  h-44  opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724114/samples/Conectados%20al%20futuro/ipsumligth_a3hzrt.png"
                      alt=""
                      className=" m-auto  h-44  opacity-50  hover:opacity-100"
                    />
                  )}
                </a>

                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724108/samples/Conectados%20al%20futuro/senimexdark_hroxsf.png"
                      alt=""
                      className="m-auto h-16 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724108/samples/Conectados%20al%20futuro/senimexligth_h8jct0.png"
                      alt=""
                      className="m-auto h-16 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>

                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724116/samples/Conectados%20al%20futuro/multidentdark_y3kg6p.png"
                      alt=""
                      className="m-auto h-24 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724115/samples/Conectados%20al%20futuro/multidenkligth_el4d16.png"
                      alt=""
                      className="m-auto h-24 opacity-50  hover:opacity-100 "
                    />
                  )}
                </a>

                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724108/samples/Conectados%20al%20futuro/racopdark_aarcbs.png"
                      alt=""
                      className="m-auto h-36 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724107/samples/Conectados%20al%20futuro/racopligth_o24h8o.png"
                      alt=""
                      className="m-auto h-36 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>

                <a href="#" className="h-full w-[400px] m-2 flex-shrink-0">
                  {theme === "light" ? (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724117/samples/Conectados%20al%20futuro/nizbaligth_o6idhk.png"
                      alt=""
                      className="m-auto h-20 opacity-50  hover:opacity-100"
                    />
                  ) : (
                    <img
                      src="https://res.cloudinary.com/desaac6ma/image/upload/v1713724117/samples/Conectados%20al%20futuro/nizbadark_vqkrf1.png"
                      alt=""
                      className="m-auto h-20 opacity-50  hover:opacity-100"
                    />
                  )}
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="px-4 mx-auto max-w-screen-xl pt-24  lg:px-6 h-screen"></div>
        )}
      </section>
    </>
  );
};

export default Customer;
