import { BrowserRouter, Route, Routes } from "react-router"
import Celular from "./Pages/Celulares"
import Computador from "./Pages/Computadores"
import Home from "./Pages/Home"
import Relogio from "./Pages/Relogio"
import Void from "./Pages/Void"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/celulares'} element={<Celular/>} />
          <Route path={'/relogios'} element={<Relogio/>} />
          <Route path={'/computadores'} element={<Computador/>} />
          <Route path={'*'} element={<Void/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
