import { Link } from "react-router-dom"
const NavBar = () => {
  return(
    <div className="max-w-full text-sm bg-[#40e07d]/75 text-black">
      <ul className="flex justify-between">
        <li className="m-auto">
          <Link to="/">home</Link>
        </li>
        <li className="m-auto">
          <Link to="/experience">experience</Link>
        </li>
        <li className="m-auto">
          <Link to="/projects">projects</Link>
        </li>
        <li className="m-auto">
          <Link to="/about">about</Link>
        </li>
      </ul>
    </div>
  )

}
export default NavBar
