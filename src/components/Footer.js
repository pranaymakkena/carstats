import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-violet-900 to-black text-white py-8 mt-8 shadow-inner">
      <div className="container mx-auto text-center">
        <p className="text-sm font-light opacity-80 hover:opacity-100 transition-opacity duration-300">
          &copy; {new Date().getFullYear()} Car Stats. All rights reserved.
        </p>
        <p className="text-sm font-light opacity-80 hover:opacity-100 transition-opacity duration-300 mt-2">
          Built with ❤️ using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
