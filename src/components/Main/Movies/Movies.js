import styles from "./Movies.module.scss";
import Moviecard from "../../MovieCard/Moviecard";
import { useMovieContext } from "../../../contexts/MovieContext";
import Loading from "./../../../assets/Loading.gif";
import page404 from "./../../../assets/404.jpeg";
const Movies = ({ movies }) => {
  const { isLoading } = useMovieContext();

  return isLoading ? (
    <div className={styles.movie__area}>
      <div className={styles.content_area}>
        <img width="60px" src={Loading} alt="Loadergif" />
      </div>
    </div>
  ) : movies?.length === 0 ? (
    <div className={styles.movie__area}>
      <div className={styles.content_area}>
        <img src={page404} alt="Not Found" width="100%" />
      </div>
    </div>
  ) : (
    <div className={styles.movie__area}>
      {movies?.map((movie) => (
        <Moviecard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
