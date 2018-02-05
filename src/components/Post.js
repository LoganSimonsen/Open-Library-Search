import React from 'react';
import axios from 'axios';
import Favs from './Favs';
import App from '../App';

class Post extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
      
      
    } 
    componentDidMount() {
        axios.post('http://localhost:3001/api/test1',['testTestTest',['data'][0]]).then(response => {
            console.log(response);
            this.setState({ booksData: response.config['data']})
           
        });
    }
     

	render(){
        const { booksData } = this.state;
		return(
            <div id='resultsBox'>
            <h2>Post Response from Config</h2>
            { booksData }
            
            
            </div>
            
            
		)
	}
}
 
  
  export default Post;