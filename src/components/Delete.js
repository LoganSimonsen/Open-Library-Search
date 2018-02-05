import React from 'react';
import axios from 'axios';

class Delete extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
      
      
    } 
    componentDidMount() {
        axios.delete('http://localhost:3001/api/test1'[0]).then(response => {
            console.log(response);
            
           
        });
    }
     

	render(){
		return(
            <div id='resultsBox'>
            <h2>Delete</h2>
            
            
            </div>
            
            
		)
	}
}
 
  
  export default Delete;