import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import AddMovie from "./Pages/AddMovie";
import MovieDetails from "./Pages/MovieDetails";
import WatchList from "./Pages/WatchList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/watch-list" element={<WatchList />} />
      </Routes>
    </>
  );
}

export default App;
