import Movies from "../components/Main/Movies/Movies";
import { useMovieContext } from "./../contexts/MovieContext";
import styles from "./../components/Main/Main.module.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Favorite = () => {
  const { favorites } = useMovieContext();
  const textRef = useRef(null);

  useEffect(() => {
    if (!favorites?.length > 0) {
      init(textRef.current, {
        showCursor: false,
        strings: ["There is no content!"],
      });
    }
  }, []);

  return (
    <div className={styles.main__area}>
      {favorites?.length > 0 ? (
        <Movies movies={favorites} />
      ) : (
        <p className={styles.main__area__not_content} ref={textRef}></p>
      )}
    </div>
  );
};

export default Favorite;
