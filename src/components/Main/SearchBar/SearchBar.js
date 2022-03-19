import styles from "./SearchBar.module.scss";
import { useMovieContext } from "../../../contexts/MovieContext";
const API_KEY = process.env.REACT_APP_TMDP_API_KEY;

const SearchBar = () => {
  const { setMovies, movies, setIsLoading } = useMovieContext();

  const onChangeValue = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    const search = e.target.value;

    if(search.trim().length > 0){
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`
      )
      const movies = await data.json();
      setMovies(movies)
      setIsLoading(false)
      return;
    }
      setMovies(movies)
      setIsLoading(false)
      
  };
  // console.log(movies.results[1])
  

  return (
    <div className={styles.searchContent}>
      <form className={styles.searchContent__form}>
        <input
          className={styles.searchContent__form__search}
          placeholder="search for a movie"
          onChange={onChangeValue}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
