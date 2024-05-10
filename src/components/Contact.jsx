import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";

const Contact = (props) => {
  const { setShowContact } = props && props;
  const [form, setForm] = useState({ email: "", subject: "", message: "" });

  const handlerChangeForm = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value });
  };
  const HandlerSubmit = () => {
    if (window.Email) {
      window.Email.send({
        SecureToken: "82a80c08-6410-46c0-bacf-9e7412a9d3f8",
        To: "venta@conectatealfuturo.com",
        From: form.email,
        Subject: form.subject,
        Body: form.message,
      }).then((message) => alert(message));
    }
  };

  return (
    <>
      <div
        id="defaultModal"
        tabIndex="-1"
        aria-hidden="true"
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-full md:inset-0 h-modal  bg-gray-900/85 "
      >
        <section className="w-screem">
          <div className="mx-auto mt-1 xl:mt-4 py-2 px-4 max-w-screen-md bg-white border border-white rounded-xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] dark:bg-gray-900 dark:border-gray-900">
            <div className="flex justify-end">
              <button
                className="absolute z-50 text-[#9C0505] hover:scale-75"
                onClick={() => setShowContact(false)}
              >
                <IoMdClose className="size-8 md:size-11" />
              </button>
            </div>
            <h2 className="mb-2 xl:mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contáctanos
            </h2>
            <p className="py-1 text-gray-500 dark:text-gray-400 w-full text-center font-normal text-base">
              Siempre conectándote al futuro{" "}
            </p>
            <div className="flex py-1 gap-4 md:justify-around flex-col md:flex-row shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg overflow-hidden justify-center items-center dark:bg-gray-900 dark:border-gray-700 my-2">
              <div className="flex gap-2 justify-around items-center w-[286px] md:w-1/2 ">
                <div className="flex justify-center w-14">
                  <MdLocalPhone className="size-8 md:size-12 text-[#9C0505] dark:text-slate-400" />
                </div>
                <div className="flex flex-col justify-center items-center flex-grow md:flex-grow-0">
                  <h1 className="text-center font-medium md:text-xl dark:text-[#f93232]">
                    Números de Contacto{" "}
                  </h1>
                  <div className="flex flex-col text-xs md:text-sm  font-extralight md:font-light text-slate-900 dark:text-slate-400">
                    <span>+55 1882 5986</span>
                    <span>+55 8118 0495</span>
                    <span>+55 6205 8956</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center  w-[286px]  md:w-1/2 ">
                <div className="flex justify-center md:w-20  w-14 ">
                  <MdAlternateEmail className="size-8 md:size-12 text-[#9C0505] dark:text-slate-400" />
                </div>
                <div className="flex flex-col justify-center items-center flex-grow md:flex-grow-0">
                  <h1 className="text-center font-medium md:text-xl dark:text-[#f93232]">
                    Correos
                  </h1>
                  <div className="flex flex-col text-xs md:text-sm  font-extralight md:font-light text-slate-900 dark:text-slate-400 justify-center items-center">
                    <span>venta@conectatealfuturo.com</span>
                    <span>soporte@conectatealfuturo.com</span>
                    <span>cobranza@conectatealfuturo.com</span>
                  </div>
                </div>
              </div>
            </div>
            <form className="space-y-4 xl:space-y-8" onSubmit={HandlerSubmit}>
              <div>
                <label
                  htmlFor="Correo electrónico"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Correo
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@email.com"
                  onChange={handlerChangeForm}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  value={form.subject}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Asunto"
                  onChange={handlerChangeForm}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="¿En qué podemos ayudarte?"
                  onChange={handlerChangeForm}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
