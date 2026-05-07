import { useParams } from "react-router-dom";
import SaaSTemplate from "./template/SaaSTemplate";
import Portfolio from "./template/PortfolioTemplate";
import Agency from "./template/AgencyTemplate";
import Startup from "./template/StartupTemplate";
import { useEffect, useState } from "react";

export default function PublishedSite() {

    const [data, setData] = useState({})
    const { id } = useParams()

    async function getData() {
        const response = await fetch(`http://localhost:4000/api/projects/${id}`);
        const result = await response.json()
        setData(result)
        
    }

    useEffect(() => {

        getData()

    }, [])





    return (
        <div className="bg-gray-950 text-white min-h-screen">
            {data.templateId === "saas" && <SaaSTemplate content={data.content}></SaaSTemplate>}
            {data.templateId === "portfolio" && <Portfolio content={data.content}></Portfolio>}
            {data.templateId === "agency" && <Agency content={data.content} />}
            {data.templateId === "startup" && <Startup content={data.content} />}
        </div>

    )
}