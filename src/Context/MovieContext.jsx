/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { movies } from "../Data/MovieData";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [data, setData] = useState(movies);
  const [newMoviesData, setNewMoviesData] = useState(data);
  const [watchList, setWatchList] = useState([]);
  const [filters, setFilters] = useState({
    year: "",
    genre: "",
    rating: "",
    search: "",
  });
  const [addMovie, setAddMovie] = useState({
    id: uuid(),
    title: "",
    year: null,
    genre: [],
    rating: null,
    director: "",
    writer: "",
    cast: [],
    summary: "",
    imageURL: "",
  });

  const extractedGenres = newMoviesData
    .map((y) => y.genre)
    .reduce((acc, curr) => acc.concat(curr), []);

  const allGenres = [...new Set(extractedGenres)];

  const filteredMoviesFn = () => {
    const movies = [...newMoviesData];
    const searchFiltered = filters?.search
      ? movies?.filter(({ title, director, cast }) =>
          title.toLowerCase().includes(filters?.search.toLowerCase())
            ? director.toLowerCase().includes(filters?.search.toLowerCase())
            : cast?.join().toLowerCase().includes(filters?.search.toLowerCase())
        )
      : movies;

    const yearFiltered = filters?.year
      ? filters?.year === "All"
        ? movies
        : searchFiltered.filter(
            ({ year }) => year.toString() === filters?.year.toString()
          )
      : searchFiltered;
    const genreFiltered = filters?.genre
      ? filters?.genre === "All"
        ? yearFiltered
        : yearFiltered.filter(({ genre }) =>
            genre?.join().toLowerCase().includes(filters?.genre.toLowerCase())
          )
      : yearFiltered;
    const ratingFiltered = filters?.rating
      ? filters?.rating === "All"
        ? genreFiltered
        : genreFiltered?.filter(
            ({ rating }) => rating.toString() === filters?.rating.toString()
          )
      : genreFiltered;

    return ratingFiltered;
  };
  return (
    <MovieContext.Provider
      value={{
        data,
        setData,
        newMoviesData,
        setNewMoviesData,
        allGenres,
        filters,
        setFilters,
        addMovie,
        setAddMovie,
        filteredMoviesFn,
        watchList,
        setWatchList,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};