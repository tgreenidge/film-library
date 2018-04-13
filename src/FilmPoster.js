import React from 'react';

export default function FilmPoster(props){
  // this should render the large poster on the right side when
  // viewing a movie's details

  return (
    <div className="film-poster">
      <img src={props.url} />
    </div>
  )
};
