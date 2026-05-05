import {useState} from "react"
import defaultContent from "./data/defaultContent"
import TemplateGallery from "./components/TemplateGallery";
import SaaSTemplate from "./components/template/SaaSTemplate";

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [content, setContent] = useState({});

  const handleSelectTemplate = (templateId) => {
    setSelectedTemplate(templateId)
    setContent(defaultContent[templateId]);
  }

  const handleContentChange = (field, value)=> {
    setContent((prev)=> ({...prev, [field]: value}))
  }

  const handleBack = () => {
    setSelectedTemplate(null)
    setContent({})
  }


  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {selectedTemplate === null ? (
        <TemplateGallery onSelectTemplate={handleSelectTemplate} />
      ):(
        // <p className="p-8 text-center">Editor goes here - template: {selectedTemplate}</p>
        <SaaSTemplate content={content}></SaaSTemplate>
      )}
    </div>
  )

}

export default App;