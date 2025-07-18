import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const certificates = [
  {
    id: 1,
    cert_name: "Full Stack Development",
    cert_from: "Internshala",
    cert_date: "July 2024",
    cert_img: "/fullstack.png",
    cert_pdf: "/fullstack.pdf",
  },
  {
    id: 2,
    cert_name: "Git & GitHub Essentials",
    cert_from: "Internshala",
    cert_date: "July 2024",
    cert_img: "/git.png",
    cert_pdf: "/git.pdf",
  },
  {
    id: 3,
    cert_name: "Design with JavaScript",
    cert_from: "Internshala",
    cert_date: "July 2024",
    cert_img: "/jsdesign.png",
    cert_pdf: "/jsdesign.pdf",
  },
  {
    id: 4,
    cert_name: "Capstone: YouTube Clone",
    cert_from: "Internshala",
    cert_date: "July 2024",
    cert_img: "/capstone.png",
    cert_pdf: "/capstone.pdf",
  }
];


function Certification() {
  const [selectedCertId, setSelectedCertId] = useState(null);

  const toggleCert = (id) => {
    setSelectedCertId(prev => prev === id ? null : id);
  };

  return (
    <section
      id="certifications"
      className="flex flex-col justify-center py-16 px-6 md:px-20 bg-gray-50 text-gray-900 min-h-[100vh] bg-gradient-to-r from-slate-900 via-slate-900 to-blue-900"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center text-sky-600">
        Certifications
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
        {certificates.map((cert) => {
          const isSelected = selectedCertId === cert.id;

          return (
            <SwiperSlide key={cert.id}>
              <div
                className={` bg-slate-800 rounded-2xl p-6 mx-2 transition-all duration-300 ease-in-out ${isSelected ? "  bg-slate-200 z-20 relative" : ""
                  }`}
              >
                <img
                  className={`select-none ${isSelected ? "h-96 w-full" : "h-40 w-full"} object-contain rounded-md mb-4 transition-all duration-300`}
                  src={cert.cert_img}
                  alt={cert.cert_name}
                />
                <div className={`text-slate-200 ${isSelected ? "hidden" : ""}`}>
                  <h3 className="text-xl font-semibold text-slate-200">{cert.cert_name}</h3>
                  <p className=" font-medium">{cert.cert_from}</p>
                  <p className="text-sm  mb-3">{cert.cert_date}</p>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() => toggleCert(cert.id)}
                    className="text-blue-600 font-medium hover:underline cursor-pointer"
                  >
                    {isSelected ? "Hide Certificate" : "Certificate →"}
                  </button>
                  <a
                    href={cert.cert_pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline cursor-pointer"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Certification;
