import Image from 'next/image'
import React from "react";

const About = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4" id='about'>
            <div className="lg:w-10/12 w-full">
                <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">About</p>
                <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">We are here to make great design accessible and delightfull for everyone</h2>
                <p className="font-normal text-base leading-6 text-gray-600 mt-6">At Webonism, we believe that every business deserves a powerful online presence. Our passion lies in delivering custom web solutions—whether it’s creating dynamic websites, innovative web apps, or unique digital experiences. Our expert team combines creativity with technical expertise to bring your ideas to life, helping you engage your audience and drive growth.</p>
            </div>

            <div className="lg:mt-14 sm:mt-10 mt-12">
                <img className="lg:block hidden w-full h-96" src="https://images.pexels.com/photos/28534977/pexels-photo-28534977/free-photo-of-modern-mechanical-keyboard-under-low-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=350&dpr=2" alt="Group of people Chilling"/>
                <img className="lg:hidden sm:block hidden w-full" src="https://images.pexels.com/photos/28534977/pexels-photo-28534977/free-photo-of-modern-mechanical-keyboard-under-low-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=350&dpr=2" alt="Group of people Chilling" />
                <img className="sm:hidden block w-full" src="https://images.pexels.com/photos/28534977/pexels-photo-28534977/free-photo-of-modern-mechanical-keyboard-under-low-light.jpeg?auto=compress&cs=tinysrgb&w=1260&h=350&dpr=2" alt="Group of people Chilling" />
            </div>

            <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
                <div className="w-full xl:w-5/12 lg:w-6/12">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Story</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-4">Webonism began with a simple idea: to empower businesses by crafting digital experiences that truly connect with people. Founded by a group of passionate developers, designers, and creative thinkers, we wanted to create more than just websites—we wanted to create meaningful, impactful solutions that drive real results for our clients.</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">What started as a small team working out of a shared space has grown into a full-service web agency that’s helped countless businesses find their voice in the digital world. With a focus on innovation, collaboration, and a relentless pursuit of excellence, our journey has been one of growth, learning, and delivering for our clients every step of the way.</p>
                </div>
                {/* <div className="lg:flex items-center w-full lg:w-1/2 ">
                    <img className="lg:block hidden w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="people discussing on board" />
                </div> */}
            </div>
        </div>
    );
};

export default About;
