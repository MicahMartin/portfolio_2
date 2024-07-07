import { Link } from "react-router-dom"
const NavBar = (props) => {
  return(
    <div className="max-w-full text-sm bg-[#40e07d]/75 text-black">
      <ul className="flex justify-between">
        <li className="m-auto">
          <Link to="/">home</Link>
        </li>
        <li className="m-auto">
          <Link to="/projects">projects</Link>
        </li>
        <li className="m-auto">
          <Link to="/about">about / contact</Link>
        </li>
      </ul>
    </div>
  )

}
export default NavBar
