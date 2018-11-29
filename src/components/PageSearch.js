import React, { Component } from "react";

class PageSearch extends Component {
  onInputChange() {}

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Search</label>
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default PageSearch;
