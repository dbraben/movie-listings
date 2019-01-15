import React from 'react';
import Genre from './Genre'
import Truncate from 'react-truncate';
import '../css/App.css';

function Movie({ movie, index, genres}){

    return(
      movie.visible || movie.visible === undefined ? 
      <div className="col-6 col-sm-4 col-md-4">
         <div className="card mt-3">
           <img className="card-img-top movie-thumbnail" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
           <div className="card-body">
             <h5 className="card-title">{ movie.title }</h5>
             <div className="star-rating"><strong>Rating: <span className="rate-color">{ movie.vote_average }</span>/10</strong></div>
             <p className="card-text">
               <Truncate lines={4} ellipsis={<span>...</span>}>
                  {movie.overview}
               </Truncate>
             </p>
             <span className="meta">
               {
                 movie.genre_ids.map(movie_genre => 
                    <Genre 
                      key={movie_genre} 
                      genre={genres.genres.map(genre => genre.id === movie_genre ? genre.name : '' )} 
                      index={index} 
                    />
                 ) 
               }
              </span>
           </div>
         </div>
       </div> : ''
    )
 }

 export default Movie;