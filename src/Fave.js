import React, { Component } from 'react';

class Fave extends Component {
  // this is the favorites list displayed on the left side
  render() {
    const faveMethod = this.props.addFave ? '+' : '-' 
    return (
      <div className="film-row-fave">
        {faveMethod}
      </div>
    )
  }
}

export default Fave;
