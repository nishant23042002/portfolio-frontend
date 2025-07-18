// src/components/Header.jsx
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 px-6 py-3 text-slate-200 bg-gradient-to-r from-blue-950 border-b-2 via-blue-900 to-slate-900">


      <div className="relative flex justify-between items-center p-3">
        <h1 className="text-2xl text-slate-200 font-bold">PORTFOLIO</h1>
        <nav>
            <ul className="min-[1000px]:flex gap-6 font-medium min-[850px]:text-xl max-[711px]:hidden">
                <a href='#intro' className='cursor-pointer hover:bg-sky-500 px-3 rounded-xl duration-200'>Introduction</a>
                <a href="#about" className='cursor-pointer hover:bg-sky-500  px-3 rounded-xl duration-200'>About</a>
                <a href="#skills" className='cursor-pointer hover:bg-sky-500  px-3 rounded-xl duration-200'>Skills</a>
                <a href='#projects' className='cursor-pointer hover:bg-sky-500 px-3 rounded-xl duration-200'>Projects</a>
                <a href='#certifications' className='cursor-pointer hover:bg-sky-500 px-3 rounded-xl duration-200'>Certifications</a>
                <a href='#contact' className='cursor-pointer hover:bg-sky-500 px-3 rounded-xl duration-200'>Contact</a>
            </ul>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="min-[711px]:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-15 w-full left-0 min-[711px]:hidden text-slate-200  bg-gradient-to-r from-slate-900 via-sky-900 to-slate-900 justify-end items-center py-4 font-semibold rounded-2xl flex flex-col gap-3">
          <a href="#intro" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#certifications" onClick={() => setIsOpen(false)}>Certifications</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
