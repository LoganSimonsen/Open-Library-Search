import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import Data from '../src/components/Data';
import Form from '../src/components/Form';
import Post from '../src/components/Post';
import Delete from '../src/components/Delete';
import Header from '../src/components/Header';
import swal from 'sweetalert';
import { error } from 'util';

let cartArray = [];
let fieldVal = '';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bgColor: 'red',
        clicked: 0,
        booksTitle: '',
        booksTitle1: '',
        booksTitle2: '',
        booksTitle3: '',
        booksTitle4: '',
        booksTitle5: '',
        cart: '',
        cart1: '',
        cart2: '',
        cart3: '',
        cart4: '',
        cart5: '',

    
    }
    this.getRandomColor = this.getRandomColor.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.changeValue = this.changeValue.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getDetails = this.getDetails.bind(this);
      this.getDetails1 = this.getDetails1.bind(this);
      this.getDetails2 = this.getDetails2.bind(this);
      this.getDetails3 = this.getDetails3.bind(this);
      this.getDetails4 = this.getDetails4.bind(this);
      this.getDetails5 = this.getDetails5.bind(this);
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
getDetails(){
    axios.get('http://openlibrary.org/search.json?title=' + this.state.booksTitle).then(response => {
        
    console.log(response.data.docs[0])    
    swal('First Publish Year: '+ response.data.docs[0]['first_publish_year']
    +"\n"+ 'Edition Count: '+ response.data.docs[0]['edition_count'],  {
            buttons: [true],
          });
});
}
    getDetails1(){
        axios.get('http://openlibrary.org/search.json?title=' + this.state.booksTitle1).then(response => {
            swal('First Publish Year: '+ response.data.docs[0]['first_publish_year']
            +"\n"+ 'Edition Count: '+ response.data.docs[0]['edition_count'],  {
                    buttons: [true],
                  });
    });
    }
        getDetails2(){
            axios.get('http://openlibrary.org/search.json?title=' + this.state.booksTitle2).then(response => {
                swal('First Publish Year: '+ response.data.docs[0]['first_publish_year']
                +"\n"+ 'Edition Count: '+ response.data.docs[0]['edition_count'],  {
                        buttons: [true],
                      });
        });
        }
            getDetails3(){
                axios.get('http://openlibrary.org/search.json?title=' + this.state.booksTitle3).then(response => {
                    swal('First Publish Year: '+ response.data.docs[0]['first_publish_year']
                    +"\n"+ 'Edition Count: '+ response.data.docs[0]['edition_count'],  {
                            buttons: [true],
                          });
            });
            }
                getDetails4(){
                    axios.get('http://openlibrary.org/search.json?title=' + this.state.booksTitle4).then(response => {  
                        swal('First Publish Year: '+ response.data.docs[0]['first_publish_year']
                        +"\n"+ 'Edition Count: '+ response.data.docs[0]['edition_count'],  {
                                buttons: [true],
                              });
                });
                }
                    getDetails5(){
                        axios.get('http://openlibrary.org/search.json?title=' + this.state.booksTitle5).then(response => { 
                            swal('First Publish Year: '+ response.data.docs[0]['first_publish_year']
                            +"\n"+ 'Edition Count: '+ response.data.docs[0]['edition_count'],  {
                                    buttons: [true],
                                  });
                    });
                    }

  changeValue(event) {
   this.setState({value: event.target.value.replace(/ /g,"+")});
   
}

handleClick(event){
cartArray.push(this.state.booksTitle);
this.setState({cart: cartArray[0]});
  swal("Book added to Cart", '',"success");
}
handleClick1(event){
    cartArray.push(this.state.booksTitle1);
    this.setState({cart1: cartArray[1]});
      swal("Book added to Cart", '',"success");
    }

    handleClick2(event){
        cartArray.push(this.state.booksTitle2);
        this.setState({cart2: cartArray[2]});
          swal("Book added to Cart", '',"success");
        }
        handleClick3(event){
            cartArray.push(this.state.booksTitle3);
            this.setState({cart3: cartArray[3]});
              swal("Book added to Cart", '',"success");
            }
            handleClick4(event){
                cartArray.push(this.state.booksTitle4);
                this.setState({cart4: cartArray[4]});
                  swal("Book added to Cart", '',"success");
                }
                handleClick5(event){
                    cartArray.push(this.state.booksTitle5);
                    this.setState({cart5: cartArray[5]});
                      swal("Book added to Cart", '',"success");
                    }


clearCart(event){
event.preventDefault();
this.setState({cart: null});
this.setState({cart1: null});
this.setState({cart2: null});
this.setState({cart3: null});
this.setState({cart4: null});
this.setState({cart5: null});
this.setState({cartArray: []});
}
getRandomColor() {
    var letters = '0123456789ABCDEF';
    var colorV = '#';
    for (var i = 0; i < 6; i++) {
      colorV += letters[Math.floor(Math.random() * 16)];
    }
    this.setState({ bgColor: colorV });
    document.body.style.backgroundColor = colorV;
    return colorV;
  }



  render() {
    const { getDetails, getDetails2, getDetails3, getDetails4, getDetails5, clearCart, cartArray, cart, cart1, cart2, cart3, cart4, cart5 } = this.state;
    const { handleClick, handleClick1, handleClick2, handleClick3, handleClick4, handleClick5, handleClick6, responseArr, booksTitleList, $addToFavs, booksData, booksData1, booksData2, booksData3, booksData4, booksData5, booksTitle, booksTitle1, booksTitle2, booksTitle3,  booksTitle4,  booksTitle5 } = this.state;
    return (
      <div  className="App">
      <Header />
      <div id='cartBox'><h4>Items in Your Cart:</h4><ul><li>{cart}</li><li>{cart1}</li><li>{cart2}</li><li>{cart3}</li><li>{cart4}</li><li>{cart5}</li></ul><button onClick={this.clearCart}>Clear Cart</button></div>
      <button id='randomButton' className="btn btn-danger" onClick={this.getRandomColor} >Random Background Color</button>
      <form onSubmit={this.handleSubmit}>
          <label id='lable'>
           
            <input id='inputBox'type="text"  value={this.state.value} onChange={this.changeValue} placeholder='Search Titles...' />
          </label>
          <input type="submit" value="Submit"/>  
      <div id='resultsBox'>
            <ul><h4>Search Results</h4>

            <li>
            <b>Title:</b> {booksTitle} 
            <button type="button" className="btn btn-primary btn-sm" onClick={this.handleClick}>Add to Cart</button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={this.getDetails}>Get Details</button>
            </li> 
                <ul>
                    <li className='author'>Author: { booksData } </li>
                </ul>
                <hr></hr>
            <li>
            <b>Title:</b> {booksTitle1} 
            <button type="button" className="btn btn-primary btn-sm" onClick={this.handleClick1}>Add to Cart</button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={this.getDetails1}>Get Details</button>
            </li>
                 <ul>
                    <li className='author'>Author: { booksData1 }</li>
                </ul>
                <hr></hr>
            <li>
            <b>Title:</b> {booksTitle2} 
            <button type="button" className="btn btn-primary btn-sm" onClick={this.handleClick2}>Add to Cart</button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={this.getDetails2}>Get Details</button>
            </li>
                 <ul>
                     <li className='author'>Author: { booksData2 }</li>
                </ul>
                <hr></hr>
            <li>
            <b>Title:</b> {booksTitle3} 
            <button type="button" className="btn btn-primary btn-sm" onClick={this.handleClick3}>Add to Cart</button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={this.getDetails3}>Get Details</button>
            </li>
                <ul>
                    <li className='author'> Author:{ booksData3 }</li>
                </ul>
                <hr></hr>
            <li>
            <b>Title:</b> {booksTitle4} 
            <button type="button" className="btn btn-primary btn-sm" onClick={this.handleClick4}>Add to Cart</button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={this.getDetails4}>Get Details</button>
            </li>
                 <ul>
                    <li className='author'>Author: { booksData4 }</li>
                </ul>
                <hr></hr>
            <li>
            <b>Title:</b> {booksTitle5} 
            <button type="button" className="btn btn-primary btn-sm" onClick={this.handleClick5}>Add to Cart</button>
            <button type="button" className="btn btn-secondary btn-sm" onClick={this.getDetails5}>Get Details</button>
            </li>
                <ul>
                    <li className='author'>Author: { booksData5 }</li>
                </ul>
            
            </ul>
            
            </div>
            </form>        
      </div>
    );
  }
}

export default App;
