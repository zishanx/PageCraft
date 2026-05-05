export default function TemplateGallery({ onSelectTemplate }) {
    return (<div className="p-8">
        <div
            onClick={() => { onSelectTemplate("saas") }}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => e.key === "Enter" && onSelectTemplate("saas")}
            className="p-4 rounded shadow md:w-1/2">
            <h2 className="text-white">Saas/Product</h2>
            <p>Dark Tech</p>
        </div>
        <div
            onClick={() => { onSelectTemplate("portfolio") }}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => e.key === "Enter" && onSelectTemplate("portfolio")}
            className="p-4 rounded shadow md:w-1/2">
            <h2 className="text-white">Portfolio/Freelancer</h2>
            <p>Minimal Warm</p>
        </div>
        <div
            onClick={() => { onSelectTemplate("agency") }}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => e.key === "Enter" && onSelectTemplate("agency")}
            className="p-4 rounded shadow md:w-1/2">
            <h2 className="text-white">Agency/Business</h2>
            <p>Dark Bold</p>
        </div>
        <div
            onClick={() => { onSelectTemplate("startup") }}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => e.key === "Enter" && onSelectTemplate("startup")}
            className="p-4 rounded shadow md:w-1/2">
            <h2 className="text-white">Startup/Bold</h2>
            <p>Light Energetic</p>
        </div>

    </div>
    )
}