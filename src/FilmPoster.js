import React, { Component } from 'react';

class FilmPoster extends Component {
  render() {
    const posterUrl = this.props.film.poster_path

    return (
         <img src={posterUrl} alt="" />
    )
  }
}

export default FilmPoster