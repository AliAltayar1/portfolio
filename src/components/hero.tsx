import { GridBackground } from "./ui/gridBackground";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/textGenerateEffect";
import { MagicButton } from "./ui/magicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-20 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vb] w-[50vb]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vb] w-[50vb]" fill="blue" />
      </div>

      <div>
        <GridBackground />
      </div>

      <div className="flex justify-center relative my-20 z-10 ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Transforming Concepts into Seamless User Experiences"
          />

          <p className=" text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Ali, a Front-End Developer
          </p>

          <a href="#projects">
            <MagicButton title={"SHOW MY WORK"} icon={<FaLocationArrow />} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
