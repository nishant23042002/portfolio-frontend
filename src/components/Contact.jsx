import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SocialIcons({ src, alt }) {
  return (
    <div className="relative group social-icon">
      <img
        className="w-12 h-12 rounded-full bg-slate-200 p-2 cursor-pointer"
        src={src}
        alt={alt}
      />
      <span className="absolute top-14 mb-2 px-2 py-1 text-xs text-black font-bold bg-gray-300 rounded opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-1 transition duration-300 whitespace-nowrap z-10">
        {alt}
      </span>
    </div>
  );
}

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const iconsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".social-icon", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: iconsRef.current,
          start: "top 90%",
          toggleActions: "play none none reset",
          once: false,
        },
      });
    }, iconsRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = { name, email, message }
    let url = "https://portfolio-backend-91fx.onrender.com/api/contact"
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      console.log(data);

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center flex-col px-6 md:px-20 text-gray-900 h-[100vh] bg-gradient-to-r from-blue-900 via-slate-900 to-gray-900"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-sky-600 my-6">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-slate-300 p-8 rounded-2xl md:shadow-md md:w-100 min-h-105"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium mb-1 text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-4 py-3 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-gray-500 focus:border-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium mb-1 text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full px-4 py-3 border border-gray-400 rounded-lg outline-none focus:ring-2 focus:ring-gray-500 focus:border-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium mb-1 text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message..."
              className="w-full px-4 py-3 border border-gray-400 rounded-lg resize-none outline-none focus:ring-2 focus:ring-gray-500 focus:border-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`select-none w-full py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer 
    ${isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-green-700 text-white"}
  `}
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin" />
                <span>Sending...</span>
              </div>
            ) : (
              "Send Message"
            )}
          </button>


          {status && (
            <p className="text-center text-green-600 font-semibold mt-2">
              {status}
            </p>
          )}
        </form>
      </div>

      <div className="my-2" ref={iconsRef}>
        <div className="flex justify-between items-center max-sm:gap-4 sm:gap-12 p-4 md:text-xl font-bold text-slate-600 select-none">
          <a
            href="https://www.linkedin.com/in/nishant-sapkal2304"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center md:gap-2 hover:text-blue-600 transition"
          >
            <SocialIcons src="/icons8-linkedin-48.png" alt="LinkedIn" />
          </a>

          <a
            href="https://github.com/nishant23042002"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center md:gap-2 hover:text-gray-800 transition"
          >
            <SocialIcons src="/icons8-github-30.png" alt="GitHub" />
          </a>

          <a
            href="https://twitter.com/Nishant56856119"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center md:gap-2 hover:text-sky-500 transition"
          >
            <SocialIcons src="/icons8-twitter-48.png" alt="Twitter" />
          </a>

          <a
            href="https://www.instagram.com/nishant.sapkal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center md:gap-2 hover:text-sky-500 transition"
          >
            <SocialIcons src="/icons8-instagram-48.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
