import React from "react";
import { useMovieContext } from "../../contexts/MovieContext";
import styles from "./Main.module.scss";
import SearchBar from "./SearchBar/SearchBar";
import Movies from "./Movies/Movies";
import NotFound from "../NotFound/NotFound";

const Main = () => {
  const { movies, isLoading } = useMovieContext();

  return (
    <div className={styles.main__area}>
      <SearchBar />
      {movies?.results?.length > 0 ? (
        <Movies movies={movies.results} />
      ) : (
        !isLoading && <NotFound />
      )}
    </div>
  );
};

export default Main;
