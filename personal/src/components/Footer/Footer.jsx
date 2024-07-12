import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { FaMediumM } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BsSubstack } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div className=" flex justify-between items-center mb-6">
        <div name="Socials" className=" flex gap-6">
          <a href="https://www.linkedin.com/in/tayyebbutt/">
            <FaLinkedin className="" size={20} />
          </a>
          <a href="https://www.youtube.com/channel/UCLKaS8eN2OOkgxTTbF7snVw">
            <TiSocialYoutube className="" size={20} />
          </a>
          <a href="https://medium.com/@tayyebbutt1">
            <FaMediumM className="" size={20} />
          </a>
          <a href="https://www.instagram.com/tayyeb_butt1/">
            <FaInstagram size={20} />
          </a>
          <a href="https://tayyebsnippets.substack.com/">
            <BsSubstack size={20} />
          </a>
        </div>
        <div>
          <h3 className=" text-xl">
            Build with{" "}
            <span className="text-pink-600 dark:text-primaryDark text-2xl px-1">
              ♡
            </span>
            by{" "}
            <span className=" underline">
              <a href="https://www.linkedin.com/in/tayyebbutt/">Tayyeb Butt</a>
            </span>
          </h3>
        </div>
      <a href="https://www.linkedin.com/in/tayyebbutt/"><h4 className="underline">SAY HELLO</h4></a>  
      </div>
    </>
  );
}
