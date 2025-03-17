import React from "react";

export default function Banner() {
  return (
    <section
      id="banner"
      className="w-full min-h-screen overflow-hidden flex items-center justify-center text-white bg-cover"
      style={{ backgroundImage: "url(/images/main.png)" }}
    >
      <div className="w-full px-5 md:px-0 md:max-w-[756px] mx-auto flex flex-col gap-5 items-center justify-center text-center">
        <h1 className="text-3xl sm:text-5xl font-semibold">
          You keep Our Nation Running
        </h1>
        <p className="w-full sm:w-3/5 text-lg">
          Encouarging and supporting transportation enterpreneurs, just for over
          20 years !
        </p>
        <button
          type="button"
          className="px-7 py-3 font-semibold uppercase bg-white bg-opacity-5 backdrop-blur-lg border border-white rounded-lg text-white hover:bg-white hover:text-dark transition-all duration-150"
        >
          Get a free consultation
        </button>
      </div>
    </section>
  );
}
