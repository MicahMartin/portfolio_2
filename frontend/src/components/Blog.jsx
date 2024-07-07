const archiveClassName = ''
const BlogNav = () => {
  return (
    <div className={archiveClassName}>
      <h1>Blog Archive</h1>
      <ul className="">
        <li className="">
          2024
        </li>
        <li className="">
          2023
        </li>
        <li className="">
          2022
        </li>
      </ul>
    </div>
  )
}

const Title = ({ title }) => {
  return (
    <h1 className="text-2xl font-bold">
      {title}
    </h1>
  )
}

const PublishDate = ({ publishDate }) => {
  return (
    <p className="text-s italic">
      {publishDate}
    </p>
  )
}

const CodeSnippet = ({ language, code }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg mb-4">
      <div className="text-sm text-gray-400 mb-2">{language}</div>
      <pre className="overflow-auto">
        <code className="language-javascript">
          {code}
        </code>
      </pre>
    </div>
  );
};


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
const BackLinks = () => {
  return (
    <div className="mx-auto">
    <a href="/home">home</a>
    </div>
  )
}
 
const blogClassName = 'flex flex-col gap-2 text-[#d3d3d3] w-full max-w-[50rem] mx-auto p-4 border border-[#40e07d]/50'
const Blog = (props) => {
  return (
    <div className={blogClassName}>
      <Title title='Making a DSL for a Fighting Game Style Command Parser'/>
      <PublishDate publishDate='May 12 2023'/>
      <Content />
      <BackLinks />
    </div>
  )
}

export default Blog
