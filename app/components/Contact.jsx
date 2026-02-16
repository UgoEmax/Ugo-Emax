"use client";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

const Contact = () => {
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
    <div className="pt-20 pb-10 md:pt-50 md:grid justify-center" id="contact">
      <div className="md:max-w-3xl md:pb-20">
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

      <div className="flex space-x-8 mt-4 text-4xl text-amber-200 justify-center pt-10 md:space-x-12">
      <Link href="https://www.facebook.com/ugo.hemmy" target="_blank"><FaFacebook /></Link>
      <Link href="https://www.linkedin.com/in/ugo-ehemmy-700215248/" target="_blank"><FaLinkedin /></Link>
      <Link href="https://wa.me/2348103695793" target="_blank"><IoLogoWhatsapp /></Link>
      <a href="mailto:ugohemmy@gmail.com"><MdEmail /></a>
      </div>
    </div>
  )
}

export default Contact
