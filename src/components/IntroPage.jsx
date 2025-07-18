import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImg from "../assets/download.jpeg";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function IntroPage() {
  const comp = useRef(null);

  useLayoutEffect(() => {
  let ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: comp.current,
        start: "top 80%",       // Adjust as needed
        toggleActions: "play none none reverse", // play on enter, reverse on leave
        markers: false,         // set to true for debugging
      },
    });

    tl.from("#intro-slider", {
      xPercent: -100,
      duration: 1,
      ease: "power2.out",
    })
      .from(
        "#profile-img",
        {
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      )
      .from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
  }, comp);

  return () => ctx.revert();
}, []);


  return (
    <div
      id="intro"
      ref={comp}
      className="flex justify-evenly items-center h-screen px-6 bg-slate-900 text-slate-100 relative"
    >
      {/* Sliding intro background */}
      <div
        id="intro-slider"
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-700 via-sky-500 to-slate-900 z-0 opacity-30 pointer-events-none"
      />

      <div className="relative z-10">
        <div className="flex justify-center items-center mt-18">
          <img
            id="profile-img"
            src={profileImg}
            alt="profile"
            className="select-none object-cover mix-blend-lighten w-32 h-32 md:w-64 md:h-64 rounded-full shadow-xl"
          />
        </div>

        <div className="flex flex-col justify-center items-center p-3 mx-4 text-center">
          <h1 id="title-1" className="text-3xl md:text-6xl text-slate-200 font-extrabold leading-tight mb-4">
            Hey, I'm <span className="text-sky-400">Nishant Sapkal</span>
          </h1>

          <h2 id="title-2" className="text-lg md:text-2xl font-semibold text-slate-200 mb-6">
            Full Stack Developer | MERN Stack | Code & Creativity
          </h2>

          <p id="title-3" className="text-base md:text-lg text-slate-200 font-sans max-w-2xl mb-4">
            I specialize in building responsive full-stack web apps that are both functional and visually appealing. From crafting elegant UIs with React & Tailwind to building robust APIs with Node.js, I love turning ideas into real, usable products.
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="/resume.pdf"
            download="Nishant_Sapkal_Resume.pdf"
            className="py-2 px-6 rounded-2xl bg-sky-500 hover:bg-green-500 hover:text-black text-white font-semibold shadow-md cursor-pointer transition-colors duration-300 ease-in-out"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
