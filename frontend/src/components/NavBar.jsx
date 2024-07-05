const NavBar = (props) => {
  return(
    <div className="max-w-full text-sm bg-[#40e07d]/75 text-black">
      <ul className="flex justify-between">
        <li className="m-auto">
          projects
        </li>
        <li className="m-auto">
          blog
        </li>
        <li className="m-auto">
          about / contact
        </li>
      </ul>
    </div>
  )

}
export default NavBar
