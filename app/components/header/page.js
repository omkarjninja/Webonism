"use client";
import React from 'react';

const Second = () => {
    return (
        <section className="bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)]">
        <div className="mx-auto sm:px-7 px-4 max-w-screen-xl py-20 flex flex-col">
            <h2 className="font-bold text-2xl md:text-6xl flex flex-col text-center text-white pb-5">
                Our work
            </h2>
            <span className="text-white pb-20 max-w-[600px] mx-auto text-center block pb-20">
            "At Webonism, we don’t just build websites, we create immersive digital experiences that captivate and engage. Whether it's a sleek web app, a dynamic website, or a tailored application, our expert team is committed to bringing your vision to life with innovation and precision. Let us transform your ideas into interactive realities that connect with your audience and drive results."            </span>
          
            { <div className="grid grid-cols-12 gap-4">
                <div onClick={()=> {window.open("https://taskninjaomkar.netlify.app/")}} className="col-span-12 md:col-span-4 rounded transition-all ease-in-out duration-400 hover:rounded-2xl bg-white h-[400px] bg-cover"
      style={{ backgroundImage: "url('/imgs/3.png')" }} >
                </div>
                <div onClick={()=> {window.open("https://endearing-dragon-61ba6d.netlify.app/")}}  className="col-span-12 md:col-span-8 rounded transition-all ease-in-out duration-400 hover:rounded-2xl bg-white h-[400px] bg-cover"
      style={{ backgroundImage: "url('/imgs/2.png')" }} >
                </div>
                <div onClick={()=> {window.open("https://jadhavomkar.netlify.app")}}  className="col-span-12 md:col-span-6 rounded transition-all ease-in-out duration-400 hover:rounded-2xl bg-white h-[400px] bg-cover"
      style={{ backgroundImage: "url('/imgs/1.png')" }} >
                </div>
                <div onClick={()=> {window.open("https://starlit-lokum-187d67.netlify.app/")}}  className="col-span-12 md:col-span-6 rounded transition-all ease-in-out duration-400 hover:rounded-2xl bg-white h-[400px] bg-cover"
      style={{ backgroundImage: "url('/imgs/5.png')" }} >
                </div>
                <div onClick={()=> {window.open("https://omkarjninja.github.io/spotify/")}}  className="col-span-12 md:col-span-6 rounded transition-all ease-in-out duration-400 hover:rounded-2xl bg-white h-[400px] bg-cover"
      style={{ backgroundImage: "url('/imgs/6.png')" }} >
                </div>
                <div onClick={()=> {window.open("https://lucent-truffle-f3de7f.netlify.app/")}}  className="col-span-12 md:col-span-6 rounded transition-all ease-in-out duration-400 hover:rounded-2xl bg-white h-[400px] bg-cover"
      style={{ backgroundImage: "url('/imgs/7.png')" }} >
                </div>
                <div onClick={()=> {window.open("https://omkarj.vercel.app")}}  className="col-span-12 md:col-span-6 rounded transition-all ease-in-out duration-400 hover:rounded-2xl bg-white h-[400px] bg-cover"
      style={{ backgroundImage: "url('/imgs/4.png')" }} >
                </div>
                <div onClick={()=> {window.open("https://cheery-dusk-f66bd4.netlify.app/")}}  className="col-span-12 md:col-span-6 rounded transition-all ease-in-out duration-400 hover:rounded-2xl bg-white h-[400px] bg-cover"
      style={{ backgroundImage: "url('/imgs/8.png')" }} >
                </div>
            </div> }
            <a href="https://jadhavomkar.netlify.app" target='_blank'
                className="inline-block mt-10 mx-auto border-2 px-6 py-2 rounded-lg border-orange-500 hover:bg-white hover:text-orange-500 font-bold bg-orange-600 text-white">
                Visit Portfolio <i className="bi bi-arrow-right pl-1"></i>
            </a>
        </div>
    </section>
    );
};

export default Second;