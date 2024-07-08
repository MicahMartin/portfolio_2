import '../Article.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ContentWrapper from "./ContentWrapper"
import file from "../assets/dsl-article.md"

const Title = ({ title }) => <h1 className="text-3xl font-bold">{title}</h1>
const PublishDate = ({ publishDate }) => <p className="text-s italic">{publishDate}</p>
const blogClassName = 'flex flex-col gap-2 text-[#d3d3d3] w-full max-w-[50rem] p-4 mx-auto'

const Post = () => {
  const { articleUrl } = useParams()
  const [article, setArticle] = useState(null)
  const [markdown, setMarkdown] = useState("")

  useEffect(() => {
    import(`../assets/${articleUrl}`)
      .then(data => setArticle(data))
  }, [articleUrl])

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
  }, [])

  if (!article) {
    return <div></div>
  }

  return (
    <div className={blogClassName}>
      <Title title={article.title}/>
      <PublishDate publishDate={article.pubDate}/>
      <ContentWrapper markdown={markdown} />
    </div>
  )
}

export default Post
