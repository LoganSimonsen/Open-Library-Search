import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import axios from "axios";
import "./App.css";
import { error } from "util";
import swal from "sweetalert";
import SkyLight from "react-skylight";
import routes from "./routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "red",
      clicked: 0,
      data: [],
      toggled: false,
      readLink: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.clickToggle = this.clickToggle.bind(this);
  }

  changeValue(event) {
    event.preventDefault();
    this.setState({ value: event.target.value.replace(/ /g, "+") });
  }
  handleSubmit(event, res, req, nexts) {
    event.preventDefault();
    axios
      .get("https://openlibrary.org/search.json?title=" + this.state.value)
      .then(response => {
        console.log(response.data.docs);
        this.setState({ data: response.data.docs });
      })
      .catch(console.log);
  }
  clickToggle(data) {
    console.dir(data);
    swal(JSON.stringify(data, null, 4));
    if (this.state.toggle) {
      this.setState({ toggle: false });
    } else {
      this.setState({ toggle: true });
    }
  }
  render() {
    const myBigGreenDialog = {
      backgroundColor: "#00897B",
      color: "#ffffff",
      width: "70%",
      height: "600px",
      marginTop: "-300px",
      marginLeft: "-35%"
    };
    let temp = this.state.data;
    let results = temp.map((data, i) => {
      let isbnTemp = 2222;
      let alertTitle = data.title;
      if (data.isbn) {
        isbnTemp = data.isbn[0];
      } else {
        isbnTemp = 2222;
      }
      let image =
        "https://covers.openlibrary.org/b/isbn/" + isbnTemp + "-M.jpg";
      return (
        <div className="resultsWrapper">
          <h3 className="bookTitle">{data.title} </h3>
          <h5>{data.author_name}</h5>
          <h6>First Published: {data.first_publish_year}</h6>
          {isbnTemp !== 2222 && (
            <img
              className="bookImage"
              src={image}
              alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuo1fvLCCgDrs2ghsuZC0Cz_Q0lRkyfNR3Uo6TB7-5eKNgZymLg"
            />
          )}
          {isbnTemp === 2222 && (
            <img
              className="bookImage"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuo1fvLCCgDrs2ghsuZC0Cz_Q0lRkyfNR3Uo6TB7-5eKNgZymLg"
            />
          )}
          <br />
          <br />
          <div>
            <button onClick={() => this.clickToggle(data)}>Details</button>

            {data.ia && (
              <a href={"https://archive.org/stream/" + data.ia[0]}>
                {data.ia !== undefined && (
                  <button className="button">Read</button>
                )}
              </a>
            )}
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        <Header />
        {window.location.href !==
          "https://openlibrarysearch.now.sh/#/subjects" &&
          window.location.href !==
            "https://openlibrarysearch.now.sh/#/author" && (
            <div>
              <form onSubmit={this.handleSubmit}>
                <label id="lable">
                  <input
                    id="inputBox"
                    type="text"
                    value={this.state.value}
                    onChange={this.changeValue}
                    placeholder="Search by Title..."
                  />
                </label>
                <input className="button submit" type="submit" value="Search" />
              </form>

              <div className="resultsDisplay">{results}</div>
            </div>
          )}
        {routes}
      </div>
    );
  }
}

export default App;
