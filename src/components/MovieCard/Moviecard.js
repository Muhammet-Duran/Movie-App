import React, { useEffect, useState } from "react";
import styles from "./Moviecard.module.scss";
import Button from "../../UI/Button/Button";
import LikeIconSVG from "./../../assets/LikeIconSVG";
import { useMovieContext } from "../../contexts/MovieContext";

const Moviecard = ({ movie }) => {
  const { addFavorite, favorites } = useMovieContext();
  const [likeMovie, setLikeMovie] = useState(false);

  const IMG_API = "https://image.tmdb.org/t/p/original";
  const setRating = (rating) => {
    if (rating >= 8) {
      return `${styles.green}`;
    } else if (rating >= 6) {
      return `${styles.orange}`;
    }else {
      return `${styles.red}`;
    }
  };
  const onClickHandler = (movie) => {
    addFavorite(movie);  
  };
  useEffect(() => {
    if (favorites.find((favorite) => favorite.id === movie.id)) {
      setLikeMovie(true);
    } else {
      setLikeMovie(false);
    }
  }, [favorites.length]);


  return (
    <div className={styles.movie}>
      <div className={styles.movie__img_area}>
        <img
          src={
            movie.poster_path
              ? IMG_API + movie.poster_path
              : "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
          }
          alt={movie.original_title}
        />
        <p className={styles.movie__img_area_desc}>{movie.overview}</p>
      </div>
      <h3 className={styles.movie__title}>{movie.original_title}</h3>
      <div className={styles.movie__info}>
        <div className={styles.movie__info__date}>
          {movie?.release_date?.slice(0, 4)}
        </div>
        {
          movie.vote_average!==0 &&
        <div className={` ${styles.movie__info__rating}`}>
          <svg
            aria-label="movie rating"
            className={`${styles.round} ${setRating(movie.vote_average)}`}
            viewBox="0 0 40 40"
            width="40"
            height="40"
            strokeDasharray={`${Math.floor(
              (movie.vote_average * 112) / 10
            )} 999`}
          >
            <circle cx="50%" cy="50%" r="18" />
          </svg>
          <span>{movie.vote_average}</span>
        </div>
        }

        <Button
          className={styles.add_btn}
          onClick={() => onClickHandler(movie)}
        >
          <LikeIconSVG
            isActive={likeMovie}
            svg={styles.movie__info__svg}
            active={styles.active}
            width="32px"
          />
        </Button>
        {/* <button onClick={()=>addFavourite(movie)} className="add-btn"><LikeButton /></button> */}
      </div>
    </div>
  );
};

export default Moviecard;
