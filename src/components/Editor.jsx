import SaaSTemplate from "./template/SaaSTemplate";
import Portfolio from "./template/PortfolioTemplate";
import Agency from "./template/AgencyTemplate"
import Startup from "./template/StartupTemplate"




export default function Editor({ selectedTemplate, content, onContentChange, onBack }) {


    return (
        <>
            <div className="flex flex-row">

                <div id="sidebar" className="flex flex-col h-full shrink-0 overflow-y-auto sticky top-0 w-[280px] h-screen p-4 border-r-2">
                <button onClick={onBack} className="w-fit h-fit p-2 bg-white rounded text-gray-900 py-1">Back</button>
                <p className="mt-5 font-bold">Editor</p>

                <div>
                    <label className="text-sx text-gray-400">Brand name</label>
                    <input
                        className="bg-gray-800 text-white p-2 rounded text-sm"
                        value={content.brand}
                        onChange={(e)=> onContentChange("brand", e.target.value)}
                    ></input>
                </div>

                <div>
                    <label className="text-sx text-gray-400">Hero headline</label>
                    <input
                        className="bg-gray-800 text-white p-2 rounded text-sm"
                        value={content.headline}
                        onChange={(e)=> onContentChange("headline", e.target.value)}
                    ></input>
                </div>
                <div>
                    <label className="text-sx text-gray-400">Subheading</label>
                    <input
                        className="bg-gray-800 text-white p-2 rounded text-sm"
                        value={content.subtext}
                        onChange={(e)=> onContentChange("subtext", e.target.value)}
                    ></input>
                </div>

                <div>
                    <label className="text-sx text-gray-400">CTA button text</label>
                    <input
                        className="bg-gray-800 text-white p-2 rounded text-sm"
                        value={content.cta}
                        onChange={(e)=> onContentChange("cta", e.target.value)}
                    ></input>
                </div>

                <div>
                    <label className="text-sx text-gray-400">Hero image URL</label>
                    <input
                        className="bg-gray-800 text-white p-2 rounded text-sm"
                        value={content.heroImage}
                        onChange={(e)=> onContentChange("heroImage", e.target.value)}
                    ></input>
                </div>

                <div>
                    <label className="text-sx text-gray-400">Footer<br></br></label>
                    <input
                        className="bg-gray-800 text-white p-2 rounded text-sm"
                        value={content.footer}
                        onChange={(e)=> onContentChange("footer", e.target.value)}
                    ></input>
                </div>

                


                </div>
                <div id="preview" className="flex-1">

                    {selectedTemplate === "saas" && <SaaSTemplate content={content}></SaaSTemplate>}
                    {selectedTemplate === "portfolio" && <Portfolio content={content}></Portfolio>}
                    {selectedTemplate === "agency" && <Agency content={content} />}
                    {selectedTemplate === "startup" && <Startup content={content} />}
                </div>
            </div>
        </>
    )
}