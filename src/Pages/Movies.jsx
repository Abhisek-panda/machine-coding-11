import { Link, useNavigate } from "react-router-dom";
import FilterBar from "../Components/FilterBar";
import Navbar from "../Components/Navbar";
import { useMovies } from "../main";

const Movies = () => {
  const { filteredMoviesFn } = useMovies();
  const filteredMovies = filteredMoviesFn();
  const navigate = useNavigate();
  // console.log({ filteredMovies });

  const handleMovieDetail = (id) => {
    navigate(`/movies/${id}`);
    console.log({ id });
  };
  console.log(filteredMovies);

  return (
    <div className="flex flex-col gap-5">
      <nav className="sticky top-0">
        <Navbar />
      </nav>
      <div className="flex flex-col gap-5">
        <div>
          <FilterBar />
        </div>
        <div className="grid grid-cols-3 mx-2">
          {filteredMovies.length === 0 ? (
            <h1>Nothing To Show</h1>
          ) : (
            filteredMovies.map((movie) => {
              return (
                <div
                  key={movie?.id}
                  className="border-2 border-solid border-black flex flex-col items-center gap-3"
                >
                  <img
                    src={movie?.imageURL}
                    alt={movie?.title}
                    className="w-72 h-72 object-cover rounded-xl"
                    onClick={() => handleMovieDetail(movie?.id)}
                  />
                  <div className="flex flex-col items-center">
                    <h1 className="text-xl font-bold">{movie?.title}</h1>
                    <p className="text-center">{movie?.summary}</p>
                  </div>
                  <button className="bg-zinc-400 text-black rounded-sm hover:bg-slate-400">
                    Watch Later
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Movies;
