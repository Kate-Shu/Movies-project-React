import React from 'react';

export class Search extends React.Component {
  state = {
    search: '',
    type: 'all',
  };
  handleKey = event => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
      console.log('fhew');
    }
  };

  handleFilter = event => {
    this.setState(
      () => ({
        type: event.target.dataset.type,
      }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            type="search"
            className="validate"
            placeholder="Search"
            value={this.state.search}
            onChange={e => this.setState({search: e.target.value})}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn btn-search"
            onClick={() => {
              this.props.searchMovies(this.state.search, this.state.type);
            }}>
            Send
          </button>
        </div>
        <br />

        <div className="filterMovies">
          <label>
            <input
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              name="type"
              type="radio"
              data-type="movie"
              checked={this.state.type === 'movie'}
              onChange={this.handleFilter}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === 'series'}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}
