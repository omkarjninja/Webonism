import Image from "next/image";
const Fourth = () => {
  return (
  <section className="px-0 py-12 mx-auto max-w-7xl sm:px-4">
    <div className="mx-auto max-w-7xl py-20 lg:px-8">
            <div
                className="relative isolate overflow-hidden bg-orange-400 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                    <h2 className="text-xl font-bold tracking-tight text-white sm:text-4xl">Elevate Your Digital Presence. <br />Partner with Webonism Today.</h2>
                    <p className="mt-6 text-lg leading-8 text-white">At Webonism, we craft bespoke websites and web apps that enhance your digital impact. Let’s create something extraordinary together.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                        <a href="#contact"
                            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get
                            started</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white">Learn more <span
                                aria-hidden="true">→</span></a>
                    </div>
                </div>
                <div className="relative h-80 mt-24">
                    <Image className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                        src="/imgs/10.png"
                        alt="App screenshot" width="1824" height="1080" />
                </div>
            </div>
        </div>
</section>
)}
export default Fourth;