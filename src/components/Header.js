import React from 'react';
// import axios from 'axios';


class Header extends React.Component {
    render() {
    
    return (
        <header className="App-header">
        API from<br></br><img src='https://openlibrary.org/static/images/openlibrary-logo.png' alt='Image Missing'></img>
        <span id='title'><br></br><h5>No Database Project</h5> by Logan Simonsen</span>
        <span id='netscapeText'>Powered by Netscape</span><img id='netscape' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netscape_icon.svg/1200px-Netscape_icon.svg.png' alt='Image Missing'></img>
        <img id='imgCart' src='https://d30y9cdsu7xlg0.cloudfront.net/png/28468-200.png' alt='Image Missing'></img>
          <h1 className="App-title"> </h1>
        </header>
    )
  }
}
 
  export default Header;