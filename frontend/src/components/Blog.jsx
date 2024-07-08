import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ContentWrapper from "./ContentWrapper"

const CodeSnippet = ({ code }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg mb-4">
      <pre className="overflow-auto">
        <code className="language-foobar">
          {code}
        </code>
      </pre>
    </div>
  )
}
const Title = ({ title }) => <h1 className="text-2xl font-bold">{title}</h1>
const PublishDate = ({ publishDate }) => <p className="text-s italic">{publishDate}</p>

const theCode = `
    import React from 'react';

    const HelloWorld = () => {
      return (
        <div>
          <h1>Hello, world!</h1>
        </div>
      );
    };

    export default HelloWorld;
  `
const Content = (content) => {
  return (
    <div className="flex flex-col gap-4">
    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <CodeSnippet code={theCode} language='javascript' />
    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    </div>
  )
}
 
const blogClassName = 'flex flex-col gap-2 text-[#d3d3d3] w-full max-w-[50rem] mx-auto p-4 border border-[#40e07d]/50'
const Blog = (props) => {
  const { articleUrl } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    import(`../assets/${articleUrl}`)
      .then(data => setArticle(data))
      .catch(error => {
        console.error("Error fetching the article content:", error);
      });
  }, [articleUrl]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className={blogClassName}>
      <Title title={article.title}/>
      <PublishDate publishDate={article.pubDate}/>
      <ContentWrapper content={article.content} />
    </div>
  )
}

export default Blog
