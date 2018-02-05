import React from 'react';
import axios from 'axios';
import Favs from './Favs';
// import NewComponent from './NewComponent';

let responseArr = [];
let $addToFavs = '';
class Data extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        booksData: [],
        booksTitle: [],
        booksTitleList: [],
        showComponent: false,
        
      }
      this.handleClick = this.handleClick.bind(this);
      
    } 
    componentDidMount() {
        axios.get('http://localhost:3001/api/test1').then(response => {
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
           responseArr.push(response.data[0]['title'], response.data[1]['title'], response.data[2]['title'], response.data[3]['title'] );
           console.log(responseArr);
        });
    }
     handleClick(e) {
          e.preventDefault();
          console.log(responseArr[0]);
          $addToFavs = responseArr[0];
          this.setState({
            showComponent: true,
          });
          alert("Added to Cart");
    }

	render(){
        const { handleClick, responseArr, booksTitleList, $addToFavs, booksData, booksData1, booksData2, booksData3, booksData4, booksData5, booksTitle, booksTitle1, booksTitle2, booksTitle3,  booksTitle4,  booksTitle5 } = this.state;
		return(
            <div id='resultsBox'>
            <ul><h2>Example Results</h2>
            <li><b>Title:</b> {booksTitle} </li>
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
 
  
  export default Data;