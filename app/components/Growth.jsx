"use client";
import Image from 'next/image';

const Growth = () => {
  return (
    <div className="pt-30 pb-10 flex flex-col items-center justify-center" id='growth'>
      <div className='md:flex md:flex-row md:gap-25'>
      <div className='md:max-w-xl md:translate-y-15'>
      <h2 className="text-2xl font-bold mb-4 text-amber-400 pb-10 md:text-center">Learning & Growth</h2>
      <p className='tracking-wide pb-5 md:text-[1.1rem] md:leading-relaxed md:tracking-wider'>As a growing frontend developer, I actively practice by building projects and learning modern tools and best practices. I'm continuously improving my JavaScript skills and deepening my knowledge of React and Next.js while exploring better UI design and performance optimization.</p>
      </div>

      <div className='flex justify-center'>
      <Image src="/images/srt-class.jpg" alt='SkillRover class'  width={400} height={300} className="my-4  rounded-3xl pt-3" />
      </div>
      </div>
      
    </div>
  )
}

export default Growth
