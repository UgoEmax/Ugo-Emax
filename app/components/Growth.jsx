"use client";
import Image from 'next/image';

const Growth = () => {
  return (
    <div className="pt-20 pb-10">
      <h2 className="text-2xl font-bold mb-4 text-amber-400 pb-10">Learning & Growth</h2>
      <p className='tracking-wide pb-5'>As a growing frontend developer, I actively practice by building projects and learning modern tools and best practices. I'm continuously improving my JavaScript skills and deepening my knowledge of React and Next.js while exploring better UI design and performance optimization.</p>
      <Image src="/images/srt-class.jpg" alt='SkillRover class'  width={400} height={300} className="my-4  rounded-3xl pt-3" />
      
    </div>
  )
}

export default Growth
