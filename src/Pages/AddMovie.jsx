import Navbar from "../Components/Navbar";

const AddMovie = () => {
  return (
    <div className="flex flex-col">
      <nav>
        <Navbar />
      </nav>
      <div>
        <h1>Add New Movies to Sceen Score:</h1>
        <div>
          <div>
            <label htmlFor="movie-title">Title:</label>
            <input type="text" id="movie-title" />
          </div>
          <div>
            <label htmlFor="movie-year">Year:</label>
            <input type="number" id="movie-year" />
          </div>
          <div>
            <label htmlFor="movie-genre">Genre:</label>
            <input type="text" id="movie-genre" />
          </div>
          <div>
            <label htmlFor="movie-rating">Rating:</label>
            <input type="number" id="movie-rating" />
          </div>
          <div>
            <label htmlFor="movie-title">Title:</label>
            <input type="text" id="movie-title" />
          </div>
          <div>
            <label htmlFor="movie-title">Title:</label>
            <input type="text" id="movie-title" />
          </div>
          <div>
            <label htmlFor="movie-title">Title:</label>
            <input type="text" id="movie-title" />
          </div>
          <div>
            <label htmlFor="movie-title">Title:</label>
            <input type="text" id="movie-title" />
          </div>
          <div>
            <label htmlFor="movie-title">Title:</label>
            <input type="text" id="movie-title" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
