import React from "react";
import unsplash from "../api/unsplash";
import PageSearch from "./PageSearch";
import ImageList from "./ImageList/ImageList";
import Modal from "./Modal";
const IMAGES_PER_PAGE = 10;

class App extends React.Component {
  state = {
    currentPage: 1,
    images: [],
    modalOpen: false,
    modalUrl: ""
  };

  toggleModal = url => {
    this.setState({
      modalOpen: !this.state.modalOpen,
      modalUrl: url
    });
  };

  currentImages = () => {
    let begin = (this.state.currentPage - 1) * IMAGES_PER_PAGE;
    let end = begin + IMAGES_PER_PAGE;

    return this.state.images.slice(begin, end);
  };

  handlePrevious = () => {
    this.setState({
      currentPage: this.state.currentPage - 1
    });
  };

  handleNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, page: 1, per_page: 50 }
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ margin: "10px" }}>
        <PageSearch onSubmit={this.onSearchSubmit} />
        <button onClick={this.handlePrevious}>Previous</button>
        <button onClick={this.handleNext}>Next</button>
        <ImageList images={this.currentImages()} onClick={this.toggleModal} />
        <Modal
          onClick={this.toggleModal}
          show={this.state.modalOpen}
          url={this.state.modalUrl}
        />
      </div>
    );
  }
}

export default App;
