import Markdown from 'react-markdown'
import { useState, useEffect } from 'react'
import file from "../assets/dsl-article.md"

const ContentWrapper = ({ content }) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);
  console.log(markdown)

  return <Markdown>{markdown}</Markdown>
}

export default ContentWrapper
