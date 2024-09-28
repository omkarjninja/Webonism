"use client";
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Example icons
import { db } from "../../../firebase/firebaseConfig"  // Adjust the path as per your project structure
import { collection, addDoc } from "../../../firebase/firebaseConfig";
import { useState } from 'react';
import Alertcomp from '../alert';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Add form data to Firebase Firestore
      await addDoc(collection(db, 'contacts'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(),
      });

      console.log('Your message has been sent successfully!');
      alert('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });  // Reset the form
      
    } catch (error) {
      console.log('Error sending message. Please try again later.');
    
    }
  }
  return (
    <section className="p-4 py-20" id="contact">
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full" style={{ backgroundImage: "url('/imgs/3.png')" }}>
                <Image
                  src="/imgs/12.png"
                  alt="ContactUs tailwind section"
                  className="w-full h-full lg:rounded-l-2xl rounded-2xl bg-blend-multiply"
                  layout="fill" // Make sure the image fits the container
                  objectFit="cover"
                />
                <h1 className="font-manrope text-black text-4xl font-bold leading-10 absolute top-11 left-11">
                  Contact us
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-6 block">
                    <a href="tel:+91 7892264908" className="flex items-center mb-6" >
                      <FaPhoneAlt />
                      <h5 className="underline text-black text-base font-normal leading-6 ml-5">7892264908</h5>
                    </a>
                    <a href="mailto:webonismstudio@gmail.com" target='__blank' className="flex items-center mb-6">
                      <FaEnvelope />
                      <h5 className="underline text-black text-base font-normal leading-6 ml-5">ojadhav250@gmail.com</h5>
                    </a>
                    <a href="#" className="flex items-center">
                      <FaMapMarkerAlt />
                      <h5 className="underline text-black text-base font-normal leading-6 ml-5">
                         Bangalore , Karntaka , India 
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="font-manrope text-4xl font-semibold leading-10 mb-11">Send Us A Message</h2>
           
            <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 border border-black focus:outline-none p-4 mb-10"
              name='name'
              placeholder="Name" required
              value={formData.name}
            onChange={handleChange}
            />
            <input
              type="email"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 border border-black focus:outline-none p-4 mb-10"
              name='email'
              placeholder="Email" required
              value={formData.email}
            onChange={handleChange}
            />
            <textarea
              className="max-h-[200px] w-full text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 border border-black focus:outline-none p-4 mb-10"
              name='message'
              placeholder="Message" 
              value={formData.message}
            onChange={handleChange}
            />
            <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 bg-black shadow-sm">
              Send
            </button>
            </form>
           
          </div>
        </div>
      </div>
    </section>
  );
}
