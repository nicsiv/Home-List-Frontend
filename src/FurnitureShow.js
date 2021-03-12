import React from 'react';

const FurnitureShow = props => {
  console.log(props)
  return (
    <div className="App">
      
      <h4>Your Furniture</h4>

      {props.furniture.furniture}
      {props.furniture.room}
      {props.furniture.store}
    </div>
  );
};

export default FurnitureShow;
