import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Projects() {
  const projects = [
    {
      title: "YouTube Clone",
      image: "./src/assets/homepage.png",
      description: "A full-featured video platform built with MERN stack allowing users to upload, comment ...more",
      live: "#",
      github: "https://github.com/nishant23042002/Youtube_Clone-Frontend"
    },
    {
      title: "ShoppyGlobe",
      image: "./src/assets/shoppyglobe.png",
      description: "An e-commerce platform with filtering, cart, Stripe payments, and order tracking using MERN stack.",
      live: "#",
      github: "https://github.com/nishant23042002/MERN-ShoppyGlobe-Frontend"
    },
    {
      title: "Live Chat App",
      image: "./src/assets/chatapp.png",
      description: "Real-time chat app using Socket.IO and Node.js with dynamic room creation and message broadcasting.",
      live: "#",
      github: "https://github.com/nishant23042002/Socket.IO-ChatApp" 
    },
    {
      title: "Expenses Tracker",
      image: "./src/assets/expenses.png",
      description: "Track daily expenses and visualize them with charts. Built using MERN stack and Chart.js.",
      live: "#",
      github: "https://github.com/nishant23042002/MERN-Expense-Tracker"
    }
  ];

  return (
    <section
      id="projects"
      className="px-6 py-12 bg-gray-50 flex flex-col items-center justify-center mx-auto h-[100vh] bg-gradient-to-r from-blue-900 via-slate-900 to-gray-900"
    >
      <h2 className="text-4xl font-bold mb-12 text-sky-600 text-center">
        My Projects
      </h2>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-7xl"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg shadow p-2 m-2 min-h-85 bg-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-46 object-contain rounded-t-md select-none"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-slate-200 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-200 mb-4">{project.description}</p>
                <div className="flex justify-between text-sm text-blue-500">
                  <a href={project.live} target="_blank" className="hover:underline">Live Demo</a>
                  <a href={project.github} target="_blank" className="hover:underline">GitHub</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
