export default function Startup({ content }) {
    return (
        <>
            <nav className="bg-orange-50 py-5 px-6 md:px-30 grid md:grid-cols-3 grid-cols-2 items-center ">
                <h2 className="text-orange-500 font-bold text-xl">{content.brand}</h2>
                <ul className="hidden md:flex gap-4 justify-center text-gray-500">
                    <li><a href="#Feature">Feature</a></li>
                    <li><a href="#steps">Steps</a></li>
                    <li><a href="#CTA">Contact</a></li>
                </ul>
                <div className="flex justify-end ">
                    <button className="bg-orange-500 text-white px-5 py-2 rounded-md font-bold">{content.cta}</button>
                </div>
            </nav>

            <section className="bg-orange-50 py-32 px-10 flex flex-col items-center text-center gap-6">
                <span className="bg-orange-100 text-orange-500  py-1  px-3 rounded-full text-sm">🚀 Launching soon</span>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">{content.headline}</h1>
                <p className="text-gray-500 max-w-xl">{content.subtext}</p>
                <button className="bg-orange-500 text-white px-8 py-3 rounded-md font-bold w-fit">{content.cta}</button>
            </section>

            <section id="Feature" className=" bg-orange-50  pt-5 pb-10 px-20 flex flex-col  gap-10">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500 pb-10 ">Features</h2>
                <div className="flex flex-row gap-4 justify-center">
                    <span className="bg-orange-100 text-orange-500 px-6 py-3 rounded-full font-bold">{content.feature1}</span>
                    <span className="bg-orange-100 text-orange-500 px-6 py-3 rounded-full font-bold">{content.feature2}</span>
                    <span className="bg-orange-100 text-orange-500 px-6 py-3 rounded-full font-bold">{content.feature3}</span>
                </div>
            </section>

            <section id="steps" className="bg-orange-50 py-20 px-20 flex flex-col  gap-6">

                <h2 className="text-2xl md:text-3xl font-bold text-orange-500">How it works</h2>
                <div id="steps" className="flex md:flex-rows flex-col gap-7 ">
                    <div className="flex bg-orange-100 roUnded  flex-col p-5 gap-5">
                        <h3 className="font-mono text-4xl font-bold text-orange-500">1</h3>
                        <p className="text-3xl font-bold text-gray-900">{content.step1Title}</p>
                        <p className="text-sm text-gray-500">{content.step1Desc}</p>
                    </div>
                    <div className="flex bg-orange-100 roUnded  flex-col p-5 gap-5">
                        <h3 className="font-mono text-4xl font-bold text-orange-500">2</h3>
                        <p className="text-3xl font-bold text-gray-900">{content.step2Title}</p>
                        <p className="text-sm text-gray-500">{content.step2Desc}</p>
                    </div>
                    <div className="flex bg-orange-100 roUnded  flex-col p-5 gap-5">
                        <h3 className="font-mono text-4xl font-bold text-orange-500">3</h3>
                        <p className="text-3xl font-bold text-gray-900">{content.step3Title}</p>
                        <p className="text-sm text-gray-500">{content.step3Desc}</p>
                    </div>
                </div>
            </section>

            <section id="testimonial" className="py-10 px-10 md:px-20 bg-orange-50 text-orange-500 w-full">
                <h1 className="text-orange-500 text-3xl font-bold mb-10">Testimonial</h1>
                <div className="border-l-4 border-orange-500 p-5 shadow-xl flex flex-col gap-2 w-fill bg-orange-100">
                    <p className="italic">"{content.testimonialQuote}"</p>
                    <p className=""><span className="font-bold text-gray-900">-{content.testimonialName}, </span><span className="text-gray-400">{content.testimonialRole}</span></p>
                </div>
            </section>
            <section id="CTA" className="bg-orange-200 px-6 md:px-20 py-20">

                <div className=" text-center flex flex-col gap-6  items-center">
                    <h2 className="text-2xl  md:text-4xl font-bold text-orange-500">{content.ctaBannerHeading}</h2>
                    <p className="text-orange-500">{content.ctaBannerSub}</p>
                    <button className="bg-orange-500 text-white px-6 py-3 rounded w-fit mx-auto">{content.ctaBannerBtn}</button>
                </div>

            </section>


            <footer className="p-8 bg-orange-50 text-orange-500 w-full">
                <p className="text-center">{content.footer}</p>
            </footer>
        </>
    )
}