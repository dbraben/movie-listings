import React from 'react';
import Slider from 'react-rangeslider';

// Passes in the value of the rating and the slider
// method 'handleOnRatingChange' used to filtering the 
// selection of movies by the 'average_vote' 
// Movie/now_playing API value.

function RatingSlider({ rating, handleOnRatingChange, initialRating }) {

    return (
     <div className="row justify-content-md-center my-3">
       { initialRating ?
        <div className="pull-center col-12">Ratings of <strong><span className="rate-color">{rating}</span>/10</strong> or above</div> : 
       <div className="pull-center col-12">Click to filter by rating</div> }
        <div className="centeriser">
        <Slider
          min={0}
          max={10}
          step={0.5}
          value={rating}
          orientation="horizontal"
          onChange={(value) => handleOnRatingChange(value)}
        />
        </div>
     </div>
    )
}

export default RatingSlider;