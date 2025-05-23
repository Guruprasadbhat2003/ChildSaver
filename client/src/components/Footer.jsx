import React from "react";
import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-40" />
      </div>

      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <a href="/home" className="text-white text-base text-center mx-2 cursor-pointer">Home</a>
        <a href="/donate" className="text-white text-base text-center mx-2 cursor-pointer">Donate</a>
        <a href="#services" className="text-white text-base text-center mx-2 cursor-pointer">Services</a>
        <a href="#donations" className="text-white text-base text-center mx-2 cursor-pointer">Latest Donations</a>
      </div>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@2025 4CB22CS157 & 4CB22CS158</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
