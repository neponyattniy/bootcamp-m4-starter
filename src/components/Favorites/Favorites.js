import React, { Component } from "react";
import { connect } from "react-redux";
import { setId, removeFromFavourites } from "../../redux/action/actions";
import "./Favorites.css";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
    idPost: state.id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorites: (id) => dispatch(removeFromFavourites(id)),
  setId: (id) => dispatch(setId(id)),
});

class Favorites extends Component {
  clickHandler() {
    let list = {
      title: document.querySelector(".favorites__name").value,
      movies: this.props.favorites,
    };

    fetch("https://acb-api.algoritmika.org/api/movies/list/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(list),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.id);
        this.props.setId(data.id);
      })
      .catch((err) => console.log(err));
    document.querySelector(".favorites__save").textContent = "Идет запрос";
    setTimeout(() => {
      document.querySelector(".favorites__save").remove();
      document.querySelector(".ssilka").style.display = 'block'
    }, 1000);
  }

  render() {
    console.log(this.props.favorites);

    return (
      <div className="favorites">
        <input placeholder="Новый список" className="favorites__name" />
        <ul className="favorites__list">
          {this.props.favorites.map((item) => {
            return (
              <li key={item.imdbID}>
                {item.Title} ({item.Year})
                <button
                  className="deletefav"
                  onClick={() => {
                    this.props.removeFromFavorites(item.imdbID);
                  }}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          className="favorites__save"
          onClick={() => {
            this.clickHandler();

          }}
        >
          Сохранить список
        </button>
        <Link className="ssilka" to={`/list/${this.props.idPost}`}>
          Перейти к списку
        </Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);