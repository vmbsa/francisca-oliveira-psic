import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-28 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="h-20 w-auto" />
          <div className="flex flex-col items-start">
            <span className="font-heading text-[#50311D] text-2xl font-normal">
              FRANCISCA OLIVEIRA
            </span>
            <span className="font-heading font-semibold text-[#50311D] text-md">
              Psicóloga Clínica
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#about-me"
            className="text-[#50311D] hover:text-[#805C3B] transition-colors"
          >
            Sobre Mim
          </a>
          <a
            href="#footer"
            className="text-[#50311D] hover:text-[#805C3B] transition-colors"
          >
            Contactos
          </a>
          <a
            href="https://docs.google.com/forms/d/1gelG6bb5q5cFLBGHRkJlcydtJFheVEpfUz_m81ljJjg/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#50311D] text-[#D4CABC] px-4 py-2 rounded-md font-semibold hover:bg-[#7A5C48] transition"
          >
            Agende uma sessão
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#50311D] transition-transform duration-300"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 6L18 18M6 18L18 6"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          <a
            href="#about-me"
            className="text-[#50311D] hover:text-[#805C3B] transition-colors"
            onClick={closeMenu}
          >
            Sobre Mim
          </a>
          <a
            href="#footer"
            className="text-[#50311D] hover:text-[#805C3B] transition-colors"
            onClick={closeMenu}
          >
            Contactos
          </a>
          <a
            href="https://docs.google.com/forms/d/1gelG6bb5q5cFLBGHRkJlcydtJFheVEpfUz_m81ljJjg/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#50311D] text-white px-4 py-2 rounded-md hover:bg-[#805C3B] transition"
            onClick={closeMenu}
          >
            Agende uma sessão
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;