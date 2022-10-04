import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Create/Create";
import Home from "./Home/Home";
import Event from "./Event/Components/Event";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<SelectLocation />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
