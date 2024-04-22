import React from "react";

const ProductFeature = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center mb-8 lg:flex-row lg:items-start">
      <img src={image} alt={title} className="w-48 h-auto mb-4 lg:mr-4 lg:mb-0" />
      <div>
        <h3 className="text-2xl font-bold text-gray-500 mb-2">{title}</h3>
        <p className="text-lg text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ProductFeatures = () => {
  return (
    <div className="mx-auto py-8 px-4 bg-black">
      <p className="flex justify-center text-m-2 uppercase tracking-[8px] pb-20 text-gray-500 text-6x1">Características</p>
      <div className="grid gap-8 lg:flex lg:flex-col">
        <ProductFeature
          title="Indicador LED"
          description="Digital Box 12000 vape se destaca con una vibrante pantalla LED. Esta característica ofrece información en tiempo real, proporcionando a los vapers detalles esenciales de un vistazo. La pantalla muestra la vida de la batería y el nivel de aceite."
          image="/led-display.jpg"
        />
        
        <ProductFeature
          title="Malla deDigital Box 12000"
          description="Con una bobina de baja resistencia de 0.8. Este avance maximiza la superficie de calentamiento, lo que resulta en inhalaciones más suaves y una producción de vapor más rica."
          image="/meshCoil.jpg"
        />
        <ProductFeature
          title="Puerto Tipo-C"
          description="Nuestro vape está equipado con un puerto Tipo-C. Este puerto moderno y versátil permite una carga más rápida y conveniente."
          image="/type-c-port.jpg"
        />
        <ProductFeature
          title="550 MAh"
          description="Con una batería recargable incorporada de 550mAh, puedes recargarla varias veces, asegurándote de no quedarte sin un vape desechable antes de terminar el líquido electrónico."
          image="/built-in-battery.jpg"
        />
      </div>
    </div>
  );
};

export default ProductFeatures;
