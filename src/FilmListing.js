import React, { Component } from 'react';
import FilmRow from './FilmRow.js';

class FilmListing extends Component {
  // this is the listing area where the individual film row components will appear.

  state = {
    showAll: true
  }
  
  handleClick(filmsToShow) {

  }

  render() {

    const allFilms = this.props.allFilms;
    const faves = this.props.faveFilms;

    const films = this.state.showAll ? allFilms : faves;
    
    const filmRows = films.map((film, index) => {
      return <FilmRow
          key={index}
          data={film}/>;
    });

    return(
      <div className="film-list">
        <div className="section-title">Films</div>
        <div className="film-list-filters">
          <div className="film-list-filter">All<span className="section-count">{allFilms.length}</span></div>
          <div className="film-list-filter">Faves<span className="section-count">{faves.length}</span></div>
        </div>
        {filmRows}
      </div>
    )
  }
}

export default FilmListing;