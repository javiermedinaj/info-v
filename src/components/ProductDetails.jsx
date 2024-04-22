import React from "react";
import { motion, useInView } from "framer-motion";

const ProductDetails = () => {
  const slideUp = {
    initial: { y: "100%" },
    open: { y: "0%", transition: { duration: 0.2 } },
    closed: { y: "20%", transition: { duration: 0.2 } },
  };

  const descriptionRef = React.useRef(null);
  const isInView = useInView(descriptionRef);

  return (
    <div className="bg-black p-12">
      <div className="mx-auto">
        <div className="px-6 text-center text-white md:px-12">
          <h1 className="mt-2 mb-10 text-4xl font-bold tracking-tight md:text-6xl xl:text-4xl">
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text">
              Fumot 12000
            </span>{" "}
            <br />
          </h1>
        </div>
        <div className="text-white max-w-4xl mx-auto">
          <motion.p
            ref={descriptionRef}
            variants={slideUp}
            animate={isInView ? "open" : "closed"}
            className="mb-8 text-gray-500 text-3xl"
          >
            Fumot 12000 es un vape desechable recargable que cuenta con un
            indicador LED, con indicadores tanto para los niveles de aceite como
            para la energía. De manera conveniente, se puede cargar a través del
            puerto Tipo-C en su base.
          </motion.p>
          <motion.p
            ref={descriptionRef}
            variants={slideUp}
            animate={isInView ? "open" : "closed"}
            className="mb-8 text-gray-500 text-2xl"
          >
            Prellenado con 20 ml de e-líquido, este vape proporciona hasta
            12,000 puffs para su disfrute.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
