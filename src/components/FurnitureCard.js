import React from 'react';
import { connect } from 'react-redux'


const FurnitureCard = props => {
  return (
    <div className="FurnitureCard">
      <header className="FurnitureCard-header">

        {/* <p>Furniture 1</p> */}
        <div className="middle aligned content">
        <div className="header">{props.furniture.furniture}</div>
        <div className="room">{props.furniture.room}</div>
        <div className="room">{props.furniture.store}</div>
        <div className="description">
      
        </div>
        <div className="ui red basic button">
          Delete
        </div>

        </div>
      </header>
    </div>
  );
}

export default FurnitureCard
