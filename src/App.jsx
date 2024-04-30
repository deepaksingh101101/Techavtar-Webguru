
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import './assets/flex-slider.css'
import './assets/fontawesome.css'
import './assets/lightbox.css'
import './assets/owl.css'
import './assets/templatemo-edu-meeting.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
