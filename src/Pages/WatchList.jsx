import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useMovies } from "../main";

const WatchList = () => {
  const { watchList, handleWatchLater } = useMovies();
  const navigate = useNavigate();
  const handleMovieDetail = (id) => {
    navigate(`/movies/${id}`);
  };
  console.log(watchList);
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <div>
        {watchList?.map((movie) => {
          return (
            <div key={movie?.id}>
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
                <button
                  onClick={() => handleWatchLater(movie)}
                  className="bg-zinc-400 text-black rounded-sm hover:bg-slate-400"
                >
                  Watch Later
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WatchList;
