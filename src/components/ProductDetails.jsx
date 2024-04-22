import React from "react";

const ProductDetails = () => {
  return (
    <div className="bg-black p-12">
      <div className="container mx-auto">
        <div className="px-6 text-center text-white md:px-12">
          <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
            Caja Digital 12000 <br />
            <span className="text-lg">Vape Desechable con Indicador LED</span>
          </h1>
        </div>
        <div className="text-white max-w-4xl mx-auto">
          <p className="mb-8">
            Fumot Caja Digital 12000 es un vape desechable recargable que cuenta con un indicador LED, con indicadores tanto para los niveles de aceite como para la energía. De manera conveniente, se puede cargar a través del puerto Tipo-C en su base.
          </p>
          <p className="mb-8">
            Prellenado con 20 ml de e-líquido, está disponible en cuatro opciones de contenido de nicotina: 0%, 2%, 3% y 5%. Este vape proporciona hasta 12,000 puffs para su disfrute.
          </p>
          {/* <div className="flex justify-center items-center p-2 m-2">
            <div className="">
              <img src="/battery.png" alt="Battery" className="h-24 pl-8" />
              <p className="text-white mt-2">Indicador de Encendido</p>
            </div>
            <div className="text-center">
              <img src="/liquid.png" alt="Liquid" className="h-24" />
              <p className="text-white mt-2">Indicador de Líquido</p>
            </div>
            <div className="text-center">
              <img src="/smoke.png" alt="Smoke" className="h-24" />
              <p className="text-white mt-2">12 Caladas</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
