import React, { Component } from "react";

class Header extends Component {
  render() {
    const { title, description,btnText } = this.props;
    return (
      <header id="Header" className="masthead">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 id="title" className="mx-auto my-0 text-uppercase">
              {title}
            </h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">{description}</h2>
            <a href="#about" className="btn-header  js-scroll-trigger">
              {btnText}
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
