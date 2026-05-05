export default function SaaSTemplate({ content }) {
    return (
        <>
            <nav className=" grid grid-cols-3 items-center p-4 bg-gray-950">
                <h2 className="text-purple-400 font-bold text-xl">{content.brand}</h2>
                <ul className="flex justify-center gap-6">
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
                className=" relative py-32 items-center text-center flex flex-col justify-start  gap-6"
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

            <div id="features" className="px-30 py-10">
                <h2 className="font-bold text-3xl text-center">Features</h2>
                <div id="cards " className="p-10 flex flex-row gap-6">
                        <div id="card" className="p-4 flex flex-col text-center items-center justify-center bg-black-400">
                            <span>⚡</span>
                            <h3>{content.feature1Title}</h3>
                            <p>{content.feature1Desc}</p>
                        </div>
                        <div id="card" className="p-4 flex flex-col text-center items-center justify-center">
                            <span>⚡</span>
                            <h3>{content.feature1Title}</h3>
                            <p>{content.feature1Desc}</p>
                        </div>
                        <div id="card" className="p-4 flex flex-col text-center items-center justify-center">
                            <span>⚡</span>
                            <h3>{content.feature1Title}</h3>
                            <p>{content.feature1Desc}</p>
                        </div>
                </div>
            </div>
        </>
    )
}