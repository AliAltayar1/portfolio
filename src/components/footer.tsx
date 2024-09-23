import React from "react";
import { MagicButton } from "./ui/magicButton";
import { FaCopyright, FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "../../data";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full pt-20 pb-10 mb-8 md:mb-0 " id="contact">
      <div className="w-full absolute left-0 -bottom-8 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-100"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col items-center relative z-50">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:ali.altayar.developer@gmail.com">
          <MagicButton title="Lets' get in touch" icon={<FaLocationArrow />} />
        </a>
        <div className="pt-5">
          <p className="flex justify-between items-center gap-3">
            Copyright {<FaCopyright />}
            {currentYear}
            <span>Ali</span>
          </p>

          <div className="flex justify-center items-center gap-3 mt-6">
            {socialMedia.map((profile) => (
              <a
                target="blank"
                href={profile.link}
                key={profile.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <Image
                  src={profile.img}
                  alt={profile.img}
                  width={20}
                  height={20}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
