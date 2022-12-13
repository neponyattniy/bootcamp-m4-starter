import React, { Component } from 'react';
import { connect } from "react-redux";
import './SearchBox.css';
import { addMovies } from '../../redux/action/actions';

const mapDispatchToProps = (dispatch) => ({
    addMovies: (data) => dispatch(addMovies(data)),
});

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        fetch(`https://www.omdbapi.com/?s=${this.state.searchLine}&apikey=7c7aeb5e`)
            .then(res => res.json())
            .then(data => {
                this.props.addMovies(data.Search);
            });
    }
    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(SearchBox);