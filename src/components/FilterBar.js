import React from 'react';
import RatingSlider from './RatingSlider'

// The filterbar takes in the values of the movies and genres
// and combines the deep node values. It also manages the context
// of the movie filters using the itemChecked value within the 
// checkbox.
function FilterBar({ handleOnGenreChange, genres, handleOnRatingChange, rating, itemChecked, initialRating }){
    return(
      <div className="row justify-content-md-center">
        <div className="row greybkd app-heading px-5">
         { genres ? genres.map((genre, index) => 
                <div className='genres col-lg-2 col-md-4 col-sm-4 col-xl-2 col-6' key={index}>
                    <label>
                        <input type="checkbox" 
                            name={genre.name} 
                            value={genre.id}
                            id={genre.id}
                            checked={itemChecked}
                            onChange={(itemChecked) => handleOnGenreChange(genre.id, itemChecked.value)}
                        /> 
                       &nbsp; { genre.name }
                    </label>
                </div>
            ): 'Loading ...'
         }
        </div>
        <div className="row justify-content-md-center my-3">
             <RatingSlider handleOnRatingChange={handleOnRatingChange} rating={rating} initialRating={initialRating} />
        </div>
      </div>
    )
 }
 export default FilterBar;