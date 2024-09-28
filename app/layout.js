// app/layout.js
import './globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from 'next/image';
export const metadata = {
  title: 'Agency',
  description: 'A Parisian creative agency',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className="bg-pattern">
        <header>
          <div className="mx-auto sm:px-7 px-4 max-w-screen-xl pt-10 pb-20">
            <div className="grid grid-cols-12 gap-4 md:gap-4 items-center">
              <div className="col-span-12 md:col-span-4 flex md:block">
                <span className="text-sm inline-block max-w-[50%] mx-auto md:mr-0 text-center md:text-left">
                  A creative agency
                </span>
              </div>
              <div className="col-span-12 md:col-span-4 flex">
                <a href="" className="text-5xl  mx-auto  tity">
                  <p className='tity'>Webonism</p>
                </a>
              </div>
              <div className="col-span-12 md:col-span-4 flex">
                <a
                  href="mailto:webonismstudio@gmail.com?subject=Booking a Free demo and Meeting Webonism" target='_blank'
                  className="border-2 px-6 py-2 rounded-lg border-orange-500 hover:bg-white hover:text-orange-500 font-bold bg-orange-500 text-white mx-auto md:ml-auto md:mr-0"
                >
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </header>
       
        <section>
            <div className="flex flex-col gap-10 mx-auto sm:px-7 px-4 max-w-screen-xl py-10 md:py-28">
                <h1 data-aos="fade-up" data-aos-delay="500" className="text-2xl md:text-6xl flex flex-col text-center">
                    <span>Where Vision Meets Innovation </span>
                    <strong>Elevating Your Digital Presence</strong>
                    
                </h1>
                {/* <div data-aos="fade-left" data-aos-delay="1000"
                    className="flex gap-5 ml-auto items-center mt-10 bg-slate-100 p-2 rounded-xl">
                    <Image className="w-[80px] rounded-full" src="/imgs/LB_arrondi.png" alt="" width="300" height="300"/>
                    <i className="text-sm max-w-[200px]">
                        " Launch <span className="text-purple-600 font-bold">Your Dream Project !</span>
                         Why just hire any agency when you can experience one? See the work that speaks for itself—and meet the team that's behind it all."
                    </i>
                </div> */}
            </div>
        </section>
        {/* <div className=''>
          <center>
        <div className="flex gap-4  text-center ">
                    <a href=""
                        className="text-sm md:text-base bg-white border rounded font-bold py-2 px-6 hover:bg-gray-50">Book a
                        demo</a>
                    <a href=""
                        className="text-sm md:text-base bg-orange-500 border border-orange-500 rounded text-white font-bold py-2 px-6 hover:bg-orange-600">Get
                        started - it's free</a>
                </div>
        </center>
                <div className="flex flex-wrap flex-row justify-center gap-4">
                    <small>
                        <i
                            className="mr-1 bi bi-check bg-orange-100 border border-orange-200 rounded-full w-[21px] h-[21px] inline-block text-center text-orange-600"></i>
                        <span>Lifetime free plan</span>
                    </small>
                    <small>
                        <i
                            className="mr-1 bi bi-check bg-orange-100 border border-orange-200 rounded-full w-[21px] h-[21px] inline-block text-center text-orange-600"></i>
                        <span>No credit card needed</span>
                    </small>
                    <small>
                        <i
                            className="mr-1 bi bi-check bg-orange-100 border border-orange-200 rounded-full w-[21px] h-[21px] inline-block text-center text-orange-600"></i>
                        <span>Support 24/24 - 7/7</span>
                    </small>
                </div>
        </div> */}
         <section className="relative">
        <div className="z-10">
            <div className="mx-auto max-w-5xl px-6 md:px-2 flex flex-col gap-6 items-center pb-10">
                <div className="flex gap-4 items-center text-center">
                    <a 
                    href="mailto:webonismstudio@gmail.com?subject=Booking a Free demo and Meeting Webonism" target='_blank'

                        className="text-sm md:text-base bg-white border rounded font-bold py-2 px-6 hover:bg-gray-50">Book a
                        demo - its Free</a>
                    <a href="#contact"
                        className="text-sm md:text-base bg-orange-500 border border-orange-500 rounded text-white font-bold py-2 px-6 hover:bg-orange-600">Get
                        started </a>
                </div>
                <div className="flex flex-wrap flex-row justify-center gap-4">
                    <small>
                        <i
                            className="mr-1 bi bi-check bg-orange-100 border border-orange-200 rounded-full w-[21px] h-[21px] inline-block text-center text-orange-600"></i>
                        <span>Lifetime Updates</span>
                    </small>
                    <small>
                        <i
                            className="mr-1 bi bi-check bg-orange-100 border border-orange-200 rounded-full w-[21px] h-[21px] inline-block text-center text-orange-600"></i>
                        <span>Transform Your Vision Into Reality</span>
                    </small>
                    <small>
                        <i
                            className="mr-1 bi bi-check bg-orange-100 border border-orange-200 rounded-full w-[21px] h-[21px] inline-block text-center text-orange-600"></i>
                        <span>Support 24 x 7</span>
                    </small>
                </div>
            </div>
        </div>

        <div className="-z-10 absolute top-0 w-full h-[200px] bg-gradiant">

        </div>
    </section>
       
        </div>
        {children}
       
      </body>
    </html>
  );
}
 