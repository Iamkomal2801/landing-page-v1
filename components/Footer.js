import React from "react";
import apple from "../asset/apple.svg";
import windowsIcon from "../asset/windowsIcon.svg";
import footerIcon from "../asset/footerIcon.svg";
import { ReactComponent as Logo } from "../asset/LogoIcon.svg";

import  twitter from "../asset/twitter.svg";
import  facebook from "../asset/facebook.svg";
import  Linkedin from "../asset/Linkedin.svg";
const Footer = () => {
  return (
    <>
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto grid gap-6">
        <div></div>
        <h1 className="text-7xl font-bold">
          Try Whitepace
          <br /> today
        </h1>
        <span className="text-2xl font-normal">
          Get started for free.
          <br />
          Add your whole team as your needs grow.
        </span>
        <div>
          <a
            href="#"
            className={`  border bg-[#4F9CF9] border-none text-white  hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg 
      text-base px-5 py-2.5 text-center`}
          >
            Get Started
          </a>
        </div>
        <span>On a big team? Contact sales</span>

        <windowsIcon />
        <div className="flex justify-center gap-8 ">
          <img src={apple} />
          <img src={windowsIcon} />
          <img src={footerIcon} />
        </div>
      </div>
      <div className="container max-w-screen-xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="flex flex-col justify-start items-start">
          <div className="flex gap-2">
            <Logo />
            <h4 className="font-bold text-lg mb-4">whitepace</h4>
          </div>
          <div className="-ml-2">
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </div>
        </div>
        <div>
          <h5 className="font-bold mb-2">Product</h5>
          <ul>
            <li>overview</li>

            <li>Pricing</li>
            <li>Customer stories</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Resources</h5>
          <ul>
            <li>Blog</li>
            <li>Guides & tutorials</li>
            <li>Help center</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-2">Company</h5>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Media kit</li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h5 className="font-bold mb-4">Try It Today</h5>
          <ul>
            <li>
              Get started for free. Add your whole team as your needs grow.
            </li>
          </ul>
          <a
            href="#"
            className={` mt-4 border bg-[#4F9CF9] border-none text-white  hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg 
      text-base px-5 py-2.5 text-center`}
          >
            Get Started
          </a>
        </div>
        
      </div>
    </footer>
    <div className="bg-blue-900 text-white container  border border-t-2 border-[#2E4E73]">
    <div className="container max-w-screen-xl mx-auto flex items-center justify-between py-4 ">
    {/* Logo */}
    <div className='flex items-center gap-2'>
    {/* <Logo/> */}
    <h1 className="text-2xl font-bold">English</h1>
    </div>
    {/* Menu */}
    <ul className="hidden md:flex space-x-8 text-sm">
      <li className="hover:underline cursor-pointer">Terms & privacy</li>
      <li className="hover:underline cursor-pointer">Security</li>
      <li className="hover:underline cursor-pointer">Status</li>
      <li className="hover:underline cursor-pointer">©2021 Whitepace LLC.</li>
    </ul>
    {/* Buttons */}
    <div className="flex space-x-4">
        <img src={twitter}/>
        <img src={facebook}/>
        <img src={Linkedin}/>
    </div>
  </div>
  </div>
  </>
  );
};

export default Footer;
