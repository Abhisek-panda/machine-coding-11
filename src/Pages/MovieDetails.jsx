import { useParams } from "react-router-dom";
import { useMovies } from "../main";
import Navbar from "../Components/Navbar";

const MovieDetails = () => {
  const {
    newMoviesData,
    handleWatchLater,
    watchListFn,
    handleRemoveWatchList,
  } = useMovies();
  const { movieId } = useParams();
  const singleMovie = newMoviesData?.find(
    (m) => m?.id.toString() === movieId?.toString()
  );

  const watchListItem = watchListFn(singleMovie);
  return (
    <div className="flex flex-col gap-5">
      <nav>
        <Navbar />
      </nav>
      <div className="flex mx-2 gap-5">
        <img
          src={singleMovie?.imageURL}
          alt={singleMovie?.title}
          className="h-[480px] w-72 object-cover"
        />
        <div className="flex flex-col gap-10 ">
          <h1>Title: {singleMovie?.title}</h1>
          <p>Director: {singleMovie?.director}</p>
          <p>Writer: {singleMovie?.writer}</p>
          <p>ReleaseYear: {singleMovie?.year}</p>
          <div className="flex">
            Cast:{" "}
            {singleMovie?.cast?.map((c) => {
              return <p key={c}>{c}</p>;
            })}
          </div>
          <p>Summary: {singleMovie?.summary}</p>
          <div>
            {watchListItem ? (
              <button
                className="bg-red-400 text-black rounded-sm hover:bg-zinc-400 p-[4px]"
                onClick={() => handleRemoveWatchList(singleMovie)}
              >
                Remove from Watch List
              </button>
            ) : (
              <button
                className="bg-zinc-400 text-black rounded-sm hover:bg-red-400 p-[4px]"
                onClick={() => handleWatchLater(singleMovie)}
              >
                Watch Later
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
