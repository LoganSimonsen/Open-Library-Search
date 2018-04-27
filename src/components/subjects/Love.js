import React, { Component } from "react";
import axios from "axios";

class Love extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
      subject: ""
    };
    this.searchSubject = this.searchSubject.bind(this);
    this.getResults = this.getResults.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }
  componentDidMount() {
    // let temp123 = this.state.subject;
    // axios
    //   .post("/api/subject", { temp123 })
    //   .then(response => {
    //     console.log("response@Love", response.data.works);
    //     this.setState({ works: response.data.works });
    //   })
    //   .catch(console.log);
  }
  getResults() {
    let temp123 = this.state.subject;
    axios
      .post("/api/subject", { temp123 })
      .then(response => {
        this.setState({ works: response.data.works });
        this.setState({ subject: "" });
      })
      .catch(console.log);
  }
  searchSubject(event) {
    event.preventDefault();
    this.setState({ subject: this.state.value }, () => this.getResults());
  }
  changeValue(event) {
    event.preventDefault();
    this.setState({ value: event.target.value.replace(/ /g, "+") });
  }

  render() {
    let tempData = this.state.works.map((data, i) => {
      let coverIDTemp = 2222;
      if (data.cover_id) {
        coverIDTemp = data.cover_id;
      } else {
        coverIDTemp = 2222;
      }
      let tempUrl =
        "http://covers.openlibrary.org/b/id/" + coverIDTemp + "-M.jpg";
      return (
        <div className="resultsWrapper">
          <h3 className="bookTitle">{data.title}</h3>
          {data.authors[0] && (
            <h5 style={{ backgroundColor: "white" }}>
              Author: {data.authors[0].name}
            </h5>
          )}
          {coverIDTemp !== 2222 && (
            <img
              className="bookImage"
              src={tempUrl}
              alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuo1fvLCCgDrs2ghsuZC0Cz_Q0lRkyfNR3Uo6TB7-5eKNgZymLg"
            />
          )}
          {coverIDTemp === 2222 && (
            <img
              className="bookImage"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuo1fvLCCgDrs2ghsuZC0Cz_Q0lRkyfNR3Uo6TB7-5eKNgZymLg"
            />
          )}
          <br />
          <a href={"https://archive.org/stream/" + data.ia}>
            <button className="button">READ</button>
          </a>
        </div>
      );
    });
    return (
      <div>
        <form onSubmit={this.searchSubject}>
          <label id="lable">
            <input
              id="inputBox"
              type="text"
              value={this.state.value}
              onChange={this.changeValue}
              placeholder="Search by Subject..."
            />
          </label>
          <input className="button submit" type="submit" value="Search" />
        </form>
        <div className="resultsDisplay">{tempData}</div>
      </div>
    );
  }
}

export default Love;
