
// import './App.css'
import { useEffect, useState } from 'react'
import { AllRoutes } from './AllRoutes/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';


function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme,setTheme] = useState(current_theme?current_theme:'light');
  useEffect(()=>{
    localStorage.setItem('current_theme',theme)
  },[theme])

  return (
    <>
    {/* <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <AllRoutes/>
    </div>   */}
    <About />
    <Footer />
    </>
  )
}

export default App
