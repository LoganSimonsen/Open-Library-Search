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
        axios.post('http://localhost:3001/api/test1',['test',['title']]).then(response => {
            console.log(response);
            this.setState({ booksData: response.data[0]['author_name']});
            this.setState({ booksData1: response.data[1]['author_name']});
            this.setState({ booksData2: response.data[2]['author_name']});
            this.setState({ booksData3: response.data[3]['author_name']});
            this.setState({ booksData4: response.data[4]['author_name']});
            this.setState({ booksData5: response.data[5]['author_name']});
           this.setState({ booksTitle: response.data[0]['title']});
           this.setState({ booksTitle1: response.data[1]['title']});
           this.setState({ booksTitle2: response.data[2]['title']});
           this.setState({ booksTitle3: response.data[3]['title']});
           this.setState({ booksTitle4: response.data[4]['title']});
           this.setState({ booksTitle5: response.data[5]['title']}); 
           
        });
    }
     

	render(){
        const { handleClick, responseArr, booksTitleList, $addToFavs, booksData, booksData1, booksData2, booksData3, booksData4, booksData5, booksTitle, booksTitle1, booksTitle2, booksTitle3,  booksTitle4,  booksTitle5 } = this.state;
		return(
            <div id='resultsBox'>
            <ul><h2>Post Results(filtered)</h2>
            <li><b>Title:</b> {booksTitle} <button onClick={this.handleClick} >Add\></button></li>
                <ul>
                    <li className='author'>Author: { booksData } </li>
                </ul>
                
            <li><b>Title:</b> {booksTitle1}</li>
                 <ul>
                    <li className='author'>Author: { booksData1 }</li>
                </ul>
            <li><b>Title:</b> {booksTitle2}</li>
                 <ul>
                     <li className='author'>Author: { booksData2 }</li>
                </ul>
            <li><b>Title:</b> {booksTitle3}</li>
                <ul>
                    <li className='author'> Author:{ booksData3 }</li>
                </ul>
            <li><b>Title:</b> {booksTitle4}</li>
                 <ul>
                    <li className='author'>Author: { booksData4 }</li>
                </ul>
            <li><b>Title:</b> {booksTitle5}</li>
                <ul>
                    <li className='author'>Author: { booksData5 }</li>
                </ul>
            </ul>
            
            </div>
            
            
		)
	}
}
 
  
  export default Post;