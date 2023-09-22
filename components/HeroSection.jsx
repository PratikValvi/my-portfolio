"use client";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image src="/programming.svg" alt="" width={528} height={528} />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Pratik!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a passionate{" "}
            <span className="font-semibold text-teal-600">
              Software Engineer 👨‍💻{" "}
            </span>
            crafting seamless user experiences through creative coding and
            innovative design 🚀
          </p>
          <div className="flex items-center justiby-between p-4">
            <ScrollLink
              to="projects"
              className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </ScrollLink>
            <a href="https://drive.google.com/file/d/1aQNrq_x6Gctpj1dpLL3VsBHyDtBxs5qR/view?usp=sharing">
              <button className="flex items-center justify-between text-neutral-100 font-semibold px-6 py-3 ml-4 bg-teal-600 rounded shadow hover:bg-teal-700">
                Resume <FaDownload size={18} className="ml-2 animate-bounce" />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <ScrollLink
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </ScrollLink>
      </div>
    </section>
  );
};

export default HeroSection;
