const Third =()=>{
    return(
        <section className="bg-[radial-gradient(145.05%_100%_at_50%_0%,#1D2B41_0%,#020509_57.38%,#0F1A29_88.16%)] text-white" id="us">
        <div className="mx-auto sm:px-7 px-4 max-w-screen-xl py-20 flex flex-col">
            <div className="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
                <div>
                    <h2
                        className="mb-4 text-2xl font-extrabold tracking-tight text-center md:leading-tight sm:text-left md:text-4xl">
                        Yes we do this</h2>
                    <p className="mb-5 text-base text-center text-gray-200 sm:text-left md:text-lg">
                    Whether you need a stunning website or a powerful web app, Webonism has you covered. We specialize in creating bespoke digital solutions that are tailor-made for your business. From sleek designs to seamless user experiences, we make sure your brand stands out online.
                    </p>
                   
                </div>
                <div className="w-full h-full py-48 bg-gray-200"
style={{ backgroundImage: "url('/imgs/4.png')", backgroundSize: "cover", backgroundPosition: "center top" }}>                </div>
            </div>
            <div
                className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
                <div className="order-none md:order-2">
                    <h2
                        className="mb-4 text-2xl font-extrabold tracking-tight text-center md:leading-tight sm:text-left md:text-4xl">
                        And yes we do that</h2>
                    <p className="mb-5 text-base text-center text-gray-200 sm:text-left md:text-lg">
                    Looking for something more? We also offer full-service digital support, from ongoing maintenance to performance optimization. Whether it’s boosting your website's speed, improving SEO, or integrating the latest technologies, we ensure your platform runs smoothly and efficiently.
                    </p>
                   
                </div>
                <div className="w-full h-full py-48 bg-gray-200"
style={{ backgroundImage: "url('/imgs/2.png')", backgroundSize: "cover", backgroundPosition: "center top" }}>                </div>
            </div>
        </div>
    </section>
    )
}
export default Third;
// style={{ backgroundImage: "url('/imgs/app1.png')", backgroundSize: "cover", backgroundPosition: "center top" }}>