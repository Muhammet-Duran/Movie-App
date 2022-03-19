import Movies from "../components/Main/Movies/Movies";
import { useMovieContext } from "./../contexts/MovieContext";
import styles from './../components/Main/Main.module.scss';

const Favorite = () => {
  const { favorites } = useMovieContext();

  return (
    <div className={styles.main__area}>
      <Movies movies={favorites} />
    </div>
  );
};

export default Favorite;
