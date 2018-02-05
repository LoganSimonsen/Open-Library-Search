import React from 'react';
import axios from 'axios';

class Delete extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        deleteData: '',
      }
      
      
    } 
    componentDidMount() {
        axios.delete('http://localhost:3001/api/delete/data').then(response => {
            console.log(response.data[0]);
            this.setState({deleteData: response.data[0]});
            
            
           
        });
    }
     

	render(){
    const { deleteData } = this.state;
		return(
            <div id='resultsBox'>
            <h4>Delete Response</h4>
              undefined
            
            </div>
            
            
		)
	}
}
 
  
  export default Delete;