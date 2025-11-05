import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import BikesStore from "./pages/BikesStore";
import JoinTheRace from "./pages/JoinTheRace";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store/bikes" element={<BikesStore />} />
        <Route path="/race" element={<JoinTheRace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;