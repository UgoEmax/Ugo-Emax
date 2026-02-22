"use client";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

   useGSAP(() => {
      
          const element = document.querySelectorAll(".link-animate");
          
          gsap.from('.contact-animate', {
            opacity: 0.3, y: 80, duration: 1, stagger: 0.3, ease: "power2.out",
            scrollTrigger: {
              trigger: ".contact-section", start: "top 100%", toggleActions: "play none none reset",
            }
          })

          gsap.from(element, {
            opacity: 0, x: 30, duration: 1.5, stagger: 0.5, ease: "power2.out",
            scrollTrigger: {
              trigger: ".link-section", start: "top 80%", toggleActions: "play none none reset",
            }
          })
        }, [])

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ success, setSuccess ] = useState(false)
    const [ error, setError ] = useState(false)

    const validateForm = (e) => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!email.includes('@') || !email.includes('.')) {
            newErrors.email = "Enter a Valid Email";
        }
        if (!message.trim()) {
            newErrors.message = "Message is required";
        }
        
        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;
        e.target.submit();

        if (validateForm()) {
            setSuccess("Form Submitted Successfully!");
            setName('');
            setEmail('');
            setMessage('');
        }
    }

  return (
    <div className="pt-10 pb-20 md:grid justify-center" id="contact">
      <div className="md:max-w-3xl md:pb-20 contact-section contact-animate">
      <h2 className="text-2xl font-bold mb-4 text-amber-400 md:pb-4 md:text-center">Contact Me</h2>
      <p className='tracking-wider md:text-[1.1rem] md:leading-relaxed]'>I'm open to internship opportunities, junior frontend roles, collaborations, and freelance projects. Feel free to send me a message </p>

      <div className="mt-10">
      <form action="https://formsubmit.co/28481391347b8dfe4421014691f1a276" method="POST" onSubmit={handleSubmit}>
        <input type="hidden" name="_next" value="/thank-you" />
        <input type="hidden" name="_template" value="table" />
        <div className="mb-4">
          <label htmlFor="name" className="block text-amber-200 mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-amber-400 text-white outline-none"
          />
          {error.name && <p className="text-red-500">{error.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-amber-200 mb-2">Email</label>
          <input
            type="text"
            placeholder="Enter Your Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-amber-400 text-white outline-none"
          />
          {error.email && <p className="text-red-500">{error.email}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-amber-200 mb-2">Message</label>
          <textarea
            id="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full p-2 rounded bg-gray-800 border border-amber-400 text-white outline-none"
          ></textarea>
          {error.message && <p className="text-red-500">{error.message}</p>}
        </div>

        <button type="submit" className='bg-amber-700 cursor-pointer  hover:bg-amber-600 text-white py-2 px-4 rounded active:scale-95 active:translate-y-0.5 transition-all duration-150'>Send Message</button>
      </form>
      </div>

      {success && (
        <div className='mt-4 p-3 bg-green-600 text-white rounded'>
          {success}
        </div>
      )}
      </div>

      <div className="flex space-x-8 mt-4 text-4xl text-amber-200 justify-center pt-10 md:space-x-12 link-section">
      <Link href="https://www.facebook.com/ugo.emax" target="_blank" className="link-animate"><FaFacebook /></Link>
      <Link href="https://www.linkedin.com/in/emmanuel-ugochukwu-44885a191/" target="_blank" className="link-animate"><FaLinkedin /></Link>
      <Link href="https://wa.me/qr/QFGCPN2FLS5SK1" target="_blank" className="link-animate"><IoLogoWhatsapp /></Link>
      <a href="mailto:ugohemmy@gmail.com" className="link-animate"><MdEmail /></a>
      </div>
    </div>
  )
}

export default Contact
