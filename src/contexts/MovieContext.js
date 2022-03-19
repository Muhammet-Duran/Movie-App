import { createContext, useContext, useState, useEffect } from "react";
const API_KEY = process.env.REACT_APP_TMDP_API_KEY;
const MovieContext = createContext();

const FEATURED_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

export const MovieContextProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = async (API) => {
    setIsLoading(true);
    const data = await fetch(API);
    const newMovies = await data.json();
    setMovies(newMovies);

    setIsLoading(false);
  };

  

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  //Favori Film Listesi
  const addFavorite = (movie) => {
    if (favorites.find((favorite) => favorite.id === movie.id)) {
      const newList= favorites.filter((favorite) => favorite.id !== movie.id)
      setFavorites(newList);
    } else {
      const newList = [...favorites, movie];
      setFavorites(newList);
    }
  };

  useEffect(() => {
    const savedFavoriMovies = JSON.parse(localStorage.getItem("myFavorite"));
    if (savedFavoriMovies) {
      setFavorites(savedFavoriMovies);
    }
  }, []);

  useEffect(() => {
    
    localStorage.setItem("myFavorite", JSON.stringify(favorites));
  }, [favorites.length]);


  

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        addFavorite,
        favorites,
        isLoading,
        setFavorites,
        setIsLoading
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);
