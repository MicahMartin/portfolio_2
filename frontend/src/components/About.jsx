import file from "../assets/about.md"
import { useEffect, useState } from "react"
import Markdown from "react-markdown"
const blogClassName = 'flex flex-col gap-12 text-[#d3d3d3] w-full max-w-[50rem] p-4 mx-auto'

const Title = ({ title }) => <h1 className="code-font text-[#40e07d] text-center content-center mx-auto w-full text-[50px] font-bold">{title}</h1>

const splashClassName = 'flex flex-row w-full'

const Splash = () => {
  return (
    <div className={splashClassName}>
      <div className="flex flex-col flex-1 space-y-2">
        <div className="flex flex-row flex-none gap-2">
          <Title title="About Me"/>
          <img className="w-full" src="kai.jpeg" />
        </div>
      </div>
    </div>
  )
}
const Post = () => {
  const [markdown, setMarkdown] = useState(null)

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
  }, [])

  if (!markdown) {
    return <div></div>
  }
  console.log(markdown)

  return (
    <div className={blogClassName}>
      <Splash />
      <Markdown children={markdown} />
    </div>
  )
}

export default Post
