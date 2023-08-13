import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useMovies } from "../main";

const WatchList = () => {
  const { watchList, handleWatchLater, watchListFn, handleRemoveWatchList } =
    useMovies();
  const navigate = useNavigate();
  const handleMovieDetail = (id) => {
    navigate(`/movies/${id}`);
  };
  return (
    <div className="flex flex-col gap-5">
      <nav>
        <Navbar />
      </nav>
      <div className="grid grid-cols-3">
        {watchList?.map((movie) => {
          const watchListItem = watchListFn(movie);

          return (
            <div key={movie?.id}>
              <div key={movie?.id} className="flex flex-col items-center gap-3">
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
                {watchListItem ? (
                  <button
                    className="bg-red-400 text-black rounded-sm hover:bg-zinc-400 p-[4px]"
                    onClick={() => handleRemoveWatchList(movie)}
                  >
                    Remove from Watch List
                  </button>
                ) : (
                  <button
                    className="bg-zinc-400 text-black rounded-sm hover:bg-red-400 p-[4px]"
                    onClick={() => handleWatchLater(movie)}
                  >
                    Watch Later
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WatchList;
