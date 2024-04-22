import React from "react";
import { FaCity, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black p-4">
      <p className="text-m-2  flex flex-col items-center justify-center uppercase tracking-[8px] py-8 text-gray-500 text-6x1">
        Contacto
      </p>
      <footer className="bg-black text-white py-8 px-4 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center mb-4">
            <FaWhatsapp className="text-green-500 text-5xl mr-8" />
            <div>
              <p className="mb-2 text-1xl">¡Vendemos al por mayor también!</p>
              <p className="mb-2 text-1xl">
                Nos encontramos en Belgrano, Capital Federal
              </p>
            </div>
          </div>
        </div>
      </footer>
     
    </div>
  );
};

export default Contact;
