import React from 'react';
// import axios from 'axios';

class Favs extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
        
       
  };
}
  render() {
    
    return (
      <div id='resultsBox'>
        <h4>Favorites List</h4>
         {this.props.passedVal}
      </div>
    )
  }
}
 
  
  export default Favs;