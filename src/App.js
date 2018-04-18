import React, { Component } from 'react';
import TMDB from './TMDB';
import FAVORITES from './FAVORITES';
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
  
  
  render() {

    const films = TMDB.films;
    const faves = FAVORITES.films;

    
    //console.log(idMappingsForFilms);
    
    return (
      <div className="film-library">
        <FilmListing allFilms={films} faveFilms={faves} getMovieToDisplay={this.getMovieToDisplay}/>
        <FilmDetails film={films[this.state.movieDetailsToDisplayIndex]}/>
      </div>
    )
    
  }

}

export default App;
