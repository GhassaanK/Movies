import './App.css';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import movieData from './movieData.json';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = (title) => {
    const filteredMovies = movieData.filter(movie =>
      movie.Title.toLowerCase().includes(title.toLowerCase())
    );
    setMovies(filteredMovies);
  }

  useEffect(() => {
    setMovies(movieData);
  }, []);

  // const appAfter = {
  //   style: { backgroundColor: 'blue'}
  // };
  return (
    <div className= "app">
      <h3 className=''>Click for dark mode</h3>
      <h1>Movie Mania</h1>

      <div className="search">
        <input
          type="text"
          value={searchTerm}
          placeholder='Search Movies'
          onChange={(e) => {
            setSearchTerm(e.target.value);
            searchMovies(e.target.value);
          }}
        />
        
      </div>

      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No Movies</h2>
        </div>
      )}
    </div>
  );
}

export default App;
