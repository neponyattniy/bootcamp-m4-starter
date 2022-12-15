import React, { Component } from "react";
import "./ListPage.css";
import { connect } from "react-redux";
import { makeList } from "../../redux/action/actions";

const mapStateToProps = (state) => {
  return {
    listArr: state.listArr,
    id: state.id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  makeList: (data) => dispatch(makeList(data)),
});

class ListPage extends Component {
  state = {
    title: ""
  };
  componentDidMount() {
    const id = this.props.match.params;
    console.log(id);
    fetch(
      `https://acb-api.algoritmika.org/api/movies/list/${this.props.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({title: data.title});
        this.props.makeList(data.movies);
        console.log(this.props.listArr);
      });
  }
  render() {
    return (
      <div className="list-page">
        <h1 className="list-page__title">{this.state.title}</h1>
        <ul>
          {this.props.listArr.map((item) => {
            return (
              <li key={item.imdbID}>
                <a
                  href={`https://www.imdb.com/title/${item.imdbID}/`}
                  target="_blank"
                >
                  {item.Title} ({item.Year})
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);