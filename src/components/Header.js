import React from 'react';
// import axios from 'axios';
import Post from './Post';


class Header extends React.Component {
    render() {
    
    return (
        <header className="App-header">
        API from<br></br><img src='https://openlibrary.org/static/images/openlibrary-logo.png' alt='Missing'></img>
        <span id='title'><br></br><h5>No Database Project</h5> <Post /></span>
        
          <h1 className="App-title"> </h1>
        </header>
    )
  }
}
 
  export default Header;