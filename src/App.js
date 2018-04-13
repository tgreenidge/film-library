import React, { Component } from 'react';
import TMDB from './TMDB';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
 

class App extends Component {
  // this is the container componenet for the application.
  // it should render the child components, filmDetail and filmListing
  state = {}

  
  render() {
    const films = TMDB.films;
    
    return (
      <div className="film-library">
        <FilmListing films={films}/>
        <FilmDetails films={films}/>
      </div>
    )
    
  }

}

export default App;
