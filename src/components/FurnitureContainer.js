import React from 'react';
import FurnitureCard from './FurnitureCard';
import { fetchFurnituresSuccess } from '../actions/index'
import { connect } from 'react-redux'

class FurnitureContainer extends React.Component {
    componentDidMount() {
      fetch('http://localhost:3001/furnitures')
      .then(resp => resp.json())
      .then(furnitures => {
        this.props.fetchFurnituresSuccess(furnitures)
      })
    }
  
    renderFurniture = () => {
      return this.props.furnitures.map(f => (
        <FurnitureCard
          key={f.id}
          furniture={f}
        />
      ));
    }
  
    render() {
      return (
          <div className="FurnitureCard">
              <div>
                  <h1>Your Furniture</h1>
                  <div className="ui items">
                    { this.renderFurniture()}
                  </div>
              </div>
          </div>
      );
    }
  }
  
  const mapStateToProps= (storeState) => {
    return {
      furnitures: storeState.furnitures
    }
  }
  
  const mapDispatchToProps = {
    fetchFurnituresSuccess: fetchFurnituresSuccess
  }
  
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(FurnitureContainer)
  

// import React from 'react';
// import Nav from './Nav';

// function FurnitureContainer() {
//   return (
//     <div className="FurnitureContainer">
//       <header className="FurnitureContainer-header">

//         <p>Home List</p>

        
//       </header>
//     </div>
//   );
// }

// export default FurnitureContainer;