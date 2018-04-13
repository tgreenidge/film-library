import React, { Component } from 'react';
import FilmRow from './FilmRow.js';

class FilmListing extends Component {
  // this is the listing area where the individual film row components will appear.

  render() {
    const filmRows = this.props.films.map((film, index) => {
      return <FilmRow
          key={index}
          data={film}/>;
    });
    return(
      <div className="film-list">
        {filmRows}
      </div>
    )
  }
}

export default FilmListing;