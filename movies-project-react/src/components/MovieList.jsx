import { Movie } from './Movie';

function MovieList(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map(
                    (movie) => <Movie key={movie.imdbID} {...movie} /> //...movie= {title=movie.Title}, {poster=movie.Poster}
                )
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
}

export { MovieList };
