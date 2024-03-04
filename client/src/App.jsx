import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Events from "./pages/Events/Events";
import Books from "./pages/Books/Books";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events/*" element={<Events />} />
        <Route path="/books/*" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
