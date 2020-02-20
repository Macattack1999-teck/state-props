import React, { Component } from "react";
// import { directive, isExpressionWrapper } from "@babel/types";

export default class NavBar extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div>
          Home
        </div>
        <div>
          About
        </div>
        <div>
          Contact
        </div>
      </div>
    )
  }
}

// export default NavBar