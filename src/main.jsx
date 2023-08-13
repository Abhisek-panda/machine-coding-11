import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import { MovieContext, MovieProvider } from "./Context/MovieContext.jsx";

export const useMovies = () => useContext(MovieContext);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieProvider>
      <Router>
        <App />
      </Router>
    </MovieProvider>
  </React.StrictMode>
);
