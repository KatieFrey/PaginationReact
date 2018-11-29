import React from "react";
import PageSearch from "./PageSearch";

class App extends React.Component {
  onSearchSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="ui container" style={{ margin: "10px" }}>
        <PageSearch onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
