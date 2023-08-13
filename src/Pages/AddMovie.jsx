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
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
