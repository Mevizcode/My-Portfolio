/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, subject, message } = formData;

    if (name && subject && message) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          e.target,
          import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then((response) => {
          console.log('Message sent successfully:', response);

          alert('Message sent successfully!');
          setFormData({ name: "", subject: "", message: "" })
        })
        .catch((error) => {
          console.error('Error sending message:', error);
          alert('Something went wrong. Please try again.');
        });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
              <a href="mailto:davidsamcole69@gmail.com" className='hover:underline'>
                davidsamcole69@gmail.com
              </a>
            </div>
            <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
              <span><a href="tel:+23275299053" className='hover:underline'>+23275299053{" / "}</a></span>
              <span><a href='tel:+8613235989173' className='hover:underline'>+8613235989173</a></span>
            </div>
            <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
              <span>Freetown, Sierra Leone</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                  placeholder='Enter You Name' />
              </div>
              <div>
                <label htmlFor="subject" className='block mb-2'>Email</label>
                <input type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                  placeholder='Enter Subject' />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                  rows="5"
                  placeholder='Enter You Message' />
              </div>
              <button type='submit' className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact