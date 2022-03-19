import React from "react";
import { useMovieContext } from "../../contexts/MovieContext";
import styles from "./Main.module.scss";
import SearchBar from "./SearchBar/SearchBar";
import Movies from "./Movies/Movies";

const Main = () => {
  const { movies } = useMovieContext();

  return (
    <div className={styles.main__area}>
      <SearchBar />
      <Movies movies={movies.results} />
    </div>
  );
};

export default Main;
