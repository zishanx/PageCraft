export default function SaaSTemplate({ content }) {
    return (
        <>
            <nav className=" grid grid-cols-2 md:grid-cols-3 items-center p-4 bg-gray-950">
                <h2 className="text-purple-400 font-bold text-xl">{content.brand}</h2>
                <ul className="hidden md:flex  justify-center gap-6">
                    <li className="text-gray-400 font-bold text-center"><a href="#About">About</a></li>
                    <li className="text-gray-400 font-bold text-center"><a href="#feature">Feature</a></li>
                    <li className="text-gray-400 font-bold text-center"><a href="#Pricing">Pricing</a></li>
                </ul>
                <div className="flex justify-end">

                    <button className="py-2 px-4 bg-purple-600 rounded border-black text-center font-bold">{content.cta}</button>
                </div>
            </nav>
            <div
                id="hero"
                className=" relative overflow-hidden py-16 md:py-32 items-center text-center flex flex-col justify-start  gap-6"
                style={content.heroImage ? { backgroundImage: `url(${content.heroImage})` } : {}}
            >
                <div className="bg-black/60 absolute inset-0"></div>
                <div className="relative z-10 flex flex-col items-center gap-8">
                    <p className="bg-purple-900 text-purple-300 px-4 py-1 rounded-full text-sm w-fit">✦ Now in Beta</p>
                    <h1 className="text-6xl font-bold text-white">{content.headline}</h1>
                    <p className="text-gray-400 max-w-xl mx-auto ">{content.subtext}</p>
                    <button className="bg-purple-600 rounded w-fit px-6 py-3 ">{content.cta}</button>
                </div>
            </div>

            <div id="features" className="bg-gray-950 px-6 md:px-30 py-10">
                <h2 className="font-bold text-3xl text-center">Features</h2>
                <div id="cards " className="py-10 flex flex-col md:flex-row gap-6">
                        <div id="card" className="p-4 flex flex-col text-center items-center justify-between bg-black/50 p-10 gap-4 rounded">
                            <span className="text-2xl">⚡</span>
                            <h3 className="font-bold text-2xl text-purple-400">{content.feature1Title}</h3>
                            <p className="text-gray-400">{content.feature1Desc}</p>
                        </div>

                        <div id="card" className="p-4 flex flex-col text-center items-center justify-between bg-black/50 p-10 gap-4 rounded">
                            <span className="text-2xl">🤖</span>
                            <h3 className="font-bold text-2xl text-purple-400">{content.feature2Title}</h3>
                            <p className="text-gray-400">{content.feature2Desc}</p>
                        </div>

                        <div id="card" className="p-4 flex flex-col text-center items-center justify-between bg-black/50 p-10 gap-4 rounded">
                            <span className="text-2xl">🔒</span>
                            <h3 className="font-bold text-2xl text-purple-400">{content.feature3Title}</h3>
                            <p className="text-gray-400">{content.feature3Desc}</p>
                        </div>
                        
                </div>
            </div>


            <section id="stats" className="bg-gray-950   px-6 md:px-30 py-10  shadow">
                    <div className="flex flex-col md:flex-row  justify-center gap-10 w-full">
                        <div className="flex-1 text-center flex
                        flex-col gap-3">
                            <span className="font-bold text-5xl">{content.stat1Number}</span>
                            <p className="text-gray-400">{content.stat1Label}</p>
                        </div>
                        
                        <div className="flex-1 text-center flex
                        flex-col gap-3">
                            <span className="font-bold text-5xl">{content.stat2Number}</span>
                            <p className="text-gray-400">{content.stat2Label}</p>
                        </div>

                        <div className="flex-1 text-center flex
                        flex-col gap-3">
                            <span className="font-bold text-5xl">{content.stat3Number}</span>
                            <p className="text-gray-400">{content.stat3Label}</p>
                        </div>
                    </div>
            </section>

            <section id="testimonials" className=" bg-gray-950 px-6 md:px-30 py-20">
                <div className="max-w-2xl mx-auto bg-black/40 border-l-4 border-purple-500 p-8 rounded">
                <p className="text-center my-2 font-bold italic">{`"${content.testimonialQuote}"`}</p>
                <p className="text-center">- {content.testimonialName}, <span className="text-gray-400">{content.testimonialRole}</span></p>
                </div>
            </section>

            <section id="CTA" className="bg-purple-700 px-6 md:px-30 py-20">

                <div className=" text-center flex flex-col gap-6  items-center">
                        <h2 className="text-2xl  md:text-4xl font-bold">{content.ctaBannerHeading}</h2>
                        <p>{content.ctaBannerSub}</p>
                        <button className="bg-white text-black px-6 py-4 rounded w-fit mx-auto">{content.ctaBannerBtn}</button>
                </div>

            </section>

            <footer id="footer " className="bg-gray-950 p-8 text-center text-gray-400">
                <p className="">{content.footer}</p>
            </footer>
        </>
    )
}