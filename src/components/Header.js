import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          Welcome to Open Library Search!
          <br />
          <a
            style={{ zoom: "0.8" }}
            href="https://openlibrary.org/help/faq/about"
          >
            About Open Library
          </a>
          <div class="navbar-header">
            <a class="navbar-brand" href="https://openlibrary.org">
              <img
                className="navLogo"
                src="https://openlibrary.org/static/images/openlibrary-logo.png"
              />
            </a>
          </div>
          <ul class="nav navbar-nav">
            <li>
              <a href="#">Search By: </a>
            </li>
            {window.location.href === "http://localhost:3000/#/" && (
              <li class="active">
                <a href="/#/">Titles</a>
              </li>
            )}
            {window.location.href !== "http://localhost:3000/#/" && (
              <li>
                <a href="/#/">Titles</a>
              </li>
            )}
            {window.location.href === "http://localhost:3000/#/subjects" && (
              <li class="active">
                <a href="/#/subjects">Subjects</a>
              </li>
            )}
            {window.location.href !== "http://localhost:3000/#/subjects" && (
              <li>
                <a href="/#/subjects">Subjects</a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
