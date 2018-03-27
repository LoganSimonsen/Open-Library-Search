import React, { Component } from "react";
import axios from "axios";
import "../index.css";
import { error } from "util";
import Love from "./subjects/Love";

class Subjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [],
      // subject: ""
    };
  }
  componentDidMount() {
    // axios
    //   .get("http://openlibrary.org/subjects/love.json?details=true")
    //   .then(response => {
    //     this.setState({ data: response });
    //   })
    //   .catch(console.log);
  }

  render() {
    return (
      <div className="App">
        <Love />
      </div>
    );
  }
}

export default Subjects;
