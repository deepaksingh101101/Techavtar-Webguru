
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import './assets/flex-slider.css'
import './assets/fontawesome.css'
import './assets/lightbox.css'
import './assets/owl.css'
import './assets/templatemo-edu-meeting.css'
import Course from "./pages/course/Course";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/course/:id" element={<Course />}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
