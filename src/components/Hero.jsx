import React from "react";

const Contact = () => {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute h-full w-full object-cover"
        playsInline
      >
        <source src="/vapes.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed flex items-center justify-center">
        <div className="px-6 text-center text-white md:px-12">
          <h1 className="mt-2 mb-16 text-2xl font-bold tracking-tight md:text-6xl xl:text-7xl">
            Explore Next-Gen Vaping Tech <br />
            <span>Revolutionize Your Experience</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
