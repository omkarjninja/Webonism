"use client"
import { useState } from 'react';
import { db } from '../../../firebase/firebaseConfig';  // Firebase setup
import { collection, addDoc } from 'firebase/firestore';


export default function Footer() {
    const [email, setEmail] = useState('');
    const handleChange = (e) => {
        setEmail(e.target.value);
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Add email to Firestore
          await addDoc(collection(db, 'newsletter_subscribers'), {
            email: email,
            subscribedAt: new Date(),
          });
    
          console.log('Email added to Firestore');
          alert('You have successfully subscribed to the newsletter!'); 
          
          // Reset email input
          setEmail('');
    
          // Hide the alert after 5 seconds
         
    
        } catch (error) {
         console.error('Error adding email to Firestore: ', error);
          
          
          // Hide the alert after 5 seconds
        }
        }
    return (
        <footer className="bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)] mt-12">
        <div className="max-w-screen-xl sm:px-7 px-4 py-10 lg:py-20 mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                <div className="sm:col-span-2">
                    <h2 className="max-w-lg text-xl font-semibold tracking-tight text-gray-200 xl:text-2xl">Subscribe our newsletter to get update.</h2>
                    <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                        <form onSubmit={handleSubmit}>
                        <input  type="email"
            value={email}
            onChange={handleChange}
            required
                            className="px-4 py-2 text-gray-700 bg-white border focus:outline-orange-600 rounded-full"
                            placeholder="Email Address" />

                        <button
                            className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transform md:w-auto md:mx-4 bg-orange-600 rounded-full ">
                            Subscribe
                        </button>
                        </form>
                    </div>
                </div>

                <div>
                    <p className="font-semibold text-gray-100 ">Quick Link</p>

                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" className="text-gray-200 hover:underline hover:text-orange-600">Home</a>
                        <a href="#about" className="text-gray-200 hover:underline hover:text-orange-600">Who We Are</a>
                        <a href="#us" className="text-gray-200 hover:underline hover:text-orange-600">Our Philosophy</a>
                    </div>
                </div>

                <div>
                    <p className="font-semibold text-gray-200 ">Industries</p>

                    <div className="flex flex-col items-start mt-5 space-y-2">
                        <a href="https://prisync.com/blog/future-retail-vs-ecommerce/" target='__blank' className="text-gray-100 hover:underline hover:text-orange-600">Retail & E-Commerce</a>
                        <a href="https://www.techbusinessnews.com.au/blog/impact-of-the-internet-on-modern-society/" target='__blank'  className="text-gray-100 hover:underline hover:text-orange-600">Information
                            Technology</a>
                        <a href="https://captivatedesigns.com/how-can-a-website-impact-your-business/"  target='__blank'   className="text-gray-100 hover:underline hover:text-orange-600">Web & Buisness</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )}
