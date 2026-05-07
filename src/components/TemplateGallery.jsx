import Agencyimg from '../assets/Agency.png'
import Portfolioimg from '../assets/Portfolio.png'
import Saasimg from '../assets/Saas.png'
import Startupimg from '../assets/Startup.png'

export default function TemplateGallery({ onSelectTemplate }) {
    return (

        <div className="">

            <nav className="bg-white border-b-2 border-gray-200 px-5 py-2 flex text-2xl items-center justify-between">
                <h2 className="font-bold text-gray-900">PageCraft</h2>
                <a href="https://github.com/zishanx"><button className="bg-gray-900 font-bold text-sm text-white rounded px-4 py-2 cursor-pointer">GitHub ↗</button></a>
            </nav>

            <section className="p-20 flex flex-col text-center gap-5">
                <p className="text-gray-400 ">4 Beautiful templates</p>
                <h1 className="text-5xl font-bold">Build your landing page in minutes</h1>
                <p className="text-gray-800">Pick a template, customize it , publish it.</p>
            </section>

            <div id="gallery" className="flex flex-col md:grid grid-cols-2 gap-6 items-stretch justify-center px-10 pb-20">
                <div
                    onClick={() => { onSelectTemplate("saas") }}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => e.key === "Enter" && onSelectTemplate("saas")}
                    className="p-4 rounded shadow  text-center hover:-translate-y-1 hover:shadow-lg tansition-all curson-pointer bg-white rounded-lg overflow-hidden">
                    <img className="w-full object-cover"  src={Saasimg} alt="" />
                    <h2 className="text-gray-800 font-bold text-2xl">Saas/Product</h2>
                    <p className='text-gray-400'>Dark Tech</p>
                </div>
                <div
                    onClick={() => { onSelectTemplate("portfolio") }}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => e.key === "Enter" && onSelectTemplate("portfolio")}
                    className="p-4 rounded shadow text-center hover:-translate-y-1 hover:shadow-lg tansition-all curson-pointer bg-white rounded-lg overflow-hidden">
                    <img className="w-full object-cover" src={Portfolioimg} alt="" />
                    <h2 className="text-gray-800 font-bold text-2xl">Portfolio/Freelancer</h2>
                    <p className='text-gray-400'>Minimal Warm</p>
                </div>
                <div
                    onClick={() => { onSelectTemplate("agency") }}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => e.key === "Enter" && onSelectTemplate("agency")}
                    className="p-4 rounded shadow  text-center hover:-translate-y-1 hover:shadow-lg tansition-all curson-pointer bg-white rounded-lg overflow-hidden">
                    <img className="w-full object-cover" src={Agencyimg} alt="" />
                    <h2 className="text-gray-800 font-bold text-2xl">Agency/Business</h2>
                    <p className='text-gray-400'>Dark Bold</p>
                </div>
                <div
                    onClick={() => { onSelectTemplate("startup") }}
                    tabIndex={0}
                    role="button"
                    onKeyDown={(e) => e.key === "Enter" && onSelectTemplate("startup")}
                    className="p-4 rounded shadow text-center hover:-translate-y-1 hover:shadow-lg tansition-all curson-pointer bg-white rounded-lg overflow-hidden w-full">
                    <img className="w-full object-cover" src={Startupimg} alt="" />
                    <h2 className="text-gray-800 text-2xl font-bold">Startup/Bold</h2>
                    <p className='text-gray-400'>Light Energetic</p>
                </div>
            </div>
        </div>
    )
}