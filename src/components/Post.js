import React from 'react';
import axios from 'axios';

let clickToggle = 0;
class Post extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: 'Logan',
        lastName: 'Simonsen',
        appAuthor: ''
      }
      this.title = this.title.bind(this);
      
    } 
    title(event){
        const { firstName, lastName} = this.state;
        clickToggle += 1;
        if(clickToggle % 2 !== 0){
        axios.post('http://localhost:3001/api/post', {firstName, lastName}).then(response => {
            this.setState({appAuthor: response.data[0]['firstName']+ ' ' + response.data[0]['lastName']})
            
            
        }); 
    }else{
        this.setState({appAuthor: ''})
    }
    }
   
     

	render(){
        const { appAuthor, title } = this.state;
		return(
            <div>
            <button onClick={this.title} id='revealAuthor' className='btn btn-secondary btn-sm '>Click for Author</button>
            <div>{appAuthor}</div>
            
            
            </div>
            
            
		)
	}
}
 
  
  export default Post;