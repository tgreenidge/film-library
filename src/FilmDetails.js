import React from 'react';

export default function FilmDetails(props) {
  // this is the movie data that appears on the right side (title and description)
  console.log(props);
  const film = props.films[0];
  return(
    <div className="film-details">
      <div className="section-title">Details</div>
      <img className="film-backdrop" src={film.backdrop_path}/>
      <h1 className="film-title">{film.title}</h1>
      <p>{film.overview}</p>
      <img className="film-detail-poster" src={film.poster_path}/>
    </div>
  )
}
