import { NavLink } from "react-router-dom";
import { useMovies } from "../main";

const Navbar = () => {
  const { filters, setFilters } = useMovies();
  return (
    <div className="flex justify-between bg-zinc-700 text-white p-2 items-center">
      <NavLink
        to="/"
        className="text-xl font-bold hover:text-gray-300 uppercase"
      >
        Screen Score
      </NavLink>
      <input
        type="text"
        className="border-2 border-solid border-black rounded-md w-80 text-black p-[2px]"
        placeholder="Search With Movie Title ,Director & Cast"
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />
      <div className="flex gap-10 text-lg">
        <NavLink to="/movies" className="hover:text-gray-300">
          Movies
        </NavLink>
        <NavLink to="/watch-list" className="hover:text-gray-300">
          Watch List
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
