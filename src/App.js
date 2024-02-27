import './App.css';
import { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com?apikey=9b07e710';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
    setMovies(data.Search);
  }
  useEffect(()=>{
    searchMovies("Superman");
  },[]);

  return (
    <div className="app">
      <h1>Movie Mania</h1>

      <div className="search">
        <input type="text" value={searchTerm} placeholder='Search Movies' onChange={(e)=> setSearchTerm(e.target.value)}/>
        <img src={SearchIcon} alt='search' onClick={(e)=>searchMovies(searchTerm)}/>
      </div>

      {
        movies.length > 0
        ?(
          <div className="container">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No Movies</h2>
          </div>
        )
      }

      


    </div>
  );
}

export default App;
