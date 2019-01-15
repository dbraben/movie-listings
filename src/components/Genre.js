import React from 'react';

function Genre(movie, index) {
  return (
    <span  key={index} className="badge badge-pill badge-secondary mx-1 text-uppercase smallscreenfloatleft">
      { movie.genre } 
    </span>
  )
}
export default Genre;