import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.term);
  };
  handleChange = (e) => {
    this.setState({
      term: e.target.value,
    });
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Search Video</label>
            <input
              name="text"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
