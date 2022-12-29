import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Trial from "./pages/Trial.jsx";
import Homepage from "./pages/Homepage.jsx";
import Trial from "./pages/Trial.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
<Route path="/projecta/trial" element={<Trial />} />
<Route path="/1/Homepage" element={<Homepage />} />
<Route path="/trial" element={<Trial />} />
    </Routes>
  );
}
