import React from "react";
import { projects } from "../../data";
import { PinContainer } from "./ui/pinContainer";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const RecentProject = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small Selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[570px]  w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[4-vh]  mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src="/bg.png" fill alt="bg-img" />
                </div>
                <Image
                  src={img}
                  alt={title}
                  width={450}
                  height={300}
                  className="z-10 absolute bottom-0 rotate-2"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-lg lg:font-normal font-light text-sm ">
                {des}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row items-center justify-between mt-7 mb-3">
                <div className="flex items-center ms-8">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px` }}
                    >
                      <Image
                        src={icon}
                        alt={icon}
                        width={35}
                        height={35}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="lg:text-xl md:text-xs text-sm text-purple ">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3 mt-1" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProject;
