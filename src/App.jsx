import { useState } from "react"
import defaultContent from "./data/defaultContent"
import { Routes, Route } from "react-router-dom";
import TemplateGallery from "./components/TemplateGallery";
import Editor from "./components/Editor";
import PublishedSite from "./components/PublishedSite";

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [content, setContent] = useState({});
  const [projectId, setProjectId] = useState(null)

  const saveProject = async () => {
    const response = await fetch(`http://localhost:4000/api/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ templateId: selectedTemplate, content })
    })

    const data = await response.json()
    setProjectId(data._id)
    console.log('Saved project id: ', data._id)
  }


  const handleSelectTemplate = (templateId) => {
    setSelectedTemplate(templateId)
    setContent(defaultContent[templateId]);
  }

  const handleContentChange = (field, value) => {
    setContent((prev) => ({ ...prev, [field]: value }))
  }

  const handleBack = () => {
    setSelectedTemplate(null)
    setContent({})
  }


  return (
    <Routes>
      <Route path="/" element={<div className="min-h-screen bg-gray-950 text-white">
        {selectedTemplate === null ? (
          <TemplateGallery onSelectTemplate={handleSelectTemplate} />
        ) : (
          <Editor
            selectedTemplate={selectedTemplate} content={content}
            onContentChange={handleContentChange} onBack={handleBack}
            onSave={saveProject}
            projectId={projectId}
          ></Editor>
        )}
      </div>}></Route>
      <Route path="/site/:id" element={<PublishedSite></PublishedSite>}></Route>
    </Routes>

  )

}

export default App;