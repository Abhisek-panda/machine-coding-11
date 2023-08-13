import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import AddMovie from "./Pages/AddMovie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/add-movie" element={<AddMovie />} />
      </Routes>
    </>
  );
}

export default App;
