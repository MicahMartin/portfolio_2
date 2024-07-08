import Header from './components/Header.jsx'
import NavBar from './components/NavBar.jsx'
import { Outlet } from "react-router-dom"

const outerClassName = 'w-full max-w-[80rem] min-h-screen mx-auto border-x border-dashed border-[#40e07d]/30 flex gap-4 py-4 flex-col text-[#40e07d]'
function App() {
  return (
    <div className={outerClassName}>
      <Header/>
      <NavBar/>
      <Outlet />
    </div>
  )
}

export default App
