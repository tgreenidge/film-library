import React, { Component } from 'react';

class Fave extends Component {
  // this is the favorites list displayed on the left side
  
  //adds an id to favorites array in local storage
  handleClick(addToFavorites) {
    this.props.addOrDeleteToFavorites(this.props.id, addToFavorites);
  }

  render() {
    //adds a + to gesture "add to movie to favorites or - to delete from favorite"
    const faveMethod = this.props.addFave ? '+' : '-';

    return faveMethod === '+' ?  (
      <div className="film-row-fave" onClick={(param) => this.handleClick(true)}>
        {faveMethod}
      </div>
    ) :
    (
      <div className="film-row-fave" onClick={(param) => this.handleClick(false)}>
        <div className="remove_from_queue">
          {faveMethod}
        </div>
      </div>
    )
  }
}

export default Fave;
