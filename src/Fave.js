import React, { Component } from 'react';

class Fave extends Component {
  // this is the favorites list displayed on the left side
  handleClick(addToFavorites) {
    this.props.addOrDeleteToFavorites(this.props.id, addToFavorites);
  }

  render() {
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
