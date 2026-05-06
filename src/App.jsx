import {useState} from "react"
import defaultContent from "./data/defaultContent"
import TemplateGallery from "./components/TemplateGallery";
import Editor from "./components/Editor";

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
        <Editor selectedTemplate={selectedTemplate} content={content} onContentChange={handleContentChange} onBack={handleBack} ></Editor>
      )}
    </div>
  )

}

export default App;