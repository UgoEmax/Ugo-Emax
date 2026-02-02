import Image from 'next/image';

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center pt-30 pb-10'>
      <h3 className="text-2xl font-bold mb-4 pb-5 text-amber-400">About Me</h3>
      <p className="max-w-2xl tracking-wide text-left">I am a frontend web developer with hands-on experience building web projects using HTML, CSS, JavaScript, and Next.js. I started my journey through structured training, where I built practical projects that strengthened my understanding of responsive design, interactivity, and modern frontend workflows. I'm detail-oriented, eager to learn, and focused on writing clean, maintainable code. My goal is to grow as a developer while contributing to meaningful digital experiences.</p>

      <Image src="/images/form-code.jpg" alt='Code Image' width={400} height={300} className="my-4 rounded-3xl pt-5" />
    </div>
  )
}

export default About
