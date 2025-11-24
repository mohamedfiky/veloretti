import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import BikesStore from "./pages/BikesStore";
import JoinTheRace from "./pages/JoinTheRace";
import NotFound_404 from "./pages/NotFound_404";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store/bikes" element={<BikesStore />} />
        <Route path="/join-the-race" element={<JoinTheRace />} />
        <Route path="*" element={<NotFound_404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;