import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SkillIcon({ src, alt }) {
  return (
    <div className="relative group flex flex-col items-center skill-icon">
      <img
        src={src}
        alt={alt}
        className="w-14 h-14 rounded-full bg-sky-100 p-1.5 cursor-pointer transition duration-300 z-10"
      />
      <div className="absolute top-full mt-2 px-2 py-1 text-xs font-semibold bg-black opacity-0 group-hover:opacity-100 text-white rounded transition duration-300 z-20 whitespace-nowrap">
        {alt}
      </div>
    </div>
  );
}

export default function Skills() {
  const skillSectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Animate cards
      gsap.from(".skill-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillSectionRef.current,
          start: "top 80%",
        },
      });

      // Animate icons
      ScrollTrigger.batch(".skill-icon", {
        onEnter: batch =>
          gsap.fromTo(
            batch,
            { opacity: 0, scale: 0.5 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
              stagger: 0.1,
            }
          ),
        onLeave: batch =>
          gsap.to(batch, {
            opacity: 0,
            scale: 0.5,
            duration: 0.2,
          }),
        onEnterBack: batch =>
          gsap.to(batch, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.1,
          }),
        onLeaveBack: batch =>
          gsap.to(batch, {
            opacity: 0,
            scale: 0.5,
            duration: 0.2,
          }),
        start: "top 80%",
        end: "bottom 20%",
      });
    }, skillSectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      id="skills"
      ref={skillSectionRef}
      className="min-h-screen px-4 md:px-20 py-19 flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 via-slate-900 to-blue-900"
    >
      <h2 className="text-4xl font-bold text-center mb-6 text-sky-700">
        My <span className="text-sky-700">Skills</span>
      </h2>

      <div className="w-full flex max-lg:flex-col gap-6 justify-center items-center">
        {/* Frontend Skills */}
        <div className="skill-card rounded-xl shadow-md p-6 w-full xl:w-1/3 lg:h-80 bg-slate-800 text-white">
          <h3 className="text-center text-2xl font-semibold text-sky-600 mb-9">Frontend</h3>
          <div className="flex justify-evenly flex-wrap gap-4 mb-4 select-none">
            <SkillIcon src="/html-5.png" alt="HTML-5" />
            <SkillIcon src="/css-3.png" alt="CSS-3" />
            <SkillIcon src="/js.png" alt="JavaScript" />
            <SkillIcon src="/tailwind.png" alt="Tailwind" />
            <SkillIcon src="/react.png" alt="React" />
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skill-card rounded-xl shadow-md p-6 w-full xl:w-1/3 lg:h-80 bg-gray-800 text-white">
          <h3 className="text-center text-2xl font-semibold text-green-600 mb-9">Backend</h3>
          <div className="flex justify-evenly flex-wrap gap-4 mb-4 select-none">
            <SkillIcon src="/nodejs.png" alt="Node.js" />
            <SkillIcon src="/expressjs.png" alt="Express.js" />
            <SkillIcon src="/mongodb.png" alt="MongoDB" />
            <SkillIcon src="/mongoose.png" alt="Mongoose" />
            <SkillIcon src="/cloudinary.png" alt="Cloudinary" />
            <SkillIcon src="/api.png" alt="RESTful API" />
          </div>
        </div>

        {/* Tools & Others */}
        <div className="skill-card rounded-xl shadow-md p-6 w-full xl:w-1/3 lg:h-80 bg-slate-800 text-white">
          <h3 className="text-center text-2xl font-semibold text-amber-600 mb-9">Tools & Other</h3>
          <div className="flex justify-evenly flex-wrap gap-4 mb-4 select-none">
            <SkillIcon src="/git.png" alt="Git" />
            <SkillIcon src="/github.png" alt="GitHub" />
            <SkillIcon src="/vs-code.png" alt="VS Code" />
            <SkillIcon src="/postman.png" alt="Postman" />
            <SkillIcon src="/netlify.png" alt="Netlify" />
          </div>
        </div>
      </div>
    </section>
  );
}
