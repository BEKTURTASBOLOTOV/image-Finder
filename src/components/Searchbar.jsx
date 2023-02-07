import React, { Component } from "react";

export default class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChange = (event) => {
    const val = event.target.value;
    this.setState({ query: val });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };

  render() {
    return (
      <>
        <div>
          <header className="Searchbar">
            <form onSubmit={this.handleSubmit} className="SearchForm">
              <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
              </button>

              <input
                onChange={this.handleChange}
                value={this.state.query}
                className="SearchForm-input"
                autoFocus
                type="text"
                autoComplete="off"
                placeholder="Search images and photos"
              />
            </form>
          </header>
        </div>
      </>
    );
  }
}
