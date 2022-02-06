import { MovieCard } from "./MovieCard";

import "../styles/content.scss";
import { memo } from "react";

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface Props {
  movies: MovieProps[];
  selectedGenreTitle: string;
}

function ContentComponent({ movies, selectedGenreTitle }: Props) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenreTitle}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export const Content = memo(ContentComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.movies, nextProps.movies);
});
