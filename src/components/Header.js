import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <span className="welcomeBanner">Welcome to Open Library Search!</span>
          <br />
          <a
            style={{ zoom: "0.8" }}
            href="https://openlibrary.org/help/faq/about"
          >
            About Open Library
          </a>
          <div className="navbar-header">
            <a className="navbar-brand" href="https://openlibrary.org">
              <img
                className="navLogo"
                src="https://openlibrary.org/static/images/openlibrary-logo.png"
              />
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li>
              <a href="#">Search By: </a>
            </li>
            {window.location.href === "https://openlibrarysearch.now.sh/#/" && (
              <li className="active">
                <a href="/#/">Titles</a>
              </li>
            )}
            {window.location.href !== "https://openlibrarysearch.now.sh/#/" && (
              <li>
                <a href="/#/">Titles</a>
              </li>
            )}
            {window.location.href ===
              "https://openlibrarysearch.now.sh/#/subjects" && (
              <li className="active">
                <a href="/#/subjects">Subjects</a>
              </li>
            )}
            {window.location.href !==
              "https://openlibrarysearch.now.sh/#/subjects" && (
              <li>
                <a href="/#/subjects">Subjects</a>
              </li>
            )}
            {window.location.href ===
              "https://openlibrarysearch.now.sh/#/author" && (
              <li className="active">
                <a href="/#/author">Author</a>
              </li>
            )}
            {window.location.href !==
              "https://openlibrarysearch.now.sh/#/author" && (
              <li>
                <a href="/#/author">Author</a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
