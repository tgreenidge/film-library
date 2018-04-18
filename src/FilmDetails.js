import React from 'react';

export default function FilmDetails(props) {
  // this is the movie data that appears on the right side (title and description)
  const film = props.film;

  //shows details for film
  return(
    <div className="film-details">
      <div className="section-title">Details</div>
      <img className="film-backdrop" src={film.backdrop_path}/>
      <div className="film-detail">
        <h1 className="film-title">{film.title}</h1>
        <div className="film-meta">
          <p>{film.overview}</p>
          <img className="film-detail-poster" src={film.poster_path}/>
        </div>
      </div>
    </div>
  )
}
