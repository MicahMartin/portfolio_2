const ContentWrapper = ({ content }) => {
  const parts = content.split(/\r?\n\r?\n/)

  let renderedContent = []
  let inCodeBlock = false
  let codeLines = []

  for (let i = 0; i < parts.length; i++) {
    if (!inCodeBlock && parts[i].startsWith("```")) {
      inCodeBlock = true
      codeLines.push(parts[i].substring(3))
    } else if (inCodeBlock && parts[i].endsWith("```")) {
      inCodeBlock = false
      codeLines.push(parts[i].slice(0, -3))
      const codeSnippet = codeLines.join("\n")
      
      renderedContent.push(
        <div key={`code-${i}`} className="bg-gray-900 text-white p-4 rounded-lg shadow-lg mb-4">
          <pre className="overflow-auto">
            <code className="language-foobar">
              {codeSnippet}
            </code>
          </pre>
        </div>
      )

      codeLines = [] // Reset code lines array
    } else if (inCodeBlock) {
      // Inside code block, accumulate lines
      codeLines.push(parts[i])
    } else {
      // Outside of code block, treat as paragraph
      renderedContent.push(<p key={`paragraph-${i}`}>{parts[i]}</p>)
    }
  }

  return <div className="flex flex-col gap-4">{renderedContent}</div>
}

export default ContentWrapper
