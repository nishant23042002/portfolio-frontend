import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const paraRefs = useRef([]);
  paraRefs.current = [];

  const addToParaRefs = (el) => {
    if (el && !paraRefs.current.includes(el)) {
      paraRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(headingRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play reset play reset", // updated
      },
    });

    gsap.from(paraRefs.current, {
      y: 30,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play reset play reset", // updated
      },
    });
  }, containerRef);

  return () => ctx.revert();
}, []);


  return (
    <section
      ref={containerRef}
      id="about"
      className="flex flex-col justify-center items-center px-6 md:px-20 max-sm:h-auto h-screen py-19 bg-gradient-to-r from-blue-900 via-slate-900 to-gray-900"
    >
      <h2
        ref={headingRef}
        className="text-3xl md:text-5xl font-bold mb-6 text-center text-sky-700"
      >
        About Me
      </h2>
      <div className="max-w-4xl mx-auto sm:text-xl font-medium leading-relaxed space-y-8 text-justify text-slate-200">
        <p ref={addToParaRefs}>
          Hey there! I'm <span className="font-semibold text-cyan-400">Nishant Sapkal</span>, a curious and enthusiastic Full Stack Developer, driven by a love for building web apps that not only work — but feel great to use.
        </p>
        <p ref={addToParaRefs}>
          My coding journey began with designing pixel-perfect interfaces using <span className="text-sky-400">React</span> and <span className="text-sky-400">Tailwind CSS</span>, which quickly evolved into a deep interest in backend development with <span className="text-green-400">Node.js</span> and <span className="text-green-400">MongoDB</span>.
        </p>
        <p ref={addToParaRefs}>
          As a fresher, I bring energy, adaptability, and a mindset of continuous learning. I love collaborating on real-world projects, debugging tricky bugs, and creating intuitive user experiences — one line of code at a time.
        </p>
        <p ref={addToParaRefs}>
          My goal? To grow into a developer who doesn't just build applications, but crafts digital experiences that leave a mark. Let's connect and create something amazing!
        </p>
      </div>
    </section>
  );
};

export default About;
