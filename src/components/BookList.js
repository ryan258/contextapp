import React, { Component } from "react";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>The Shining</li>
          <li>Needful Things</li>
          <li>Green Eggs and Ham</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
