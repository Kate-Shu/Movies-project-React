import { MovieList } from '../components/MovieList';
import React from 'react';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

export class Main extends React.Component {
    state = {
        movies: [],
    };

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=2eaf7a6b&s=Matrix')
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    }

    searchMovies = (str, type = 'all') => {
        fetch(
            `http://www.omdbapi.com/?apikey=2eaf7a6b&s=${str}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) => this.setState({ movies: data.Search }));
    };

    render() {
        const { movies } = this.state;

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                {movies.length ? ( //error!!
                    <MovieList movies={movies} />
                ) : (
                    <Preloader />
                )}
            </main>
        );
    }
}
