import React from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave.js';

export default function FilmRow(props) {
  // this should be a component that renders the individual movies in the
  // film listing on the left side, including the 'add to fav' button.
  
  const filmDetails = props.data;
  const year = new Date(filmDetails.release_date).getFullYear();

  //gets id of movie to be displayed on right side of application
  const handleMovieSelection = () => {
    props.getMovieToDisplay(props.data.id)
  }

  return (
    <div className="film-row" onClick={handleMovieSelection}>
      <FilmPoster url={filmDetails.poster_path}/>
      <div className="film-summary">
        <h1>{filmDetails.title}</h1>
        <p>{year}</p>
        <Fave addFave={props.addFave} addOrDeleteToFavorites={props.addOrDeleteToFavorites} id={props.data.id}/>
      </div>
    </div>
  )
}
