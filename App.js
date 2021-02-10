import React, {useEffect, useState} from 'react';
import Movieapp from './Movieapp';
// import './App.css';


function App() {
  
  const api='https://api.themoviedb.org/3/movie/550?api_key=apiKey';

  const [movie,setMovie] = useState({});
  const getMovies = async () =>{
    const response = await fetch(api);
    const data = await response.json();
    console.log(data)
    setMovie(data);
  }

  useEffect(()=>{
    getMovies();
  }, []);

 
  return (
    <div className="App">
      <div className="movie">
      
          <Movieapp 
          
          background={movie.backdrop_path}
          title={movie.title}
          overview={movie.overview}
          language={movie.original_language}
          date={movie.release_date}
          status={movie.status}
          img={movie.poster_path}

  
        />
   
 
      
      </div>
     
    </div>
  );
}

export default App;
