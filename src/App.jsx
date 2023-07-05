import { useEffect } from "react";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=64daa982";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value="superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>
      <div className="container"></div>
    </div>
  );
};

export default App;
