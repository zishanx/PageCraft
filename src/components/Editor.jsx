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
                            onChange={(e) => onContentChange("brand", e.target.value)}
                        ></input>
                    </div>

                    <div>
                        <label className="text-sx text-gray-400">Hero headline</label>
                        <input
                            className="bg-gray-800 text-white p-2 rounded text-sm"
                            value={content.headline}
                            onChange={(e) => onContentChange("headline", e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label className="text-sx text-gray-400">Subheading</label>
                        <input
                            className="bg-gray-800 text-white p-2 rounded text-sm"
                            value={content.subtext}
                            onChange={(e) => onContentChange("subtext", e.target.value)}
                        ></input>
                    </div>

                    <div>
                        <label className="text-sx text-gray-400">CTA button text</label>
                        <input
                            className="bg-gray-800 text-white p-2 rounded text-sm"
                            value={content.cta}
                            onChange={(e) => onContentChange("cta", e.target.value)}
                        ></input>
                    </div>

                    <div>
                        <label className="text-sx text-gray-400">Hero image URL</label>
                        <input
                            className="bg-gray-800 text-white p-2 rounded text-sm"
                            value={content.heroImage}
                            onChange={(e) => onContentChange("heroImage", e.target.value)}
                        ></input>
                    </div>



                    {selectedTemplate === "saas" && (
                        <>
                            <div>
                                <label className="text-sx text-gray-400">Feature1 Title</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.feature1Title}
                                    onChange={(e) => onContentChange("feature1Title", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Feature1 Des</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.feature1Desc}
                                    onChange={(e) => onContentChange("feature1Desc", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Feature2 Title</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.feature2Title}
                                    onChange={(e) => onContentChange("feature2Title", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Feature2 Desc</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.feature2Desc}
                                    onChange={(e) => onContentChange("feature2Desc", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Feature3 Title</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.feature3Title}
                                    onChange={(e) => onContentChange("feature3Title", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Feature3 Desc</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.feature3Desc}
                                    onChange={(e) => onContentChange("feature3Desc", e.target.value)}
                                ></input>
                            </div>

                            <div>
                                <label className="text-sx text-gray-400">Stat-1 Number</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.stat1Number}
                                    onChange={(e) => onContentChange("stat1Number", e.target.value)}
                                ></input>
                            </div><div>
                                <label className="text-sx text-gray-400">Stat-1 Label</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.stat1Label}
                                    onChange={(e) => onContentChange("stat1Label", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Stat-2 Number</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.stat2Number}
                                    onChange={(e) => onContentChange("stat2Number", e.target.value)}
                                ></input>
                            </div><div>
                                <label className="text-sx text-gray-400">Stat-2 Label</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.stat2Label}
                                    onChange={(e) => onContentChange("stat2Label", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Stat-3 Number</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.stat3Number}
                                    onChange={(e) => onContentChange("stat3Number", e.target.value)}
                                ></input>
                            </div><div>
                                <label className="text-sx text-gray-400">Stat-3 Label</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.stat3Label}
                                    onChange={(e) => onContentChange("stat3Label", e.target.value)}
                                ></input>
                            </div>


                        </>
                    )}

                    {selectedTemplate === "portfolio" && (
                        <>
                            <div>
                                <label className="text-sx text-gray-400">Service-1 Title</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.service1Title}
                                    onChange={(e) => onContentChange("service1Title", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Service-1 Desc</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.service1Desc}
                                    onChange={(e) => onContentChange("service1Desc", e.target.value)}
                                ></input>
                            </div>

                            <div>
                                <label className="text-sx text-gray-400">Service-2 Title</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.service2Title}
                                    onChange={(e) => onContentChange("service2Title", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Service-2 Desc</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.service2Desc}
                                    onChange={(e) => onContentChange("service2Desc", e.target.value)}
                                ></input>
                            </div>

                            <div>
                                <label className="text-sx text-gray-400">Service-3 Title</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.service3Title}
                                    onChange={(e) => onContentChange("service3Title", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Service-3 Desc</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.service3Desc}
                                    onChange={(e) => onContentChange("service3Desc", e.target.value)}
                                ></input>
                            </div>


                            <div>
                                <label className="text-sx text-gray-400">Project-1 Title</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.project1Title}
                                    onChange={(e) => onContentChange("project1Title", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Project-1 Desc</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.project1Desc}
                                    onChange={(e) => onContentChange("project1Desc", e.target.value)}
                                ></input>
                            </div>

                            <div>
                                <label className="text-sx text-gray-400">Project-2 Title</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.project2Title}
                                    onChange={(e) => onContentChange("project2Title", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Project-2 Desc</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.project2Desc}
                                    onChange={(e) => onContentChange("project2Desc", e.target.value)}
                                ></input>
                            </div>


                        </>
                    )}

                    {selectedTemplate === "agency" && (
                        <>
                            <div>
                                <label className="text-sx text-gray-400">Service-1 Title</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.service1Title}
                                    onChange={(e) => onContentChange("service1Title", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Service-1 Desc</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.service1Desc}
                                    onChange={(e) => onContentChange("service1Desc", e.target.value)}
                                ></input>
                            </div>

                            <div>
                                <label className="text-sx text-gray-400">Service-2 Title</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.service2Title}
                                    onChange={(e) => onContentChange("service2Title", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Service-2 Desc</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.service2Desc}
                                    onChange={(e) => onContentChange("service2Desc", e.target.value)}
                                ></input>
                            </div>

                            <div>
                                <label className="text-sx text-gray-400">Service-3 Title</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.service3Title}
                                    onChange={(e) => onContentChange("service3Title", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Service-3 Desc</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.service3Desc}
                                    onChange={(e) => onContentChange("service3Desc", e.target.value)}
                                ></input>
                            </div>

                            <div>
                                <lable className="text-sx text-gray-400">Client-1</lable><br />
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.client1}
                                    onChange={(e) => onContentChange("client1", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <lable className="text-sx text-gray-400">Client-2</lable><br />
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.client2}
                                    onChange={(e) => onContentChange("client2", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <lable className="text-sx text-gray-400">Client-3</lable><br />
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.client3}
                                    onChange={(e) => onContentChange("client3", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <lable className="text-sx text-gray-400">Client-4</lable><br />
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.client4}
                                    onChange={(e) => onContentChange("client4", e.target.value)}
                                ></input>
                            </div>
                        </>
                    )}

                    {selectedTemplate ==="startup" && (
                        <>
                            <div>
                                <label className="text-sx text-gray-400">Feature-1</label><br />
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.feature1}
                                    onChange={(e) => onContentChange("feature1", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Feature-2</label><br />
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.feature2}
                                    onChange={(e) => onContentChange("feature2", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Feature-3</label><br />
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.feature3}
                                    onChange={(e) => onContentChange("feature3", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Step-1 Title</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.step1Title}
                                    onChange={(e) => onContentChange("step1Title", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Step-1 Desc</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.step1Desc}
                                    onChange={(e) => onContentChange("step1Desc", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Step-2 Title</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.step2Title}
                                    onChange={(e) => onContentChange("step2Title", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Step-2 Desc</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.step2Desc}
                                    onChange={(e) => onContentChange("step2Desc", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Step-3 Title</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.step3Title}
                                    onChange={(e) => onContentChange("step3Title", e.target.value)}
                                ></input>
                            </div>
                            <div>
                                <label className="text-sx text-gray-400">Step-3 Desc</label>
                                <input
                                    className="bg-gray-800 text-white p-2 rounded text-sm"
                                    value={content.step3Desc}
                                    onChange={(e) => onContentChange("step3Desc", e.target.value)}
                                ></input>
                            </div>
                        </>
                    )}

                    <div>
                        <label className="text-sx text-gray-400">Testimonial Quote</label>
                        <input
                            className="bg-gray-800 text-white p-2 rounded text-sm"
                            value={content.testimonialQuote}
                            onChange={(e) => onContentChange("testimonialQuote", e.target.value)}
                        ></input>
                    </div>

                    <div>
                        <label className="text-sx text-gray-400">Testimonial Name</label>
                        <input
                            className="bg-gray-800 text-white p-2 rounded text-sm"
                            value={content.testimonialName}
                            onChange={(e) => onContentChange("testimonialName", e.target.value)}
                        ></input>
                    </div>

                    <div>
                        <label className="text-sx text-gray-400">Testimonial Role</label>
                        <input
                            className="bg-gray-800 text-white p-2 rounded text-sm"
                            value={content.testimonialRole}
                            onChange={(e) => onContentChange("testimonialRole", e.target.value)}
                        ></input>
                    </div>

                    <div>
                        <label className="text-sx text-gray-400">CTA Banner Heading</label>
                        <input
                            className="bg-gray-800 text-white p-2 rounded text-sm"
                            value={content.ctaBannerHeading}
                            onChange={(e) => onContentChange("ctaBannerHeading", e.target.value)}
                        ></input>
                    </div>

                    <div>
                        <label className="text-sx text-gray-400">CTA Banner Sub</label>
                        <input
                            className="bg-gray-800 text-white p-2 rounded text-sm"
                            value={content.ctaBannerSub}
                            onChange={(e) => onContentChange("ctaBannerSub", e.target.value)}
                        ></input>
                    </div>

                    <div>
                        <label className="text-sx text-gray-400">CTA Banner Button</label>
                        <input
                            className="bg-gray-800 text-white p-2 rounded text-sm"
                            value={content.ctaBannerBtn}
                            onChange={(e) => onContentChange("ctaBannerBtn", e.target.value)}
                        ></input>
                    </div>

                    <div>
                        <label className="text-sx text-gray-400">Footer<br></br></label>
                        <input
                            className="bg-gray-800 text-white p-2 rounded text-sm"
                            value={content.footer}
                            onChange={(e) => onContentChange("footer", e.target.value)}
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