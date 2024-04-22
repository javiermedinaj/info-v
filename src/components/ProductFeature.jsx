import React from "react";

const ProductFeature = ({ title, description, image }) => {
  return (
    <div className="flex items-center mb-8">
      <img src={image} alt={title} className="w-48 h-auto mr-4" />
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
      <ProductFeature
        title="LED Indicator"
        description="Digital Box 12000 vape sets itself apart with a vibrant LED display. This feature offers real-time information, providing vapers with essential details at a glance. The display shows battery life and oil level. This not only adds a futuristic touch but also enhances the overall user experience, making it easy to track usage and know when it’s time for a recharge. Stay informed and in control with our LED Display disposable vape."
        image="
        /led-display.jpg"
      />
      
      <ProductFeature
        title="Digital Box 12000 Mesh Coil"
        description="We’ve integrated cutting-edge Mesh Coil Technology into our disposable vape, featuring a low-resistance 0.8Ω coil. This advancement maximizes the heating surface area, resulting in smoother draws and richer vapor production. The Mesh Coil design ensures consistent and even heating of the e-liquid, delivering an impeccable flavor experience. Say goodbye to dry hits and uneven flavor distribution, and embrace the superior performance of our Mesh Coil disposable vape."
        image="/meshCoil.jpg"
      />
      <ProductFeature
        title="Type-C Port"
        description="Keeping up with the times, our disposable vape is equipped with a Type-C Port. This modern and versatile port allows for faster and more convenient charging. With reversible connectivity, you no longer need to worry about the orientation when plugging in. Just a short charging time will ensure you have your vape ready to go."
        image="/type-c-port.jpg"
      />
      <ProductFeature
        title="550 MAI"
        description="Featuring a built-in 550mAh rechargeable battery, you can recharge it multiple times, ensuring you won’t be left with a dead disposable before using up the e-liquid."
        image="/built-in-battery.jpg"
      />
    </div>
  );
};

export default ProductFeatures;
