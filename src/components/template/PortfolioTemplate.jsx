export default function Portfolio({ content }) {
    return (
        <>
            <nav className="bg-stone-50 text-stone-700 py-5 px-3 flex items-center justify-between relative ">
                <h2 className="font-bold text-2xl">{content.brand}</h2>
                <ul className=" hidden absolute left-1/2 transform -translate-x-1/2 md:flex gap-4 text-gray-700 text-center">
                    <li><a href="#work">Work</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div>
                    <button className="border-2 border-stone-700 rounded-md px-5 py-2">{content.cta}</button>
                </div>
            </nav>

            <section className="py-10 px-10  md:px-30 bg-stone-50 w-full ">
                <div className="py-10 flex flex-col gap-8 text-stone-700">
                    <p className="text-gray-500 font-mono">Designer & Developer</p>
                    <h1 className="text-5xl font-bold">{content.headline}</h1>
                    <p className="text-gray-500">{content.subtext}</p>
                    <button className="text-center rounded-lg text-stone-50 bg-stone-700 p-3 w-fit ">{content.cta}</button>
                </div>
            </section>

            <section id="about" className="py-10 px-10 md:px-30 bg-stone-50 w-full">
                <h1 className="text-stone-700 text-3xl font-bold mb-10">Services</h1>
                <div id="cards" className="flex flex-col md:flex-row g-5 text-stone-700 items-stretch justify-center text-center gap-10">
                    <div id="card" className="bg-stone-200 p-5 rounded flex flex-col gap-4 w-full">
                        <span className="text-4xl">💻</span>
                        <h2 className="text-2xl font-bold">{content.service1Title}</h2>
                        <p className="text-gray-500">{content.service1Desc}</p>
                    </div>
                    <div id="card" className="bg-stone-200 p-5 rounded flex flex-col gap-4 w-full">
                        <span className="text-4xl">🎨</span>
                        <h2 className="text-2xl font-bold">{content.service2Title}</h2>
                        <p className="text-gray-500">{content.service2Desc}</p>
                    </div>
                    <div id="card" className="bg-stone-200 p-5 rounded flex flex-col gap-4 w-full">
                        <span className="text-4xl">🧠</span>
                        <h2 className="text-2xl font-bold">{content.service3Title}</h2>
                        <p className="text-gray-500">{content.service3Desc}</p>
                    </div>
                </div>
            </section>

            <section id="work" className="py-10 px-10 md:px-30 bg-stone-50 w-full">
                <h1 className="text-stone-700 text-3xl font-bold mb-10">Projects</h1>
                <div id="projects" className="flex flex-col md:flex-row gap-5 items-center  justify-between w-full">
                    <div className="p-10 bg-stone-900 rounded-md w-full">
                        <h2 className="text-3xl font-bold mb-3">{content.project1Title}</h2>
                        <p className="text-gray-400">{content.project1Desc}</p>
                    </div>
                    <div className="p-10 bg-stone-900 rounded-md w-full">
                        <h2 className="text-3xl font-bold mb-3">{content.project2Title}</h2>
                        <p className="text-gray-400">{content.project2Desc}</p>
                    </div>
                </div>
            </section>
            <section id="testimonial" className="py-10 px-10 md:px-30 bg-stone-50 text-stone-700 w-full">
                <h1 className="text-stone-700 text-3xl font-bold mb-10">Testimonial</h1>
                <div className="border-l-2 border-stone-500 p-5 shadow flex flex-col gap-2 w-fill">
                    <p className="italic">"{content.testimonialQuote}"</p>
                    <p className=""><span className="font-bold">-{content.testimonialName}, </span><span className="text-gray-400">{content.testimonialRole}</span></p>
                </div>
            </section>
            <section id="contact" className="bg-stone-700 px-6 md:px-30 py-20">

                <div className=" text-center flex flex-col gap-6  items-center">
                    <h2 className="text-2xl  md:text-4xl font-bold">{content.ctaBannerHeading}</h2>
                    <p>{content.ctaBannerSub}</p>
                    <button className="bg-white text-black px-6 py-3 rounded w-fit mx-auto">{content.ctaBannerBtn}</button>
                </div>

            </section>


            <footer className="p-8 bg-stone-50 text-stone-700 w-full">
                <p className="text-center">{content.footer}</p>
            </footer>
        </>
    )
}