import React from 'react';
import { Link } from 'react-router-dom';

export function Movies({ movie, config }) {
  return (
    <div className="movie-div">
      <li>
        <Link to={`/moviedetail/${movie.id}`}>
          {config.images?.base_url && (
            <img
              src={config.images?.base_url + 'w185' + movie.poster_path}
              alt={movie.title + 'Poster'}
            />
          )}
          <h3>{movie.title}</h3>
        </Link>
      </li>
    </div>
  );
}
