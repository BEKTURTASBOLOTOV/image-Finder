import React, { Component } from "react";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import "./App.css";
import Button from "./components/Button";
import Modal from "./components/Modal";
export default class App extends Component {
  state = {
    images: [],
    page: 1,
    query: "",
    isLoading: false,
    loading: false,
    showModal: false,
    src: null,
  };

  componentDidMount() {
    axios
      .get(
        `https://pixabay.com/api/?key=33251627-3ea5c9b1e70c2b58b44dd395b&q=nature&page=12&image_type=photo&per_page=12`
      )
      .then((response) => {
        this.setState({ images: response.data.hits, loading: true });
      });
  }

  componentDidUpdate() {
    if (this.state.isLoading) {
      this.loadImages();
    }
  }

  loadImages = async () => {
    const { page, query } = this.state;
    try {
      await axios
        .get(
          `https://pixabay.com/api/?key=33251627-3ea5c9b1e70c2b58b44dd395b&q=${query}&image_type=photo&per_page=12&page=${page}`
        )
        .then((response) => {
          this.setState(({ images }) => ({
            images: [...images, ...response.data.hits],
            isLoading: false,
            loading: true,
          }));
        });
    } catch (error) {
      alert(error);
    }
  };

  onSubmit = (data) => {
    this.setState({ query: data, isLoading: true, images: [] });
  };

  handleClick = () => {
    this.setState(({ page }) => ({
      page: page + 1,
      isLoading: true,
    }));
  };

  toggleModal = (src) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      src,
    }));
  };

  render() {
    const { loading, showModal, src } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        {!loading ? (
          <div className="spinner">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="196"
              visible={true}
            />
          </div>
        ) : (
          <ImageGallery
            images={this.state.images}
            modalToggler={this.toggleModal}
          />
        )}
        {showModal && (
          <Modal closeModal={this.toggleModal}>
            <img
              src={src}
              alt=""
              style={{
                height: "90vh",
                width: "70vw",
                borderRadius: "5px",
              }}
            />
          </Modal>
        )}

        <Button onClick={this.handleClick} />
      </>
    );
  }
}
