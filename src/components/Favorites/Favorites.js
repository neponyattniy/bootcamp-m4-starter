import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFromFavourites} from "../../redux/action/actions";
import "./Favorites.css";

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorites: (id) => dispatch(removeFromFavourites(id)),
});

const setDisable = () => {
    if(document.querySelector('.favorites__name').value === '')
    {
        document.querySelector('.favorites__save').style.backgroundColor = 'red'
        document.querySelector('.favorites__save').disabled = true
    }
}

window.addEventListener('load', () =>{
    setDisable()
})

class Favorites extends Component {
  render() {
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
        <button type="button" className="favorites__save">
          Сохранить список
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
