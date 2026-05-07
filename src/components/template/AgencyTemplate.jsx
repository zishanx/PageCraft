export default function Agency({ content }) {
    return (
        <>
            <nav className="bg-slate-900 px-5 py-8 flex justify-between items-center relative text-blue-400">
                <h2 className="font-bold text-2xl">{content.brand}</h2>
                <ul className="hidden md:flex gap-5 absolute left-1/2 transform -translate-x-1/2 text-gray-400 text-center">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="justify-end">
                    <button className=" bg-white text-blue-400 border-none rounded-md font-bold px-4 py-2">Talk to us</button>
                </div>
            </nav>

            <section className="py-32 md:py-40 px-10 md:px-30">
                <div className="flex flex-col gap-8 text-center justify-center items-center">
                    <h1 className="text-5xl font-bold text-blue-400">{content.headline}</h1>
                    <p className="text-gray-400">{content.subtext}</p>
                    <button className="bg-white text-blue-400 font-bold px-3 py-2 w-fit rounded-md">{content.cta}</button>
                </div>
            </section>

            <section id="services" className="py-10 px-10 md:px-30 bg-slate-900 w-full">
                <h1 className="text-white-400 text-3xl font-bold mb-10">Features</h1>
                <div id="cards" className="flex flex-col md:flex-row text-white-700 items-stretch justify-center text-center gap-10">
                    <div id="card" className="bg-slate-700 p-5 rounded flex flex-col gap-4 w-full ">
                        <span className="text-4xl">💻</span>
                        <h2 className="text-2xl font-bold">{content.service1Title}</h2>
                        <p className="text-gray-500">{content.service1Desc}</p>
                    </div>
                    <div id="card" className="bg-slate-700 p-5 rounded flex flex-col gap-4 w-full ">
                        <span className="text-4xl">🎨</span>
                        <h2 className="text-2xl font-bold">{content.service2Title}</h2>
                        <p className="text-gray-500">{content.service2Desc}</p>
                    </div>
                    <div id="card" className="bg-slate-700 p-5 rounded flex flex-col gap-4 w-full ">
                        <span className="text-4xl">🧠</span>
                        <h2 className="text-2xl font-bold">{content.service3Title}</h2>
                        <p className="text-gray-500">{content.service3Desc}</p>
                    </div>
                </div>
            </section>

            <section id="#work" className="hidden md:block py-10 px-10 md:px-30 bg-slate-900 w-full">
                <h2 className="text-white-400 text-2xl font-bold mb-10">Trusted by leading companies</h2>
                <div className="flex justify-between font-bold text-gray-400 text-3xl">
                    <div>{content.client1}</div>
                    <div>{content.client2}</div>
                    <div>{content.client3}</div>
                    <div>{content.client4}</div>
                </div>
            </section>

            <section id="testimonial" className="py-10 px-10 md:px-30 bg-slate-900 text-white-700 w-full">
                <h1 className="text-white text-3xl font-bold mb-10">Testimonial</h1>
                <div className="border-l-4 border-blue-500 p-5 shadow-xl flex flex-col gap-2 w-fill bg-slate-800">
                    <p className="italic">"{content.testimonialQuote}"</p>
                    <p className=""><span className="font-bold">-{content.testimonialName}, </span><span className="text-gray-400">{content.testimonialRole}</span></p>
                </div>
            </section>
            <section id="contact" className="bg-blue-800 px-6 md:px-30 py-20">

                <div className=" text-center flex flex-col gap-6  items-center">
                    <h2 className="text-2xl  md:text-4xl font-bold">{content.ctaBannerHeading}</h2>
                    <p>{content.ctaBannerSub}</p>
                    <button className="bg-white text-black px-6 py-3 rounded w-fit mx-auto">{content.ctaBannerBtn}</button>
                </div>

            </section>


            <footer className="p-8 bg-stone-50 text-slate-700 w-full">
                <p className="text-center">{content.footer}</p>
            </footer>
        </>
    )
}