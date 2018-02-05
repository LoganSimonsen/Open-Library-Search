import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
      super(props);
     
      this.state = {
          value: '',
         
    };
        
      
      this.changeValue = this.changeValue.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleSubmit(event, res, req, nexts){
      event.preventDefault();
        axios.get('http://openlibrary.org/search.json?title=' + this.state.value).then(response => {
          this.setState({ booksData: response.data.docs[0]['author_name']});
          this.setState({ booksData1: response.data.docs[1]['author_name']});
          this.setState({ booksData2: response.data.docs[2]['author_name']});
          this.setState({ booksData3: response.data.docs[3]['author_name']});
          this.setState({ booksData4: response.data.docs[4]['author_name']});
          this.setState({ booksData5: response.data.docs[5]['author_name']});
         this.setState({ booksTitle: response.data.docs[0]['title']});
         this.setState({ booksTitle1: response.data.docs[1]['title']});
         this.setState({ booksTitle2: response.data.docs[2]['title']});
         this.setState({ booksTitle3: response.data.docs[3]['title']});
         this.setState({ booksTitle4: response.data.docs[4]['title']});
         this.setState({ booksTitle5: response.data.docs[5]['title']}); 
          })
          .catch(console.log);
}

    changeValue(event) {
     this.setState({value: event.target.value.replace(/ /g,"+")});
     
}
  
    render() {
        const { value, output } = this.state;
        const { handleClick, responseArr, booksTitleList, $addToFavs, booksData, booksData1, booksData2, booksData3, booksData4, booksData5, booksTitle, booksTitle1, booksTitle2, booksTitle3,  booksTitle4,  booksTitle5 } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <label id='lable'>
            Search Book Titles:
            <input type="text"  value={this.state.value} onChange={this.changeValue} placeholder='The way of...' />
          </label>
          <input type="submit" value="Submit"/>

          <div id='resultsBox'> <h4>Custom Search</h4> 
          
          <li><b>Title:</b> {booksTitle} </li> 
          <ul>
              <li className='author'>Author: { booksData } </li>
          </ul>
          
      <li><b>Title:</b> {booksTitle1} </li>
           <ul>
              <li className='author'>Author: { booksData1 }</li>
          </ul>
      <li><b>Title:</b> {booksTitle2} </li>
           <ul>
               <li className='author'>Author: { booksData2 }</li>
          </ul>
      <li><b>Title:</b> {booksTitle3} </li>
          <ul>
              <li className='author'> Author:{ booksData3 }</li>
          </ul>
      <li><b>Title:</b> {booksTitle4} </li>
           <ul>
              <li className='author'>Author: { booksData4 }</li>
          </ul>
      <li><b>Title:</b> {booksTitle5} </li>
          <ul>
              <li className='author'>Author: { booksData5 }</li>
          </ul>
      

  </div>
        </form>
        
      );
    }
  }
  export default Form;