import Projects from "./Projects"

const ProjectProp = () => {
  return (
    <div className="pt-25 pb-10">
        <h3 className='text-2xl font-bold mb-4 text-amber-400 text-center'>Projects</h3>

      <Projects 
     Heading="Frontend Practice Project"
     Paragraph="This project was built during my frontend training using HTML, CSS, and JavaScript. It focuses on creating a responsive layout and adding basic interactivity with JavaScript. Through this project, I improved my understanding of DOM manipulation, layout structure, and styling best practices."
     Tech={[
      "HTML", "CSS", "JavaScript"
     ]}
     Images="/images/aeris.jpg"
     Button="https://aerislandingpage.netlify.app"
     Button1="https://github.com/UgoEmax/aeris-studio.git"
     />

     <Projects 
     Heading="Next.js Practice Project"
     Paragraph="This project was built using Next.js to explore modern React-based development. It demonstrates component-based architecture, routing, and improved performance through Next.js features. This project helped me understand how modern frontend frameworks are used in real-world applications."
     Tech={[
      "Next.js", "JavaScript", "TailwindCSS", "framer-motion"
     ]}
     Images="/images/maximum-home.jpg"
     Button="https://maximumhomes.vercel.app/"
     Button1="https://github.com/UgoEmax/Maximum-homes.git"
     />
    </div>
  )
}

export default ProjectProp
