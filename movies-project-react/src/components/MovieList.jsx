import { Movie } from './Movie';

function MovieList(props) {
    const { movies } = props;

    return (
        <div className="movies">
            {movies.map(
                (movie) => (
                    <Movie key={movie.imdbID} {...movie} />
                ) //...movie= {title=movie.Title}, {poster=movie.Poster}
            )}
        </div>
    );
}

export { MovieList };
