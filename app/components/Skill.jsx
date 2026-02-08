'use client';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";

const Skill = () => {
  return (
    <div className='pt-20 pb-10'>
      <h3 className='text-2xl font-bold mb-4 pb-10 text-amber-400'>Skills & Technologies</h3>

      <div className="flex flex-wrap gap-10 text-6xl justify-center items-center text-center text-gray-300">

      <div className="flex flex-col items-center">
        <FaHtml5 />
        <p className="text-xl text-center">HTML5</p>
      </div>

      <div className="flex flex-col items-center">
        <IoLogoCss3 />
        <p className="text-xl text-center">CSS3</p>
      </div>

      <div className="flex flex-col items-center">
        <RiJavascriptFill />
        <p className="text-xl text-center">JavaScript</p>
      </div>

      <div className="flex flex-col items-center">
        <FaGithub />
        <p className="text-xl text-center">GitHub</p>
      </div>

      <div className="flex flex-col items-center">
        <RiNextjsFill />
        <p className="text-xl text-center">Next.js</p>
      </div>

      <div className="flex flex-col items-center">
        <RiTailwindCssFill />
        <p className="text-xl text-center">Tailwind CSS</p>
      </div>

      <div className="flex flex-col items-center">
        <DiResponsive />
        <p className="text-xl text-center">Responsive Design</p>
      </div>

     </div>
    </div>
  )
}

export default Skill
