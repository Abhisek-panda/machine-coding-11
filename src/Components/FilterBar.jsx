import { Link } from "react-router-dom";
import { useMovies } from "../main";

const FilterBar = () => {
  const { allGenres, filters, setFilters } = useMovies();
  const range = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );

  const movieYear = range(1990, 2023, 1);
  const rating = range(1, 10, 1);

  return (
    <div className="flex gap-5 justify-around items-center">
      <h1>Movies</h1>
      <div className="border-2 border-black border-solid rounded-sm p-[2px]">
        <select
          name=""
          id=""
          onChange={(e) => setFilters({ ...filters, year: e.target.value })}
        >
          <option value="" hidden>
            Select Year
          </option>
          <option value="All">All</option>
          {movieYear.map((y) => {
            return (
              <option value={y} key={y}>
                {y}
              </option>
            );
          })}
        </select>
      </div>
      <div className="border-2 border-black border-solid rounded-sm p-[2px]">
        <select
          name=""
          id=""
          onChange={(e) => setFilters({ ...filters, genre: e.target.value })}
        >
          <option value="" hidden>
            Select Genre
          </option>
          <option value="All">All</option>
          {allGenres.map((genre) => {
            return (
              <option value={genre} key={genre}>
                {genre}
              </option>
            );
          })}
        </select>
      </div>
      <div className="border-2 border-black border-solid rounded-sm p-[2px]">
        <select
          name=""
          id=""
          onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
        >
          <option value="" hidden>
            Select Rating
          </option>
          <option value="All">All</option>
          {rating.map((rating) => {
            return (
              <option value={rating} key={rating}>
                {rating}
              </option>
            );
          })}
        </select>
      </div>
      <Link
        to="/add-movie"
        className="bg-zinc-400 text-black rounded-sm hover:bg-red-400 p-[4px]"
      >
        Add Movie
      </Link>
    </div>
  );
};

export default FilterBar;
