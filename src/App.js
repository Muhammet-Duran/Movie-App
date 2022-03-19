import styles from "./App.module.scss";
import Header from "./components/Header/Header";

import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {MovieContextProvider} from './contexts/MovieContext';

function App() {
  return (
    <MovieContextProvider>
      <div className={styles.app}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Router>
      
    </div>
    </MovieContextProvider>
    
  );
}

export default App;
