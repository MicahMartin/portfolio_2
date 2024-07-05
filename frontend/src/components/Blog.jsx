const BlogContainer = () => {
  return (
    <div>
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

const BlogNav = () => {
  return (
    <>
    </>
  )
}

const blogClassName = 'w-full max-w-[70rem] mx-auto p-4 border border-[#40e07d]/50'
const Blog = () => {
  return (
    <div className={blogClassName}>
      <BlogNav />
      <BlogContainer />
    </div>
  )
}

export default Blog
