import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B0F1A]  w-full border-t border-white/10 text-gray-400 min-h-100px flex  flex-col ">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* BRAND */}
        <h2 className="text-lg font-bold text-white">
          Decimal<span className="text-green-400">Tv</span>
        </h2>

        {/* SOCIAL ICONS */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://instagram.com/satyamrathod___"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/satyamrathod45"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-xs text-gray-500 text-center sm:text-right">
          © {new Date().getFullYear()} DecimalTv. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
