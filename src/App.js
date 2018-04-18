import React, { Component } from 'react';
import TMDB from './TMDB';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
 

class App extends Component {
  // this is the container componenet for the application.
  // it should render the child components, filmDetail and filmListing
  state = {
    movieDetailsToDisplayIndex: 0,
    idMappingsForFilms: {}
  }
  
  componentDidMount() {
    this.makeMappingsForFilms();
  }

  getMovieToDisplay = (id) => {
    this.setState({movieDetailsToDisplayIndex: this.state.idMappingsForFilms[id]});
  }

  makeMappingsForFilms() {
    const idMappingsForFilms = {};
    TMDB.films.forEach((film, index) => idMappingsForFilms[film.id] = index);
    this.setState({idMappingsForFilms: idMappingsForFilms});
  }

  addOrDeleteToFavorites = (id, addItem) => {
    const faves = JSON.parse(localStorage.getItem('favorites'));
    const favorites = new Set(faves);
    
    if(addItem) {
      favorites.add(id);
    } else {
      favorites.delete(id)
    }
    
    localStorage.setItem('favorites', JSON.stringify(Array.from(favorites)));
  }
  
  render() {

    if (!localStorage.getItem('favorites')) {
      localStorage.setItem('favorites', JSON.stringify([]))
    }

    const films = TMDB.films;
    const faveIds = JSON.parse(localStorage.getItem('favorites'));
    const faves = [];
    faveIds.forEach(id => faves.push(films[this.state.idMappingsForFilms[id]]));
    
    return (
      <div className="film-library">
        <FilmListing allFilms={films} faveFilms={faves} getMovieToDisplay={this.getMovieToDisplay} addOrDeleteToFavorites={this.addOrDeleteToFavorites}/>
        <FilmDetails film={films[this.state.movieDetailsToDisplayIndex]}/>
      </div>
    )
    
  }

}

export default App;
