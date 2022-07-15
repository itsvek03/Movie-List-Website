import React, { Component } from 'react'
import data from '../data.json'
import TableRow from './TableRow'
import TableData from './TableData'

export default class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
    }

    componentDidMount() {

        this.setState({ movies: data })
    }


    deleteMovies = (id) => {
        console.log(id)
        const movieData = this.state.movies.filter((item) => item.id !== id)
        this.setState({ movies: movieData })
    }

    updateMovieStatus = (id) => {
        const updateMovie = this.state.movies.map((item) => item.id - 1 === this.state.movies.findIndex((i) => i.id === id) ?
            (item.Status === "Flop") ? { ...item, Status: "Super Hit" } : { ...item, Status: "Flop" } : item)
        this.setState({ movies: updateMovie })
    }


    render() {
        return (

            <div>
                {this.state.movies.length === 0 ? "No movies in the database" :
                    renderList(this.state.movies, this.deleteMovies, this.updateMovieStatus)
                }

            </div>
        )
    }
}

function renderList(movies, delMovies, updateMovieStatus) {

    return (
        <table className="table">
            <TableRow />
            <tbody>
                {
                    mapMovie(movies, delMovies, updateMovieStatus)
                }
            </tbody>
        </table>
    )

}

function mapMovie(movies, delMovies, updateMovieStatus) {
    return (
        movies.map((mov) => {
            return (
                <TableData mov={mov} delMovies={delMovies} key={mov.id} updateMovieStatus={updateMovieStatus} />
            )
        })
    )
}
