import React, { Component } from 'react';
import FilmRow from './FilmRow.js';

class FilmListing extends Component {
  // this is the listing area where the individual film row components will appear.

  render() {
    //modify for faves count
    const faves = 0;

    const filmRows = this.props.films.map((film, index) => {
      return <FilmRow
          key={index}
          data={film}/>;
    });
    
    return(
      <div className="film-list">
        <div className="section-title">Films</div>
        <div className="film-list-filters">
          <div className="film-list-filter">All<span className="section-count">{filmRows.length}</span></div>
          <div className="film-list-filter">Faves<span className="section-count">{faves}</span></div>
        </div>
        {filmRows}
      </div>
    )
  }
}

export default FilmListing;