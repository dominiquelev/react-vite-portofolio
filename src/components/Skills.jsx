import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="container mx-auto px-4 mt-5 text-yellow-400">
      <h1 className="justify-center text-center text-yellow-600 font-extrabold text-5xl mb-4">
        Skills
      </h1>
      <div className=" flex justify-between mb-5 ">
        <IoLogoJavascript size="60px" />
        <SiTypescript size="60px" />
        <FaReact size="60px" />
        <TbBrandNextjs size="60px" />
        <SiTailwindcss size="60px" />
        <FaDocker size="60px" />
        <FaHtml5 size="60px" />
        <FaGitAlt size="60px" />
        <FaGithub size="60px" />
        <SiMysql size="60px" />
        <TbBrandRedux size="60px" />
      </div>
    </div>
  );
};

export default Skills;
