import React, { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import 'react-rangeslider/lib/index.css';
import Header from './Header';
import FilterBar from './FilterBar';
import '../css/App.css';

const API_KEY = process.env.REACT_APP_API_KEY

// Lazyload the movie compnenents
let Movie = lazy(() => import('./Movie'));

// React Hooks set up State inside a component function. This is an alpha release and more information can be found at https://reactjs.org/docs/hooks-intro.html
function App() {
  const [initialized, setInitialized] = useState(false);
  const [initialRating, setInitialRating] = useState(false);
  const [dataMovies, setMovieList] = useState({ results: [] });
  const [dataGenres, setGenreList] = useState({ genres: [] });
  const [rating, setRating] = useState(3);

  // API calls to returns JSON that's added to the state using React Hooks
  const fetchData = async () => {
    const movies = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`,
    );
    const genres = await axios(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`,
    );

    setMovieList(movies.data);
    setGenreList(genres);
  };

// React Hook equivalent of using componentDidMount
useEffect(() => {
  // Call the API only once
  if (!initialized) {
    fetchData();
    setInitialized(true);
  }
})

  // Passes the genre ID from the FilterBar component. Finds the genre 
  // node and see if the filter has already been checked. 
  // Sets the genre node as 'itemChecked' as true or false.
  // Updates the 'genre' state then creates an array of checked filters.
  // Filters overs the movie node and updates the state using the new 
  // inserted value 'visible'.
  const handleOnGenreChange = (element, itemChecked) => {
    // Reset Rating slider incase it has values. From UX perspective it's
    // much nicer to see all movie with genre and then filter by rating
    setInitialRating(false);
    // Update genre state to show what has been checked by matching genre
    dataGenres.data.genres.filter(genre => genre.id === element ? genre.itemChecked = !genre.itemChecked: '' );    
    setGenreList(dataGenres);
    // Create array of selected genres
    let checkedFilters = dataGenres.data.genres.filter(genre => genre.itemChecked === true).map((selected) => selected.id)
    // Update movie state by matching checked genres and movie genre_ids
    dataMovies.results.filter(movie => compareArrays(movie.genre_ids, checkedFilters) ? movie.visible = true: movie.visible = false)
  }

  // Passes the value of the rating from the RatingSlider 
  const handleOnRatingChange = (value) => {
    // Switch rating functionality by setting to true
    setInitialRating(true);
    setRating(value);
    // Create array of selected genre
    let checkedFilters = dataGenres.data.genres.filter(genre => genre.itemChecked === true).map((selected) => selected.id)
    // Update movie state by matching checked genres and movie genre_ids
    // as well as matching the movie vote_average
    dataMovies.results.filter(movie => movie.vote_average >= value && compareArrays(movie.genre_ids, checkedFilters) ? movie.visible = true: movie.visible = false);
    setMovieList(dataMovies)
  }
  // Compare two arrays Genre ID and array of selected genre ids
  function compareArrays(genre_ids, checkedFilters){ 
    return checkedFilters.every(value => genre_ids.includes(value));
  };
  
  return (
    <div className="app">
      <Header />
        { 
          dataGenres.data ?  
           <FilterBar 
             handleOnGenreChange={handleOnGenreChange} 
             genres={dataGenres.data.genres} 
             handleOnRatingChange={handleOnRatingChange} 
             rating={rating} initialRating={initialRating} 
           /> 
           : 'Loading information ...'
        }    
      <div className="container">
       <div className="row justify-content-md-center">
       <Suspense fallback={<div>Loading movie info...</div>} >
        { 
         dataMovies.results.map((movie, index) =>
         <Movie 
           key={movie.id}
           index={index} 
           movie={movie}
           genres={dataGenres.data}
         /> )
        }
        </Suspense>
       </div>
       <div className="row pull-right">
         Paging 1 | 2| 3 [todo]
       </div>
      </div>
      <div className="container">
       <div className="row justify-content-md-center my-5 camogreen pull-center">
        This product uses the TMDb API but is not endorsed or certified by TMDb.
       </div>
      </div>
    </div>
  )
}
export default App;