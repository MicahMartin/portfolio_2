// import './App.css'
import Header from './components/Header.jsx'

const outerClassName = 'w-full max-w-[60rem] min-h-screen mx-auto border-x border-dashed border-[#40e07d]/30 flex gap-4 py-4 flex-col text-[#40e07d]'
function App() {
  return (
    <div className={outerClassName}>
    <Header/>
    </div>
  )
}

export default App
