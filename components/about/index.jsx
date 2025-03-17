import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-14 md:py-20 sm:py-32 bg-cover"
      style={{ backgroundImage: "url(/images/bg.png)" }}
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-20 text-dark">
        <div className="flex flex-col items-start gap-1">
          <h5 className="font-medium text-lg sm:text-xl">
            Yusolve Heading top
          </h5>
          <h2 className="font-bold text-2xl sm:text-3xl">
            About Yusolve Solutions
          </h2>
          <p className="py-7">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus alias quae dolores similique facilis officia cupiditate
            voluptatibus? Voluptatibus quam ipsam saepe id dolorem magni
            voluptate voluptatum reiciendis tenetur! <br />
            <br />
            Illo blanditiis obcaecati assumenda et, aperiam necessitatibus aut
            ipsam optio maxime numquam ad, quisquam sunt harum. Animi, pariatur
            impedit repellat soluta eius facere error dolorum adipisci vel amet
            eaque corporis necessitatibus. Cum numquam repellat, porro alias
            sint quod reprehenderit, temporibus optio quaerat, maiores harum
            voluptatem error eum. Ducimus rem unde doloremque deserunt sint
            alias repellendus nisi perspiciatis illum tenetur repudiandae
            dignissimos corrupti dicta veniam id labore nemo, vitae adipisci ab
            veritatis minus!
          </p>
          <button
            type="button"
            className="px-7 py-3 text-sm font-semibold uppercase bg-dark rounded-lg text-white hover:bg-main hover:text-dark transition-all duration-150"
          >
            Read more
          </button>
        </div>
        <div className="rounded-3xl overflow-hidden">
          <img
            src="/images/main.png"
            alt="main"
            title="main"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
