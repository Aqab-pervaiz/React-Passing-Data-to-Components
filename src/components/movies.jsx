import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Like from "./reusableComponents/like";
import listOfMovies from "../movies";
import Pagination from "./reusableComponents/pagging";
import { paginate } from "./utilis/paginate";
class MoviesComponent extends Component {
  state = {
    listOfMoviesState: listOfMovies,
    currentPage: 1,
    pageSize: 5,
  };

  onHeartClick = (movie) => {
    const listOfMoviesState = [...this.state.listOfMoviesState];
    const index = listOfMoviesState.indexOf(movie);
    listOfMoviesState[index].liked = !listOfMoviesState[index].liked;
    this.setState({ listOfMoviesState });
  };
  onDeleteMovie = (movie) => {
    const listOfMoviesState = this.state.listOfMoviesState.filter(
      (m) => m != movie
    );
    this.setState({ listOfMoviesState });
  };

  handlePage = (page) => {
    const currentPage = page;
    this.setState({ currentPage });
    console.log(this.state.currentPage);
  };

  render() {
    const { pageSize, currentPage, listOfMoviesState } = this.state;
    const movies = paginate(listOfMoviesState, currentPage, pageSize);
    return (
      <div className="container">
        <h1 className="">Movies List</h1>
        <div className="row justify-content-center mt-50">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr>
                  <td>{movie.title}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.stock}</td>
                  <td>{movie.rate}</td>
                  <td>
                    <Like movie={movie} onHeartClick={this.onHeartClick} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.onDeleteMovie(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          itemsCount={listOfMoviesState.length}
          pageSize={pageSize}
          currentPage={currentPage}
          handlePage={this.handlePage}
        />
      </div>
    );
  }
}

export default MoviesComponent;
