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

const BlogContainer = () => {
  return (
    <>
    </>
  )
}

const blogClassName = 'w-full max-w-[50rem] mx-auto p-4 border border-[#40e07d]/50'
const Blog = () => {
  return (
    <div className={blogClassName}>
      <BlogContainer />
    </div>
  )
}

export default Blog
