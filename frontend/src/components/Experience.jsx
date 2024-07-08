import file from "../assets/experience.md"
import { useEffect, useState } from "react"
import Markdown from 'react-markdown'
const blogClassName = 'flex flex-col gap-12 text-[#d3d3d3] w-full max-w-[50rem] p-4 mx-auto'

const Experience = () => {
  const [markdown, setMarkdown] = useState(null)

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
  }, [])

  if (!markdown) {
    return <div>Loading...</div>
  }
  console.log(markdown)

  return (
    <div className={blogClassName}>
      <Markdown children={markdown} />
    </div>
  )
}

export default Experience
